/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const METER_TO_FEET = 3.281
const LITER_TO_GALLON = 0.264
const KILO_TO_POUND = 2.204
const inputEl = document.getElementById("measure-ipt")
const measureBtn = document.getElementById("measure-btn")
const lengthEl = document.getElementById("length-value")
const volumeEl = document.getElementById("volume-value")
const massEl = document.getElementById("mass-value")

measureBtn.addEventListener("click", function() {
    const unitValue = Number(inputEl.value)
    
    lengthEl.textContent = calculateLength(unitValue)
    volumeEl.textContent = calculateVolume(unitValue)
    massEl.textContent = calculateMass(unitValue)
    
})

function calculateLength(unit) {
    return `${unit} kilos = ${convertToPounds(unit)} pounds | ${unit} pounds = ${convertToKilograms(unit)} kilos`
}

function calculateVolume(unit) {
    return `${unit} liters = ${convertToGallons(unit)} gallons | ${unit} gallons = ${convertToLiters(unit)} liters`
}

function calculateMass(unit) {
    
    return `${unit} meters = ${convertToFeet(unit)} feet | ${unit} feet = ${convertToMeters(unit)} meters`
}

function convertToGallons(unit) {
    return (unit * LITER_TO_GALLON).toFixed(3)
}

function convertToLiters(unit) {
    return (unit / LITER_TO_GALLON).toFixed(3)
}

function convertToPounds(unit) {
    return (unit * KILO_TO_POUND).toFixed(3)
}

function convertToKilograms(unit) {
    return (unit / KILO_TO_POUND).toFixed(3)
}

function convertToFeet(unit) {
    return (unit * METER_TO_FEET).toFixed(3)
}

function convertToMeters(unit) {
    return (unit / METER_TO_FEET).toFixed(3)
}