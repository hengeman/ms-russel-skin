$(document).ready( function() {
// Re-Link the Continue Shopping button to the Home category
// Called from the Basket insert

  var id_array = ['btnCancel1_div'];

  for (var i = 0; i < id_array.length; i++) {
    var link = document.getElementById(id_array[i]);
    if (link !== null) {
      var link_att = link.attributes;
      link_att.getNamedItem('href').value = 'UserContentStart.aspx?category=1';
      return
    }
  }
});
