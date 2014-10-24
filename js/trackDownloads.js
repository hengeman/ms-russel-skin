var trackOutboundLink;
(function() {
  var links,
      nameColIndex,
      pListOnclick,
      pList,
      pListHeaders;

  trackOutboundLink = function trackOutboundLink(name) {
    console.log(name);
    ga('send', 'event', 'outbound', 'download', name);
  };

  //
  // Add tracking to ProductList preview links
  //
  pList = document.querySelector('#roiProdList_gridViewProducts');

  // Find out which column is the name column
  pListHeaders = pList.querySelectorAll('th');

  for (var i = 0, len = pListHeaders.length; i < len; i++) {
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

  for (i = 0, len = links.length; i < len; i++) {
    if (links[i].pathname === '/getThumbnail.aspx') {
      links[i].onclick = pListOnclick;
    }
  }
}());
