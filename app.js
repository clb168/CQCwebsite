// app.js

// Create a header element
const header = document.createElement('header');
header.textContent = 'My Club';

// Create a tab container element
const tabContainer = document.createElement('div');
tabContainer.classList.add('tab-container');

// Create a tab for the schedule
const scheduleTab = document.createElement('button');
scheduleTab.textContent = 'Schedule';
scheduleTab.classList.add('tab');

// Create a tab for the members list
const membersTab = document.createElement('button');
membersTab.textContent = 'Members';
membersTab.classList.add('tab');

// Add the tabs to the tab container
tabContainer.appendChild(scheduleTab);
tabContainer.appendChild(membersTab);

// Add the header and tab container to the body of the HTML document
document.body.appendChild(header);
document.body.appendChild(tabContainer);