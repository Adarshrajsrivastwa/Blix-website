import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_NAME = 'Blix Technologies'
const SITE_URL = 'https://blixtechnologies.com'
const DEFAULT_OG_IMAGE = '/og-image.svg'
const TWITTER_HANDLE = '@blixtech'

function setMeta(attr, name, content) {
  if (!content) return
  const selector = attr === 'name' ? `meta[${attr}="${name}"]` : `meta[${attr}="${name}"]`
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href) {
  if (!href) return
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function injectJSONLD(id, data) {
  const scriptId = `ld-json-${id}`
  let el = document.getElementById(scriptId)
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = scriptId
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

function removeJSONLD(idsToKeep) {
  document.querySelectorAll('script[id^="ld-json-"]').forEach((el) => {
    if (!idsToKeep.includes(el.id.replace('ld-json-', ''))) {
      el.remove()
    }
  })
}

export default function SEO({
  title,
  description,
  keywords,
  ogImage,
  ogType = 'website',
  jsonLd = [],
  noindex = false,
}) {
  const { pathname } = useLocation()
  const canonical = `${SITE_URL}${pathname === '/' ? '' : pathname}`
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | AI Digital Marketing Agency in Noida`
  const finalDesc =
    description ||
    'Blix Technologies is an AI-powered digital marketing agency in Noida offering SEO, SEM, SMM, web design, app development, and 360° marketing services.'
  const finalImage = ogImage || DEFAULT_OG_IMAGE

  useEffect(() => {
    document.title = fullTitle

    setMeta('name', 'description', finalDesc)
    if (keywords) setMeta('name', 'keywords', keywords)
    setMeta('name', 'robots', noindex ? 'noindex,nofollow' : 'index,follow')
    setMeta('name', 'author', SITE_NAME)
    setMeta('name', 'viewport', 'width=device-width, initial-scale=1, viewport-fit=cover')
    setMeta('name', 'theme-color', '#2E3191')

    setLink('canonical', canonical)

    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', finalDesc)
    setMeta('property', 'og:url', canonical)
    setMeta('property', 'og:type', ogType)
    setMeta('property', 'og:site_name', SITE_NAME)
    setMeta('property', 'og:image', `${SITE_URL}${finalImage}`)
    setMeta('property', 'og:image:width', '1200')
    setMeta('property', 'og:image:height', '630')
    setMeta('property', 'og:locale', 'en_IN')

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', finalDesc)
    setMeta('name', 'twitter:image', `${SITE_URL}${finalImage}`)
    setMeta('name', 'twitter:site', TWITTER_HANDLE)
    setMeta('name', 'twitter:creator', TWITTER_HANDLE)

    const keptIds = ['org', 'website']
    const orgSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.svg`,
        width: 500,
        height: 200,
      },
      description: finalDesc,
      email: 'info@blixtechnologies.com',
      telephone: '+91-8448983343',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'NX One, T-3, Office A 423, Techzone 4',
        addressLocality: 'Greater Noida West',
        addressRegion: 'Uttar Pradesh',
        postalCode: '201306',
        addressCountry: 'IN',
      },
      areaServed: [
        { '@type': 'Place', name: 'India' },
        { '@type': 'Place', name: 'United States' },
        { '@type': 'Place', name: 'United Kingdom' },
        { '@type': 'Place', name: 'Canada' },
        { '@type': 'Place', name: 'UAE' },
        { '@type': 'Place', name: 'Singapore' },
        { '@type': 'Place', name: 'Australia' },
      ],
      sameAs: [
        'https://www.linkedin.com/company/blix-technologies',
        'https://www.instagram.com/blixtechnologies',
        'https://www.facebook.com/blixtechnologies',
        'https://twitter.com/blixtech',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-8448983343',
        contactType: 'customer support',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
    }
    injectJSONLD('org', orgSchema)

    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/blog?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    }
    injectJSONLD('website', websiteSchema)

    jsonLd.forEach(({ id, data }) => {
      injectJSONLD(id, data)
      keptIds.push(id)
    })

    removeJSONLD(keptIds)
  }, [fullTitle, finalDesc, keywords, canonical, ogType, finalImage, noindex])

  return null
}
