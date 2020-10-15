// API endpoint https://api.exchangerate-api.com/v4/latest/

const currencyEl_one = document.getElementById("currency-one");
const currencyEl_two = document.getElementById("currency-two");
const amountOne = document.getElementById("amount-one");
const amountTwo = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

//fetch exchange rates and update on dom
function calculate() {
	const currencyOne = currencyEl_one.value;
	const currencyTwo = currencyEl_two.value;

	fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
		.then((res) => res.json())
		.then((data) => {
			const rate = data.rates[currencyTwo];
			rateEl.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;
			amountTwo.value = (amountOne.value * rate).toFixed(2);
		});
}

//event listner

currencyEl_one.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amountTwo.addEventListener("input", calculate);

swap.addEventListener("click", () => {
	const temp = currencyEl_one.value;
	currencyEl_one.value = currencyEl_two.value;
	currencyEl_two.value = temp;
	calculate();
});
