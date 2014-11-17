// Move the search input to the header insert
(function() {
  'use strict';
  var headerSearch,
      searchInput  = document.querySelector('#txtSearch');

  if (searchInput) {
    headerSearch = document.querySelector('.site-header__search-input');
    headerSearch.insertBefore(searchInput, headerSearch.firstChild);
  } else {
    document.querySelector('.site-header__search').style.display = 'none';
  }
}());
