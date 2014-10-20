(function() {
  // Add a welcome note to the top of the page

  var name, content, welcome;

  content = document.querySelector('td.basic:nth-child(3)');
  name    = document.querySelector('#pageHeaderControl_login_lblWelcome')
    .textContent
    .split(' ')[1];

  welcome = document.createElement('p');
  welcome.className = 'welcome-message';
  welcome.innerHTML = 'Welcome '+name+'. Would you like to start a document?';

  content.insertBefore(welcome, content.firstChild);
}());
