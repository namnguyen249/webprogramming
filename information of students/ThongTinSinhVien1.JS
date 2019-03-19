
var arrayFirstName = ["Huy", "Hy", "Minh", "Tu", "Phat", "Nhung"];
var arrayMiddleName = ["Thi", "Phuc", "Tuan", "Duy","Khoi"]
var arrayLastName = ["Le", "Nguyen", "Tran", "Ho", "Đang"];
var arrayIDClassEngineer = ["BSE", "CNC", "ACE", "EEE", "MEE"];
var arrayAddress = ["Dĩ An", "Biên Hòa", "Bến Cát", "Đồng Nai", "Tây Ninh", "Tp Hồ Chí Minh","Thủ Đức", "An Giang"];


var arrayMajor = ["Business", "Nurse", "Engineer"];
var count = 0, OrdinalNumbers = 0;
var firstName, lastName, fullName, middleName;
var studentCode;
var IDClass;
var classStudent;
var majorStudent;
var address;
var d, year, month, day;
var mail;
var aa;
var row;
var number0, number1, number2, number3, number4, number5;
var Numbers;

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
};

function oNumbers() {
	var num = ++OrdinalNumbers;
	if (num < 10)
		return "0" + num;
	else
		return num;
};

function sortNumbers() {
	Numbers.sort(function (a, b) { return a - b });
	return Numbers;
}


function getNameOfStudent() {
	firstName = arrayFirstName[getRandom(0, arrayFirstName.length)];
	middleName = arrayMiddleName[getRandom(0, arrayMiddleName.length)];
	lastName = arrayLastName[getRandom(0, arrayLastName.length)];
	fullName = lastName + " " + middleName + " " + firstName;
	return fullName;
};

function getRandomIDClassOfStudent() {
	var numClass = getRandom(1, 4);
	if (numClass == 1)
		IDClass = "BBA";
	else if (numClass == 2) {
		IDClass = arrayIDClassEngineer[getRandom(0, arrayIDClassEngineer.length)];
	}
	else
		IDClass = "NUR";

	var exactlyIDClass = IDClass + "320" + getRandom(0, 6);
	return exactlyIDClass;
}

function getStudentCode() {
	aa = year - 1982;
	var xx;
	if (IDClass == "BBA") {
		xx = 2300000 + Math.round(Math.random() * 9999);
	}
	else if (IDClass == "BSE") {
		xx = 1200000 + Math.round(Math.random() * 9999);
	}
	else if (IDClass == "CNC") {
		xx = 1210000 + Math.round(Math.random() * 9999);
	}
	else if (IDClass == "ACE") {
		xx = 1100000 + Math.round(Math.random() * 9999);
	}
	else if (IDClass == "EEE") {
		xx = 1110000 + Math.round(Math.random() * 9999);
	}
	else if (IDClass == "MEE") {
		xx = 1120000 + Math.round(Math.random() * 9999);
	}
	else {
		xx = 1400000 + Math.round(Math.random() * 9999);
	}

	studentCode = aa + "3" + xx;
	return studentCode;
};

function getClassOfStudent() {
	classStudent = aa + getRandomIDClassOfStudent();
	return classStudent;
}

function getMajorOfStudent() {
	if (IDClass == "BBA") {
		majorStudent = "Business Administration";
	}
	else if (IDClass == "BSE") {
		majorStudent = "Software Engineering";
	}
	else if (IDClass == "CNC") {
		majorStudent = "Communications and Computer Networks Engineering";
	}
	else if (IDClass == "ACE") {
		majorStudent = "Automation and Ccontrol Engineering";
	}
	else if (IDClass == "EEE") {
		majorStudent = "Electrical and Electronic Engineering";
	}
	else if (IDClass == "MEE") {
		majorStudent = "Mechatronics Engineering";
	}
	else {
		majorStudent = "Nurse";
	}
	return majorStudent;
}

function getAddressOfStudent() {
	address = arrayAddress[getRandom(0, arrayAddress.length)];
	return address;
};

function getBirthdayOfStudent(start, end) {
	d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
	month = '' + (d.getMonth() + 1);
	day = '' + d.getDate();
	year = d.getFullYear();

	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;

	return [year, month, day].join('-');
};

function getAge(dateString) {
	var today = new Date();
	var birthDate = new Date(dateString);
	var age = today.getFullYear() - birthDate.getFullYear();
	var monthAge = today.getMonth() - birthDate.getMonth();

	if (monthAge < 0 || (monthAge === 0 && today.getDate() < birthDate.getDate())) {
		age--; monthAge += 12;
	}

	var ageExactly = age + " years old, " + monthAge + " month";
	return ageExactly;
}

function getMailOfStudent() {
	mail = (lastName + "." + firstName + "." + "set14@eiu.edu.vn").toLowerCase();
	return mail;
};

// function getLuckyNumber(){

// 	number0=getRandom(1,46);

// 	number1=getRandom(1,46);
// 	while(number1==number0)
// 	{
// 		number1=getRandom(1,46);			
// 	}

// 		number2=getRandom(1,46);
// 		while(number2==number0||number2==number1)
// 		{
// 			number2=getRandom(1,46);		
// 		}

// 			number3=getRandom(1,46);
// 			while(number3==number0||number3==number1||number3==number2)
// 			{
// 				number3=getRandom(1,46);		
// 			}

// 				number4=getRandom(1,46);
// 				while(number4==number0||number4==number1||number4==number2||number4==number3)
// 				{
// 					number4=getRandom(1,46);		
// 				}

// 					number5=getRandom(1,46);
// 					while(number5==number0||number5==number1||number5==number2||number5==number3||number5==number4)
// 					{
// 						number5=getRandom(1,46);		
// 					}						
// 	if(number0<10)
// 	{
// 		document.getElementById('idNumber0').innerHTML ="0"+number0;
// 	}
// 	else
// 	{
// 		document.getElementById('idNumber0').innerHTML =number0;	
// 	}
// 		if(number1<10)
// 		{
// 			document.getElementById('idNumber1').innerHTML ="0"+number1;
// 		}		
// 		else
// 		{
// 			document.getElementById('idNumber1').innerHTML =number1;	
// 		}
// 			if(number2<10)
// 			{
// 				document.getElementById('idNumber2').innerHTML ="0"+number2;
// 			}
// 			else
// 			{
// 				document.getElementById('idNumber2').innerHTML =number2;
// 			}
// 				if(number3<10)
// 				{
// 					document.getElementById('idNumber3').innerHTML ="0"+number3;
// 				}		
// 				else
// 				{
// 					document.getElementById('idNumber3').innerHTML =number3;
// 				}
// 					if(number4<10)
// 					{
// 						document.getElementById('idNumber4').innerHTML ="0"+number4;
// 					}
// 					else
// 					{
// 						document.getElementById('idNumber4').innerHTML =number4;	
// 					}
// 						if(number5<10)
// 						{
// 							document.getElementById('idNumber5').innerHTML ="0"+number5;
// 						}		
// 						else
// 						{
// 							document.getElementById('idNumber5').innerHTML =number5;
// 						}		
// 	Numbers = [number0, number1, number2, number3, number4, number5];
// }



function testStudent() {
	document.getElementById('boxBirthday').value = getBirthdayOfStudent(new Date(1993, 01, 01), new Date(1998, 12, 31));
	document.getElementById('boxFullName').value = getNameOfStudent();
	document.getElementById('boxID').value = getStudentCode();
	document.getElementById('boxClass').value = getClassOfStudent();
	document.getElementById('boxMajor').value = getMajorOfStudent();
	document.getElementById('boxAddress').value = getAddressOfStudent();
	document.getElementById('boxEmail').value = getMailOfStudent();
}

function addStudent() {
	var table = document.getElementById("idtb2");
	row = table.insertRow(-1);
	var cellOrdinalNumbers = row.insertCell(0),
		cellFullName = row.insertCell(1),
		cellStudentCodes = row.insertCell(2),
		cellClass = row.insertCell(3),
		cellMajor = row.insertCell(4),
		cellAddresses = row.insertCell(5),
		cellAges = row.insertCell(6),
		cellEmails = row.insertCell(7);

	cellOrdinalNumbers.innerHTML = oNumbers();
	cellFullName.innerHTML = getNameOfStudent();
	cellStudentCodes.innerHTML = studentCode;
	cellClass.innerHTML = classStudent;
	cellMajor.innerHTML = majorStudent;
	cellAddresses.innerHTML = address;
	cellAges.innerHTML = getAge([year, month, day]);
	cellEmails.innerHTML = mail;

}

