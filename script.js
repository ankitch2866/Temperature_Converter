document.addEventListener("DOMContentLoaded", function () {
    const convertBtn = document.getElementById("convertBtn");
    const celsiusInput = document.getElementById("celsius");
    const resultParagraph = document.getElementById("result");

    convertBtn.addEventListener("click", function () {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            resultParagraph.textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
        } else {
            resultParagraph.textContent = "Please enter a valid temperature in Celsius.";
        }
    });
});
