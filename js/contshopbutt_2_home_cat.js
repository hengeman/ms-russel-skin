(function() {
  // Re-Link the Continue Shopping button to the Home category

  var a,
      ids = ['btnCancel1_div', 'btnCancel2_div', 'btnCancel1_div'],
      i = ids.length;

  while (i--) {
    a = document.getElementById(ids[i]);
    if (a) {
      a.href = 'UserContentStart.aspx?category=1';
      return;
    }
  }
})();
