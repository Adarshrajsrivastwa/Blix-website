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
      const camera = new PerspectiveCamera(34, 1, 0.1, 40)
      camera.position.z = 6

      renderer = new WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5))
      renderer.setSize(host.clientWidth, host.clientHeight, false)
      renderer.setClearColor(0x000000, 0)
      host.appendChild(renderer.domElement)

      const group = new Group()
      scene.add(group)

      const globe = new Mesh(
        new SphereGeometry(1.35, 20, 14),
        new MeshBasicMaterial({ color: 0xb9d5ff, wireframe: true, transparent: true, opacity: 0.19 }),
      )
      group.add(globe)

      const positions = []
      const count = 88
      const goldenAngle = Math.PI * (3 - Math.sqrt(5))
      for (let i = 0; i < count; i += 1) {
        const y = 1 - (i / (count - 1)) * 2
        const radius = Math.sqrt(1 - y * y)
        const theta = goldenAngle * i
        positions.push(Math.cos(theta) * radius * 1.38, y * 1.38, Math.sin(theta) * radius * 1.38)
      }
      const dotGeometry = new BufferGeometry()
      dotGeometry.setAttribute('position', new Float32BufferAttribute(positions, 3))
      const dots = new Points(dotGeometry, new PointsMaterial({ color: 0xdbeafe, size: 0.022, transparent: true, opacity: 0.62, sizeAttenuation: true }))
      group.add(dots)

      const orbitMaterial = new MeshBasicMaterial({ color: 0x8bbcff, transparent: true, opacity: 0.28, side: DoubleSide })
      const orbits = [
        { rotation: [0.25, 0.2, 0.35], scale: [1.78, 0.62, 1] },
        { rotation: [1.05, -0.5, -0.45], scale: [1.75, 0.56, 1] },
      ]
      orbits.forEach(({ rotation, scale }) => {
        const orbit = new Mesh(new TorusGeometry(1.15, 0.006, 5, 128), orbitMaterial)
        orbit.rotation.set(...rotation)
        orbit.scale.set(...scale)
        group.add(orbit)
      })

      const hub = new Mesh(new SphereGeometry(0.065, 12, 10), new MeshBasicMaterial({ color: 0xec4899 }))
      hub.position.set(1.66, 0.25, 0.2)
      group.add(hub)
      const hub2 = new Mesh(new SphereGeometry(0.047, 10, 8), new MeshBasicMaterial({ color: 0xffffff }))
      hub2.position.set(-1.25, -0.57, 0.58)
      group.add(hub2)

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
        group.rotation.set(0.12, -0.22, 0)
        resize()
      } else {
        context = gsap.context(() => {
          gsap.to(group.rotation, { y: Math.PI * 2, duration: 36, repeat: -1, ease: 'none' })
          gsap.to(globe.rotation, { x: 0.16, duration: 7, yoyo: true, repeat: -1, ease: 'sine.inOut' })
          gsap.fromTo(host, { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, duration: 1.1, ease: 'power3.out' })
        }, host)

        const render = () => {
          renderer.render(scene, camera)
          frame = requestAnimationFrame(render)
        }
        render()
      }

      return () => {
        cancelAnimationFrame(frame)
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
