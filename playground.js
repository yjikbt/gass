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
	// get today's date
	var sheet = SpreadsheetApp.getActiveSheet();
	var range = sheet.getRange(2, 1);
	var values = range.getValues();

	// convert date to moment object
	var today = Moment.moment();
	var yesterday = Moment.moment(values[0][0]);

	if (today.isAfter(yesterday, 'day')) {
		// inset new date
	}


	// moment.locale('ja', {
	// 	weekdays: ["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],
	// 	weekdaysShort: ["日","月","火","水","木","金","土"]
	// });

	// Logger.log(moment.format());

	// var hoge = Moment.moment(values[0][0]);

	// Logger.log(hoge.format());

	// var moment = Moment.moment(values[0][0]);
	// var date = moment.format("YYYY[/]MM[/]DD[（]ddd[）]");
}