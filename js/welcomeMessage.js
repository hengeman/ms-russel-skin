// Add a welcome note to the top of the page
(function() {
  'use strict';
  var content,
      welcome,
      name = document.querySelector('#pageHeaderControl_login_lblWelcome');

  if (name) {
    name = name.textContent.split(' ')[1];

    welcome = document.createElement('p');
    welcome.className = 'welcome-message';
    welcome.innerHTML = 'Welcome ' + name +
                        '. Would you like to start a document?';

    content = document.querySelector('td.basic:nth-child(3)');
    content.insertBefore(welcome, content.firstChild);
  }
}());
