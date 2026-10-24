import { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    image: '/testimonials/roshni-patel.jpg',
    name: 'Roshni Patel',
    role: 'GM Sales',
    quote: 'What could be more rewarding than seamless execution without the hassle of constant follow-ups? I partnered with Blix Technologies for my digital marketing needs, and the experience has been nothing short of exceptional. Grateful for the amazing team and excited to continue the journey!',
  },
  {
    image: '/testimonials/chirag-negi.jpg',
    name: 'Chirag Negi',
    role: 'CEO',
    quote: 'The Blix Technologies team is exceptionally professional when it comes to website development. From start to finish, their expertise and creativity ensured a seamless and enjoyable experience. I had a fantastic journey working with them. Thank you team Blix Technologies.',
  },
  {
    image: '/testimonials/client-03.jpg',
    name: 'Client review',
    quote: 'Blix Technologies has a unique way of working with its clients as partners. This turned out to be quite an effective approach as it made a real difference across the board. Right place for an affordable & quality digital services in Noida (Delhi NCR). I would happily recommend them to other businesses.',
  },
  {
    image: '/testimonials/client-04.jpg',
    name: 'Client review',
    quote: 'Blix Technologies is a leading SEO & Digital Marketing agency in Noida with a highly skilled team managing our marketing needs seamlessly. We’re impressed with how smoothly they’ve streamlined and aligned the work processes with their SEO team. Their approach has been nothing short of professional, and we’re extremely satisfied with the results.',
  },
]

export default function Voices() {
  const trackRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [slideCount, setSlideCount] = useState(testimonials.length)

  function getSlideStep() {
    const track = trackRef.current
    const slide = track?.querySelector('.v-slide')
    if (!track || !slide) return 0
    return slide.getBoundingClientRect().width + (parseFloat(getComputedStyle(track).columnGap) || 0)
  }

  function goToSlide(index) {
    const track = trackRef.current
    if (!track) return
    const next = Math.max(0, Math.min(slideCount - 1, index))
    track.scrollTo({ left: next * getSlideStep(), behavior: 'smooth' })
    setActiveSlide(next)
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined
    const updateSlides = () => {
      const first = track.querySelector('.v-slide')
      if (!first) return
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0
      const visible = Math.max(1, Math.floor((track.clientWidth + gap) / (first.getBoundingClientRect().width + gap)))
      const count = Math.max(1, testimonials.length - visible + 1)
      setSlideCount(count)
      setActiveSlide((current) => {
        const next = Math.min(current, count - 1)
        if (next !== current) track.scrollTo({ left: next * getSlideStep() })
        return next
      })
    }
    updateSlides()
    window.addEventListener('resize', updateSlides)
    return () => window.removeEventListener('resize', updateSlides)
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || slideCount < 2) return undefined
    const timer = window.setInterval(() => {
      goToSlide(activeSlide >= slideCount - 1 ? 0 : activeSlide + 1)
    }, 5000)
    return () => window.clearInterval(timer)
  }, [activeSlide, slideCount])

  return (
    <section className="voices" id="voices">
      <div className="wrap">
        <div className="voices-head reveal">
          <div>
            <span className="kicker">CLIENT’S TESTIMONIAL</span>
            <h2 className="h2">Reviews from our happy clients</h2>
          </div>
        </div>
        <div className="v-carousel reveal-stagger" aria-label="Client testimonials">
          <div className="vgrid" ref={trackRef} tabIndex="0" role="region" aria-label="Swipe or use the controls to browse client reviews" onScroll={() => {
            const step = getSlideStep()
            if (step) setActiveSlide(Math.min(slideCount - 1, Math.round(trackRef.current.scrollLeft / step)))
          }}>
            {testimonials.map((t, index) => (
              <div className="v-slide" key={`${t.name}-${index}`}>
                <figure className="q reveal-blur" style={{ margin: 0 }}>
                  <div className="q-layout">
                    <img className="q-photo" src={t.image} alt={t.name} loading="lazy" />
                    <div className="q-copy">
                      <blockquote>{t.quote}</blockquote>
                      <div className="who">
                        <b>{t.name}</b>
                        {t.role && <span>{t.role}</span>}
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
