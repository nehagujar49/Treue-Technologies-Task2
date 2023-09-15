function convert() {
    // Retrieve input values
    let inputValue = document.getElementById("inputValue").value;

    let fromUnit = document.getElementById("fromUnit").value;

    let toUnit = document.getElementById("toUnit").value;

    // Convert the length based on the selected units
    let result;

    if (fromUnit === "Centimeter" && toUnit === "Inch") {
        result = inputValue / 2.54;
    } else if (fromUnit === "Inch" && toUnit === "Centimeter") {
        result = inputValue * 2.54;
    } else if (fromUnit === "Centimeter" && toUnit === "Feet") {
        result = inputValue / 30.48;
    } else if (fromUnit === "Feet" && toUnit === "Centimeter") {
        result = inputValue * 30.48;
    } else if (fromUnit === "Centimeter" && toUnit === "Meter") {
        result = inputValue / 100;
    } else if (fromUnit === "Meter" && toUnit === "Centimeter") {
        result = inputValue * 100;
    } else if (fromUnit === "Inch" && toUnit === "Feet") {
        result = inputValue / 12;
    } else if (fromUnit === "Feet" && toUnit === "Inch") {
        result = inputValue * 12;
    } else if (fromUnit === "Inch" && toUnit === "Meter") {
        result = inputValue * 0.0254;
    } else if (fromUnit === "Meter" && toUnit === "Inch") {
        result = inputValue / 0.0254;
    } else if (fromUnit === "Feet" && toUnit === "Meter") {
        result = inputValue * 0.3048;
    } else if (fromUnit === "Meter" && toUnit === "Feet") {
        result = inputValue / 0.3048;
    } else if (fromUnit === "Centimeter" && toUnit === "Yard") {
        result = inputValue / 91.44;
    } else if (fromUnit === "Yard" && toUnit === "Centimeter") {
        result = inputValue * 91.44;
    } else if (fromUnit === "Centimeter" && toUnit === "Mile") {
        result = inputValue / 160934.4;
    } else if (fromUnit === "Mile" && toUnit === "Centimeter") {
        result = inputValue * 160934.4;
    } else if (fromUnit === "Centimeter" && toUnit === "Kilometer") {
        result = inputValue / 100000;
    } else if (fromUnit === "Kilometer" && toUnit === "Centimeter") {
        result = inputValue * 100000;
    } else if (fromUnit === "Inch" && toUnit === "Yard") {
        result = inputValue / 36;
    } else if (fromUnit === "Yard" && toUnit === "Inch") {
        result = inputValue * 36;
    } else if (fromUnit === "Inch" && toUnit === "Mile") {
        result = inputValue / 63360;
    } else if (fromUnit === "Mile" && toUnit === "Inch") {
        result = inputValue * 63360;
    } else if (fromUnit === "Inch" && toUnit === "Kilometer") {
        result = inputValue * 0.0000254;
    } else if (fromUnit === "Kilometer" && toUnit === "Inch") {
        result = inputValue / 0.0000254;
    } else if (fromUnit === "Feet" && toUnit === "Yard") {
        result = inputValue / 3;
    } else if (fromUnit === "Yard" && toUnit === "Feet") {
        result = inputValue * 3;
    } else if (fromUnit === "Feet" && toUnit === "Mile") {
        result = inputValue / 5280;
    } else if (fromUnit === "Mile" && toUnit === "Feet") {
        result = inputValue * 5280;
    } else if (fromUnit === "Feet" && toUnit === "Kilometer") {
        result = inputValue * 0.0003048;
    } else if (fromUnit === "Kilometer" && toUnit === "Feet") {
        result = inputValue / 0.0003048;
    } else if (fromUnit === "Meter" && toUnit === "Yard") {
        result = inputValue * 1.09361;
    } else if (fromUnit === "Yard" && toUnit === "Meter") {
        result = inputValue / 1.09361;
    } else if (fromUnit === "Meter" && toUnit === "Mile") {
        result = inputValue / 1609.34;
    } else if (fromUnit === "Mile" && toUnit === "Meter") {
        result = inputValue * 1609.34;
    } else if (fromUnit === "Meter" && toUnit === "Kilometer") {
        result = inputValue / 1000;
    } else if (fromUnit === "Kilometer" && toUnit === "Meter") {
        result = inputValue * 1000;
    } else if (fromUnit === "Yard" && toUnit === "Mile") {
        result = inputValue / 1760;
    } else if (fromUnit === "Mile" && toUnit === "Yard") {
        result = inputValue * 1760;
    } else if (fromUnit === "Yard" && toUnit === "Kilometer") {
        result = inputValue / 1093.61;
    } else if (fromUnit === "Kilometer" && toUnit === "Yard") {
        result = inputValue * 1093.61;
    } else if (fromUnit === "Mile" && toUnit === "Kilometer") {
        result = inputValue * 1.60934;
    } else if (fromUnit === "Kilometer" && toUnit === "Mile") {
        result = inputValue / 1.60934;
    } else {
        result = inputValue; 
    }

    // Display the result
    document.getElementById("result").innerHTML =
        result.toFixed(4);
}
