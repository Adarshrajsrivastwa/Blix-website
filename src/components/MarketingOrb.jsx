import { useEffect, useRef } from 'react'
import {
  BufferGeometry,
  DoubleSide,
  Float32BufferAttribute,
  Group,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  SphereGeometry,
  TorusGeometry,
  IcosahedronGeometry,
  WebGLRenderer,
} from 'three'
import { gsap } from 'gsap'

export default function MarketingOrb() {
  const hostRef = useRef(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return undefined

    let renderer
    let frame = 0
    let resizeObserver
    let context
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    try {
      const scene = new Scene()
      const camera = new PerspectiveCamera(36, 1, 0.1, 40)
      camera.position.z = 5.6

      renderer = new WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
      renderer.setSize(host.clientWidth, host.clientHeight, false)
      renderer.setClearColor(0x000000, 0)
      host.appendChild(renderer.domElement)

      const masterGroup = new Group()
      scene.add(masterGroup)

      // Inner glowing core: faceted icosahedron
      const coreGeometry = new IcosahedronGeometry(0.78, 1)
      const coreMaterial = new MeshBasicMaterial({
        color: 0x4f46e5,
        wireframe: true,
        transparent: true,
        opacity: 0.65,
      })
      const core = new Mesh(coreGeometry, coreMaterial)
      masterGroup.add(core)

      // Solid inner mini nucleus
      const nucleus = new Mesh(
        new SphereGeometry(0.32, 16, 16),
        new MeshBasicMaterial({
          color: 0xec4899,
          transparent: true,
          opacity: 0.85,
        }),
      )
      masterGroup.add(nucleus)

      // Outer wireframe sphere
      const outerGlobe = new Mesh(
        new SphereGeometry(1.42, 22, 16),
        new MeshBasicMaterial({
          color: 0x60a5fa,
          wireframe: true,
          transparent: true,
          opacity: 0.28,
        }),
      )
      masterGroup.add(outerGlobe)

      // Particle constellation sphere
      const positions = []
      const count = 140
      const goldenAngle = Math.PI * (3 - Math.sqrt(5))
      for (let i = 0; i < count; i += 1) {
        const y = 1 - (i / (count - 1)) * 2
        const radius = Math.sqrt(1 - y * y)
        const theta = goldenAngle * i
        const r = 1.45 + (Math.sin(i * 1.5) * 0.08)
        positions.push(Math.cos(theta) * radius * r, y * r, Math.sin(theta) * radius * r)
      }
      const dotGeometry = new BufferGeometry()
      dotGeometry.setAttribute('position', new Float32BufferAttribute(positions, 3))
      const dots = new Points(
        dotGeometry,
        new PointsMaterial({
          color: 0x38bdf8,
          size: 0.038,
          transparent: true,
          opacity: 0.88,
          sizeAttenuation: true,
        }),
      )
      masterGroup.add(dots)

      // Orbital Rings
      const ringMaterials = [
        new MeshBasicMaterial({ color: 0x818cf8, transparent: true, opacity: 0.42, side: DoubleSide }),
        new MeshBasicMaterial({ color: 0xf472b6, transparent: true, opacity: 0.38, side: DoubleSide }),
        new MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.32, side: DoubleSide }),
      ]

      const ringGroups = []
      const ringConfigs = [
        { radius: 1.85, tube: 0.009, rot: [0.35, 0.45, 0.2], speed: 0.008, matIdx: 0 },
        { radius: 1.72, tube: 0.008, rot: [1.15, -0.6, -0.4], speed: -0.012, matIdx: 1 },
        { radius: 2.05, tube: 0.007, rot: [-0.65, 0.85, 0.7], speed: 0.006, matIdx: 2 },
      ]

      ringConfigs.forEach(({ radius, tube, rot, speed, matIdx }) => {
        const ringG = new Group()
        ringG.rotation.set(...rot)

        const torus = new Mesh(new TorusGeometry(radius, tube, 8, 120), ringMaterials[matIdx])
        ringG.add(torus)

        // Orbital beacon satellite on the ring
        const beacon = new Mesh(
          new SphereGeometry(0.062, 12, 12),
          new MeshBasicMaterial({ color: matIdx === 1 ? 0xff2a85 : (matIdx === 2 ? 0x00f0ff : 0x6366f1) }),
        )
        beacon.position.set(radius, 0, 0)
        ringG.add(beacon)

        masterGroup.add(ringG)
        ringGroups.push({ group: ringG, speed })
      })

      // Mouse reactivity
      let targetRotX = 0
      let targetRotY = 0

      const handleMouseMove = (e) => {
        const rect = host.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        targetRotY = x * 0.75
        targetRotX = y * 0.55
      }

      window.addEventListener('mousemove', handleMouseMove, { passive: true })

      const resize = () => {
        const width = host.clientWidth
        const height = host.clientHeight
        if (!width || !height) return
        renderer.setSize(width, height, false)
        camera.aspect = width / height
        camera.updateProjectionMatrix()
        renderer.render(scene, camera)
      }

      resizeObserver = new ResizeObserver(resize)
      resizeObserver.observe(host)

      if (reduceMotion) {
        masterGroup.rotation.set(0.12, -0.22, 0)
        resize()
      } else {
        context = gsap.context(() => {
          gsap.fromTo(host, { opacity: 0, scale: 0.88 }, { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' })
        }, host)

        const render = () => {
          // Autonomous continuous rotation
          core.rotation.y += 0.009
          core.rotation.x += 0.005
          outerGlobe.rotation.y += 0.004
          dots.rotation.y -= 0.003

          ringGroups.forEach(({ group, speed }) => {
            group.rotation.z += speed
          })

          // Smooth mouse parallax easing
          masterGroup.rotation.y += (targetRotY - masterGroup.rotation.y) * 0.05
          masterGroup.rotation.x += (targetRotX - masterGroup.rotation.x) * 0.05

          renderer.render(scene, camera)
          frame = requestAnimationFrame(render)
        }
        render()
      }

      return () => {
        cancelAnimationFrame(frame)
        window.removeEventListener('mousemove', handleMouseMove)
        context?.revert()
        resizeObserver?.disconnect()
        scene.traverse((object) => {
          object.geometry?.dispose()
          if (Array.isArray(object.material)) object.material.forEach((material) => material.dispose())
          else object.material?.dispose()
        })
        renderer.dispose()
        renderer.domElement.remove()
      }
    } catch {
      renderer?.dispose()
      renderer?.domElement.remove()
      host.classList.add('webgl-unavailable')
    }
    return undefined
  }, [])

  return <div className="marketing-orb" ref={hostRef} aria-hidden="true" />
}
