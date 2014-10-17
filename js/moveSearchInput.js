(function() {
  // Move the search input to the header insert
  var headerSearch = document.querySelector('.site-header__search-input'),
      searchInput  = document.querySelector('#txtSearch');

  headerSearch.insertBefore(searchInput, headerSearch.firstChild);
}());
