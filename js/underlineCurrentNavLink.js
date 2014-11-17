// Add 'current' class to navlink for current page
(function() {
  'use strict';
  var links = document.querySelectorAll('.site-header__nav a'),
      url   = document.URL,
      pathname,
      i;

  i = links.length;
  while (i--) {
    pathname = links[i].pathname;

    if (pathname && new RegExp(pathname).test(url)) {
      links[i].className = 'current';
      return;
    }
  }
}());
