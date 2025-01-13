function doGet() {
    return HtmlService.createHtmlOutputFromFile('truck_master.html'); // 'index' aapke HTML file ka naam hai
  }
  
  function checkVehicleNumberExists(vehicleNumber) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Mainsheet');
    var dataRange = sheet.getRange('A2:A'); // Vehicle Number column
    var data = dataRange.getValues();
    
    var exists = data.some(function(row) {
      return row[0] && row[0].toUpperCase() === vehicleNumber.toUpperCase(); // Case-insensitive check
    });
    
    return { exists: exists };
  }
  
  function submitVehicleData(formData) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Mainsheet');
    
    var newRow = sheet.getLastRow() + 1;
    
    // Form data ko Google Sheet mein set karna
    sheet.getRange(newRow, 1).setValue(formData.vehicleNumber);
    sheet.getRange(newRow, 2).setValue(formData.transportName);
    sheet.getRange(newRow, 3).setValue(formData.contactNo);
    sheet.getRange(newRow, 4).setValue(formData.unladenWeight);
    sheet.getRange(newRow, 5).setValue(formData.loadenWeight);
    sheet.getRange(newRow, 6).setValue(formData.fitnessValid);
    sheet.getRange(newRow, 7).setValue(formData.taxValid);
    sheet.getRange(newRow, 8).setValue(formData.insuranceValid);
    sheet.getRange(newRow, 9).setValue(formData.puccValid);
    sheet.getRange(newRow, 10).setValue(formData.permitValid);
    sheet.getRange(newRow, 11).setValue(formData.gpsStatus); // GPS Installed Status
    sheet.getRange(newRow, 12).setValue(formData.activeStatus); // Active Status
  }
  