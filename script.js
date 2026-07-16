const exploreButton = document.querySelector(".hero button");

if (exploreButton) {
    exploreButton.addEventListener("click", function () {
        alert("Welcome to ToolNest! Our tools are coming soon.");
    });
}

function calculate(operation) {
    const firstNumber = Number(document.querySelector("#num1").value);
    const secondNumber = Number(document.querySelector("#num2").value);

    if (
        document.querySelector("#num1").value === "" ||
        document.querySelector("#num2").value === ""
    ) {
        document.querySelector("#result").textContent =
            "Please enter both numbers.";
        return;
    }

    let result;

    if (operation === "add") {
        result = firstNumber + secondNumber;
    } else if (operation === "subtract") {
        result = firstNumber - secondNumber;
    } else if (operation === "multiply") {
        result = firstNumber * secondNumber;
    } else if (operation === "divide") {
        if (secondNumber === 0) {
            document.querySelector("#result").textContent =
                "Cannot divide by zero.";
            return;
        }

        result = firstNumber / secondNumber;
    }

    document.querySelector("#result").textContent =
        "Result: " + result;
}

const addButton = document.querySelector("#addBtn");

if (addButton) {
    addButton.addEventListener("click", function () {
        calculate("add");
    });
}

const subtractButton = document.querySelector("#subtractBtn");

if (subtractButton) {
    subtractButton.addEventListener("click", function () {
        calculate("subtract");
    });
}

const multiplyButton = document.querySelector("#multiplyBtn");

if (multiplyButton) {
    multiplyButton.addEventListener("click", function () {
        calculate("multiply");
    });
}

const divideButton = document.querySelector("#divideBtn");

if (divideButton) {
    divideButton.addEventListener("click", function () {
        calculate("divide");
    });
}

const convertButton = document.querySelector("#convertBtn");

if (convertButton) {
    convertButton.addEventListener("click", function () {
        const value = Number(document.querySelector("#value").value);
        const conversion = document.querySelector("#conversion").value;

        if (document.querySelector("#value").value === "") {
            document.querySelector("#conversionResult").textContent =
                "Please enter a value.";
            return;
        }

        let result;

        if (conversion === "kmToMiles") {
            result = value * 0.621371;
            document.querySelector("#conversionResult").textContent =
                "Result: " + result.toFixed(2) + " miles";
        } else if (conversion === "milesToKm") {
            result = value * 1.60934;
            document.querySelector("#conversionResult").textContent =
                "Result: " + result.toFixed(2) + " km";
        }
    });
}

