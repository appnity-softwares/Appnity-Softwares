// 1. Open a new Google Sheet
// 2. Go to Extensions > Apps Script
// 3. Paste this code and save
// 4. Run the 'initialSetup' function once to create headers
// 5. Click Deploy > New Deployment
// 6. Select type: "Web App"
// 7. Description: "Contact Form"
// 8. Execute as: "Me"
// 9. Who has access: "Anyone" (IMPORTANT)
// 10. Copy the "Web App URL" and provide it to the developer

const SHEET_NAME = "Sheet1";

function initialSetup() {
  const doc = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = doc.getSheetByName(SHEET_NAME);
  
  const headers = ["Timestamp", "Name", "Email", "Service/Type", "Description"];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, 5);
}

function doPost(e) {
  try {
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = doc.getSheetByName(SHEET_NAME);
    
    // Parse the request body
    const data = JSON.parse(e.postData.contents);
    
    const rowData = [
      new Date(),
      data.name || "",
      data.email || "",
      data.service || "", // For Contact Page dropdown
      data.description || ""
    ];
    
    sheet.appendRow(rowData);
    
    return ContentService.createTextOutput(JSON.stringify({ 
      status: "success", 
      message: "Data saved successfully" 
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ 
      status: "error", 
      message: error.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
