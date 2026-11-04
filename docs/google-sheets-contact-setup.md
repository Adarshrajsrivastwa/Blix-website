# Send website contact inquiries to Google Sheets

The main contact form and the floating inquiry form both send their submissions to the same Google Sheet. The Apps Script creates a `Contact Leads` tab and adds the column headers on first submission.

## Set up the Google Sheet

1. Create a new Google Sheet, for example, `Blix Website Contact Leads`.
2. Copy the spreadsheet ID from its URL. It is the part between `/d/` and `/edit`.
3. In the sheet, choose **Extensions → Apps Script**.
4. Replace the starter code with `google-apps-script/contact-leads/Code.gs`.
5. In the script, replace `PASTE_YOUR_GOOGLE_SHEET_ID_HERE` with the ID from step 2.
6. Save the script. Choose **Deploy → New deployment**, select **Web app**, set **Execute as** to **Me**, and set access to **Anyone**. Deploy and approve the requested Google permissions.
7. Copy the Web app URL ending in `/exec`.

## Connect the website

1. Create `.env.local` in the project root (next to `package.json`).
2. Add this line, replacing the value with the `/exec` URL:

   ```text
   VITE_CONTACT_SHEETS_ENDPOINT=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
   ```

3. Restart the local Vite server. For the live website, add the same variable in the hosting provider’s environment-variable settings and redeploy.
4. Submit one test inquiry in the main contact form and one through the floating contact form. Both should appear as new rows in the `Contact Leads` tab.

The sheet columns are: Submitted At, Name, Email, Phone, Website, Message, Source, and Page. Keep the deployed Apps Script URL private to the site setup; submissions are accepted by its public web-app endpoint.
