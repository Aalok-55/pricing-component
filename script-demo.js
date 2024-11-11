const pageViewsElem = document.getElementById("pageviews");
const perMonthElem = document.getElementById("perMonth");
const sliderElem = document.getElementById("slider");
const toggleElem = document.getElementById("toggle");

console.log({pageViewsElem, perMonthElem, sliderElem, toggleElem});

const billingData = [
    {views: "10K", perMonth: 8},
    {views: "50K", perMonth: 12},
    {views: "100K", perMonth: 16},
    {views: "500K", perMonth: 24},
    {views: "1M", perMonth: 36},
]

let sliderState = 2; // [0, 4]
let yearlyBilling = false;

sliderElem.addEventListener('change', sliderFn);
toggleElem.addEventListener('change', toggleFn);

function refreshPrice(){
    pageViewsElem.textContent = `${billingData[sliderState].views} pageviews`;
    const price = yearlyBilling ? billingData[sliderState].perMonth * 0.75 : billingData[sliderState].perMonth;
    perMonthElem.textContent = `$${price.toFixed(2)}`;
}
function sliderFn(e) {
    console.log(e);
    sliderState = parseInt(e.target.value);
    refreshPrice();
}
function toggleFn(e) {
    console.log(e);
    yearlyBilling = e.target.checked;
    refreshPrice();
}