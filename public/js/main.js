(function () {
  var toggle =
    document.querySelector('.dropdown__toggle');
  toggle.addEventListener('click', function (event) {
    event.preventDefault();
    var dropdown = event.target.parentNode;
    dropdown.classList.toggle('is-open');
  }
  );
}());