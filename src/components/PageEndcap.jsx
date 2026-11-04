import { useLocation } from 'react-router-dom'
import Voices from './Voices.jsx'
import Contact from './Contact.jsx'

export default function PageEndcap() {
  const { pathname } = useLocation()
  const isServicePage = pathname.startsWith('/services') || pathname.startsWith('/online-reputation-management')
  const hasPageTestimonials = pathname === '/' || isServicePage
  const hasPageContactForm = pathname === '/' || isServicePage

  return (
    <div className="page-endcap">
      {!hasPageTestimonials && <Voices />}
      {!hasPageContactForm && <Contact compact />}
    </div>
  )
}
