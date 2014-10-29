var trackOutboundLink;
(function() {
  var i,
      links,
      nameColIndex,
      pListOnclick,
      pList,
      pListHeaders;

  trackOutboundLink = function trackOutboundLink(name) {
    ga('send', 'event', 'outbound', 'download', name);
  };

  //
  // Add tracking to ProductList preview links
  //
  pList = document.querySelector('#roiProdList_gridViewProducts');

  // Find out which column is the name column
  pListHeaders = pList.querySelectorAll('th');

  i = pListHeaders.length;
  while (i--) {
    if (/Name/.test(pListHeaders[i].textContent)) {
      nameColIndex = i;
      break;
    }
  }

  // Attach the trackOutboundLink function to each preview link
  links = pList.querySelectorAll('a');

  pListOnclick = function pListOnclick() {
    trackOutboundLink(
        // Event name is the document name
        this.parentElement
          .parentElement
          .childNodes[nameColIndex + 1]
          .textContent
          .trim()
          );
  };

  i = links.length;
  while (i--) {
    if (links[i].pathname === '/getThumbnail.aspx') {
      links[i].addEventListener('click', pListOnclick);
    }
  }
}());
