(function () {
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll('a[target="_blank"]').forEach(function (link) {
    link.setAttribute("aria-label", (link.textContent || "External link").trim() + " (opens in a new tab)");
  });
})();
