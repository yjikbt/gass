function onOpen() {
	// get today's date
	var sheet = SpreadsheetApp.getActiveSheet();
	var data = sheet.getRange(2, 1);
	Logger.log(data);

	// check if a moment is before another moment

	// generate new sheet
	// var moment = Moment.moment();

	// moment.locale('ja', {
	// 	weekdays: ["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],
	// 	weekdaysShort: ["日","月","火","水","木","金","土"]
	// });

	// var today = moment.format("YYYY[/]MM[/]DD[（]ddd[）]");

	// var yesterday = moment.subtract(1, 'days'));

	// if (moment.isSame(yesterday) {
	// 	Browser.msgBox(yesterday);
	// }
	// var date = moment.date();
	// var month = moment.month() + 1;
	// var year = moment.year();
}

function generateNewSheet() {
	// get today's date from a active spreadsheet
	var sheet = SpreadsheetApp.getActiveSheet();
	var cell = sheet.getRange(2, 1);
	var values = cell.getValues()[0][0];

	// generate moment objects
	var today = Moment.moment();
	var yesterday = Moment.moment(values);

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