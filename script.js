(function () {
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');

  toggle.addEventListener('click', function () {
    var isOpen = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  links.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', false);
    });
  });
})();
