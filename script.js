function preventDefault() {
  event.preventDefault();
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
