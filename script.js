

function exchange() {
  const key = "3128a6e0b0msh371447479d4468ep1131d3jsn4f484dd83cb5"
  let currencyFrom = document.querySelector("#choose-from").value
  let currencyTo = document.querySelector("#choose-to").value
  let amount = document.querySelector("#input").value
  const url = "https://currency-converter5.p.rapidapi.com/currency/convert"

  if(amount) {
  fetch(`${url}?format=json&from=${currencyFrom}&to=${currencyTo}&amount=${amount}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": key,
		"x-rapidapi-host": "currency-converter5.p.rapidapi.com"
	}
})
  .then(response => response.json())
  
  .then(data => document.querySelector("#result").innerHTML=`${data.rates[currencyTo].rate_for_amount}` + ` ${currencyTo}`);

  }



}