// factora Journal — newsletter form (front-end demo; wire to a real provider before launch)
(function () {
  var form = document.getElementById("newsletter-form");
  var email = document.getElementById("newsletter-email");
  var note = document.getElementById("form-note");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var value = email.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      note.textContent = "Please enter a valid email address.";
      email.focus();
      return;
    }
    note.textContent = "Thanks — you're on the list. See you Sunday.";
    form.reset();
  });

  var meta = document.querySelector(".footer-meta");
  if (meta) {
    meta.innerHTML = meta.innerHTML.replace("2026", String(new Date().getFullYear()));
  }
})();
