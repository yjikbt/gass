function onOpen() {
	// get today's date from a active spreadsheet
	var sheet = SpreadsheetApp.getActiveSheet();
	var cell = sheet.getRange(2, 1);
	var values = cell.getValues()[0][0];

	// generate moment objects
	var today = Moment.moment();
	var yesterday = Moment.moment(values);
	generateNewSheet(sheet, today, yesterday);
}

function generateNewSheet(sheet, today, yesterday) {
	// compare today's day with yesterday's
	if (today.isAfter(yesterday, 'day')) {
		// insert a new row
		sheet.insertRowBefore(2);

		// copy old contents into the new row
		var rangeToCopy = sheet.getRange(3, 1, 1, sheet.getMaxColumns());
		rangeToCopy.copyTo(sheet.getRange(2, 1, 1, sheet.getMaxColumns()));

		// clear unneeded contents (leaving the formatting intact)
		sheet.getRange(2, 3, 1, sheet.getMaxColumns()).clearContent();

		// configure the settings for JPN weekdays
		today.locale('ja', {
			weekdaysShort: ["日","月","火","水","木","金","土"]
		});

		// prepare the date and day of week
		var date = today.format("YYYY[/]MM[/]DD");
		var dayOfWeek = today.format("ddd");

		// set values
		sheet.getRange("A2").setValue(date);
		sheet.getRange("B2").setValue(dayOfWeek);
	}
}