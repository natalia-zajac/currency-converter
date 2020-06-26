console.log("Cześć wszystkim tworzącym kalkulatory.");

let formElement = document.querySelector(".js-form");

let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.4524;
let rateGBP = 4.9293;
let rateUSD = 3.9667;
let rateCHF = 4.1702;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let rate;
    let result = 0;

    switch (currencyElement.value) {
        case "EUR":
            rate = rateEUR;
            break;
            case "GBP":
                rate = rateGBP;
                break;
                case "USD":
                    rate = rateUSD;
                    break;
                    case "CHF":
                        rate = rateCHF;
                        break;
    }
    result = amount / rate;

    resultElement.value = result.toFixed(2);


});

