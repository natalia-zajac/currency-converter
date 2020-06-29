{
    const calculateResult = (amount, currency) => {
        const rateEUR = 4.4524;
        const rateGBP = 4.9293;
        const rateUSD = 3.9667;
        const rateCHF = 4.1702;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;
            case "GBP":
                return amount / rateGBP;
            case "USD":
                return amount / rateUSD;
            case "CHF":
                return amount / rateCHF;
        }
    };


    const updateResultText = (result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.value = result.toFixed(2);
    };


    const onFormSubmit = (event) => {
        event.preventDefault();
        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(result);

    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);

    };
    init();

}
