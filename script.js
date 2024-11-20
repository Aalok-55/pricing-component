const perMonthElem = document.getElementById("perMonth");
const pageViewsElem = document.getElementById("pageViews");
const sliderElem = document.getElementById("slider");
const toggleElem = document.getElementById("toggle");

console.log(perMonth, pageViewsElem, sliderElem, toggleElem);

const pageList = [
  { views: "10K", price: 8 },
  { views: "50K", price: 12 },
  { views: "100K", price: 16 },
  { views: "500K", price: 24 },
  { views: "1M", price: 36 },
];

let sliderState = 2;
let yearlyState = false;

sliderElem.addEventListener("change", sliderFn);
toggleElem.addEventListener("change", toggleFn);

function sliderFn(e) {
  sliderState = parseInt(e.target.value);
  calculation();
}
function toggleFn(e) {
  yearlyState = e.target.checked;
  calculation();
}

function calculation() {
  pageViewsElem.textContent = `${pageList[sliderState].views} PAGEVIEWS`;
  inDollars = yearlyState
    ? pageList[sliderState].price * 0.75
    : pageList[sliderState].price;
  perMonthElem.textContent = `$${inDollars.toFixed(2)}`;
}
