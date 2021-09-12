var year1 = document.getElementById("number-year1");
var year2 = document.getElementById("number-year1");
var month1 = document.getElementById("number-month1");
var month2 = document.getElementById("number-month2");
var day1 = document.getElementById("number-day1");
var day2 = document.getElementById("number-day2");
var hour1 = document.getElementById("number-hour1");
var hour2 = document.getElementById("number-hour2");
var minute1 = document.getElementById("number-minute1");
var minute2 = document.getElementById("number-minute2");
var second1 = document.getElementById("number-second1");
var second2 = document.getElementById("number-second2");

var today = new Date();
var future = new Date(2021, 10, 22, 19, 30, 0);

function calcDate(date1, date2) {
	date2.setMonth(date2.getMonth() + 1);
	var miliseconds = Math.floor(date1.getTime() - date2.getTime());
	var secs = miliseconds / 1000;

	//operations
	var months = Math.floor(secs / 2592000);
	var days = Math.floor((secs - months * 2592000) / 86400);
	var hours = Math.floor((secs - months * 2592000 - days * 86400) / 3600);
	var minutes = Math.floor(
		(secs - months * 2592000 - days * 86400 - hours * 3600) / 60
	);
	var seconds = Math.floor(
		secs - months * 2592000 - days * 86400 - hours * 3600 - minutes * 60
	);

	month2.innerHTML = `${months}`;
	day1.innerHTML = `${days.toString()[1] ? days.toString()[0] : 0}`;
	day2.innerHTML = `${
		days.toString()[1] ? days.toString()[1] : days.toString()[0]
	}`;

	hour1.innerHTML = `${hours.toString()[1] ? hours.toString()[0] : 0}`;
	hour2.innerHTML = `${
		hours.toString()[1] ? hours.toString()[1] : hours.toString()[0]
	}`;

	minute1.innerHTML = `${minutes.toString()[1] ? minutes.toString()[0] : 0}`;
	minute2.innerHTML = `${
		minutes.toString()[1] ? minutes.toString()[1] : minutes.toString()[0]
	}`;

	second1.innerHTML = `${seconds.toString()[1] ? seconds.toString()[0] : 0}`;
	second2.innerHTML = `${
		seconds.toString()[1] ? seconds.toString()[1] : seconds.toString()[0]
	}`;
}

window.setInterval(function () {
	today = new Date();
	calcDate(future, today);
}, 1000);
