const endpoint = import.meta.env.VITE_CONTACT_SHEETS_ENDPOINT?.trim()

export async function sendContactLead(fields, source = 'contact form') {
  if (!endpoint) {
    throw new Error('Google Sheets is not connected yet. Add the Apps Script web app URL to VITE_CONTACT_SHEETS_ENDPOINT.')
  }

  await fetch(endpoint, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({
      ...fields,
      source,
      page: window.location.href,
    }),
  })
}
