# Google-Form-Update-Question-From-Sheet
Google Script to update a Google Form question based of a column from a Google Sheet

Useful for populating large dropdown questions.

## Quick start

- Update the Form ID  in the script to the required form.
- Update the ss.getSheetByName value to the name of the sheet with the data.
- Data in the spreadsheet must have column headings that match questions on the spreadsheet.
  - If the column heading doesnt match a question, it will be ignored.
- Create trigger for on edit or run the function manually as needed.

## Authors

**Ben Letchford** - *Initial work*

**Jacob Brummans** - *Initial work*
