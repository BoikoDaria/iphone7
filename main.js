var memory = (prompt('Please put memory of your iphone 7 - 16, 32 or 64MB));
console.log("memory");
while(true){
	if (memory== 16) {
		document.write('<img src="iphone6.jpg">');
		alert('Price 15000 UAH');
		break;
	}
	else if (memory== 32) {
		document.write('<img src = "iphone7.jpg">');
		alert('Price 20000 UAH');
		break;
	}
	else if (memory == 64) {
		document.write('<img src = "iphone8.jpg">');
		alert('Price 25000 UAH');
		break;
	}
			else{
				alert('Error');
				break;
			}
}