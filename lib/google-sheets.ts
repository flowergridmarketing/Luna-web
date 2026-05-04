import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export async function appendToSheet(data: any) {
  const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
  const SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!SPREADSHEET_ID || !SERVICE_ACCOUNT_EMAIL || !PRIVATE_KEY) {
    throw new Error('Google Sheets environment variables are missing');
  }

  const serviceAccountAuth = new JWT({
    email: SERVICE_ACCOUNT_EMAIL,
    key: PRIVATE_KEY,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth);

  try {
    await doc.loadInfo();
    
    // Look for a sheet named "Bookings"
    let sheet = doc.sheetsByTitle['Bookings'];

    // If it doesn't exist, create it with the correct headers
    if (!sheet) {
      console.log('Sheet "Bookings" not found. Creating new sheet...');
      sheet = await doc.addSheet({ 
        title: 'Bookings', 
        headerValues: [
          'First Name', 
          'Email', 
          'Service Name', 
          'Practitioner Name', 
          'Format', 
          'Session Length', 
          'Payment Status', 
          'Timestamp'
        ] 
      });
      console.log('New "Bookings" sheet created with headers.');
    } else {
      console.log(`Working on existing sheet: "${sheet.title}"`);
    }

    const rowData = {
      'First Name': data.name || 'N/A',
      'Email': data.email || 'N/A',
      'Service Name': data.serviceName || 'N/A',
      'Practitioner Name': data.practitionerName || 'N/A',
      'Format': data.format || 'N/A',
      'Session Length': data.sessionLength || 'N/A',
      'Payment Status': 'Paid',
      'Timestamp': new Date().toLocaleString(),
    };

    console.log('Row data to add:', rowData);
    await sheet.addRow(rowData);
    console.log('SUCCESS: Booking stored in "Bookings" tab.');
  } catch (err: any) {
    console.error('FAILED to add to Google Sheets:', err.message);
    throw err;
  }
}
