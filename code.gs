function updateForm(){
  //Replace these variables
  var datasheet = "SHEET NAME HERE"
  var form = FormApp.openById("FORMIDHERE_0fv4se9HDL6FjOH87f8aIHigmM");
  
  //Check to ensure its only run when the datasheet is modifed
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  if(sheet.getName() === datasheet){
    byFormID(form, datasheet)
  }
}

function byFormID(form, datasheet){
  var ss = SpreadsheetApp.getActive();

  var data = dataSheet.getRange(1, 1, dataSheet.getLastRow(), dataSheet.getLastColumn()).getValues();
  
 // Step 1.
 // Build array of list ids from spreadsheet
 // Initialize the listData array for each column
  var listTitles = [];
  var listData = [];
  for(var i=0;i<data[0].length;i++) {
    listTitles.push(data[0][i]);
    listData.push([]);
  }
  
  // Step 2.
  // For each column, push each column cell into listData
  for(var i=1;i<data.length;i++) {
    for(var j=0;j<data[i].length;j++) {
      if(data[i][j] == "") continue;
      
      listData[j].push(data[i][j]);
    }
  }
    
  // Step 3.
  // For each item, populate the form list with the values from listData. Muy bueno :)
  var items = form.getItems(FormApp.ItemType.LIST);
  for(var i=0;i<items.length;i++) {
    var indexOf = listTitles.indexOf(items[i].getTitle());
    if(indexOf !== -1 && listData[indexOf].length !== 0) {
      var listItem = items[i].asListItem();
      listItem.setChoiceValues(listData[indexOf]);
    }
  }
}
