const tabsBtn = document.querySelectorAll(".nav-item");
const tabsItems = document.querySelectorAll(".blog-sub-item");

tabsBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    let currentBtn = item;

    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    tabsItems.forEach(function (item) {
      item.classList.remove("show");
    });

    tabsBtn.forEach(function (item) {
      item.classList.remove("show");
    });

    currentTab.classList.add("show");
  });
});
