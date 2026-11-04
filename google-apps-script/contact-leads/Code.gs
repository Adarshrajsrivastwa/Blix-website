const SHEET_NAME = 'Contact Leads'
const SPREADSHEET_ID = 'PASTE_YOUR_GOOGLE_SHEET_ID_HERE'
const HEADERS = ['Submitted At', 'Name', 'Email', 'Phone', 'Website', 'Message', 'Source', 'Page']

function doPost(event) {
  try {
    const payload = JSON.parse(event.postData.contents || '{}')
    if (!String(payload.name || '').trim() || !String(payload.email || '').trim()) {
      throw new Error('Name and email are required.')
    }

    if (SPREADSHEET_ID === 'PASTE_YOUR_GOOGLE_SHEET_ID_HERE') {
      throw new Error('Set SPREADSHEET_ID in the script before deploying it.')
    }
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID)

    let sheet = spreadsheet.getSheetByName(SHEET_NAME)
    if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME)
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS)
      sheet.setFrozenRows(1)
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold')
    }

    const row = [
      new Date(),
      safeCell(payload.name),
      safeCell(payload.email),
      safeCell(payload.phone),
      safeCell(payload.website),
      safeCell(payload.message),
      safeCell(payload.source),
      safeCell(payload.page),
    ]

    const lock = LockService.getScriptLock()
    lock.waitLock(10000)
    try {
      sheet.appendRow(row)
    } finally {
      lock.releaseLock()
    }

    return jsonResponse({ ok: true })
  } catch (error) {
    console.error(error)
    return jsonResponse({ ok: false, error: error.message || 'Submission failed.' })
  }
}

function safeCell(value) {
  const text = String(value || '').trim()
  return /^[=+@\-]/.test(text) ? `'${text}` : text
}

function jsonResponse(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON)
}
