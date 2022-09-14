function preventDefault() {
  event.preventDefault();
}

function setActiveTab(el) {
  var tabs = document.getElementsByClassName("tab");
  for (var tab of tabs) {
    tab.classList.remove("tab-active");
  }
  el.classList.add("tab-active");
}

// add click listener to each tab
var tabs = document.getElementsByClassName("tab");
for (var tab of tabs) {
  tab.addEventListener("click", function (e) {
    setActiveContent(e.currentTarget);
    setActiveTab(e.currentTarget);
  });
}

let quantityValue = parseInt(document.querySelector(".input-quantity").value);
