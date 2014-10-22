(function() {
  // Add 'current' class to navlink for current page
  var links = document.querySelectorAll('.site-header__nav a'),
      url   = document.URL,
      pathname;

  for (var i = 0, len = links.length; i < len; i++) {
    pathname = links[i].pathname;

    if (pathname && new RegExp(pathname).test(url)) {
      links[i].className = 'current';
      return;
    }
  }
}());
