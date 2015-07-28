var money = 0;
var price = 200;

function moneyin(){
	money = eval(document.getElementsByName("vendingmachine")[0].payment.value);

	if(money < price){
		alert("돈을 "+(price - money)+"원 더 내야 합니다.");

		document.getElementsByName("vendingmachine")[0].payment.value = 0;
		document.getElementsByName("vendingmachine")[0].change.value = money;
	}

}

function beullaek(){
	moneyin();

	if(money >= price){
		alert("블랙 커피입니다.");
		
		document.getElementsByName("vendingmachine")[0].payment.value = 0;
		document.getElementsByName("vendingmachine")[0].change.value = money - price;
	}
}

function seoltang(){
	moneyin();

	if(money >= price){
		alert("설탕 커피입니다.");
		
		document.getElementsByName("vendingmachine")[0].payment.value = 0;
		document.getElementsByName("vendingmachine")[0].change.value = money - price;
	}
}

function milkeu(){
	moneyin();

	if(money >= price){
		alert("밀크 커피입니다.");
		
		document.getElementsByName("vendingmachine")[0].payment.value = 0;
		document.getElementsByName("vendingmachine")[0].change.value = money - price;
	}
}

function chwiso(){
	money = eval(document.getElementsByName("vendingmachine")[0].payment.value);
	
	alert("취소합니다.");

	document.getElementsByName("vendingmachine")[0].payment.value = 0;
	document.getElementsByName("vendingmachine")[0].change.value = money;
}