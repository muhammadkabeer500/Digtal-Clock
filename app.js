const date = new Date();
const dateFormat1Element = document.getElementById('dateFormat1');
const dateFormat2Element = document.getElementById('dateFormat2');
const dateFormat3Element = document.getElementById('dateFormat3');
const dateFormat4Element = document.getElementById('dateFormat4');
const dateFormat5Element = document.getElementById('dateFormat5');


function dateFormat1() {
	return `${padZero(date.getMonth() + 1)}/${padZero(date.getDate())}/${date.getFullYear()} ${padZero(date.getHours())}:${padZero(date.getMinutes())}:${padZero(date.getSeconds())}`;
}


function dateFormat2() {
	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	return `${days[date.getDay()]} ${padZero(date.getDate())}/${padZero(date.getMonth() + 1)}/${date.getFullYear()} ${padZero(date.getHours())}.${padZero(date.getMinutes())}`;
}


function dateFormat3() {
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	return `${date.getFullYear()}-${padZero(date.getMonth() + 1)}-${padZero(date.getDate())} ${padZero(date.getHours())}:${padZero(date.getMinutes())} ${days[date.getDay()]}`;
}


function dateFormat4() {
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	const suffix = date.getHours() >= 12 ? 'PM' : 'AM';
	return `${months[date.getMonth()]} ${date.getDate()}${getSuffix(date.getDate())}, ${date.getFullYear()} ${padZero(date.getHours() % 12 || 12)}:${padZero(date.getMinutes())}:${padZero(date.getSeconds())} ${suffix}`;
}


function dateFormat5() {
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	const suffix = date.getHours() >= 12 ? 'PM' : 'AM';
	return `${padZero(date.getDate())} ${months[date.getMonth()]} ${date.getFullYear()} at ${padZero(date.getHours() % 12 || 12)}:${padZero(date.getMinutes())} ${suffix}`;
}


function padZero(num) {
	return num.toString().padStart(2, '0');
}


function getSuffix(day) {
	if (day >= 11 && day <= 13) return 'th';
	switch (day % 10) {
		case 1: return 'st';
		case 2: return 'nd';
		case 3: return 'rd';
		default: return 'th';
	}
}


setInterval(() => {
	dateFormat1Element.innerText = dateFormat1();
	dateFormat2Element.innerText = dateFormat2();
	dateFormat3Element.innerText = dateFormat3();
	dateFormat4Element.innerText = dateFormat4();
	dateFormat5Element.innerText = dateFormat5();
	date.setSeconds(date.getSeconds() + 1);
}, 1000);