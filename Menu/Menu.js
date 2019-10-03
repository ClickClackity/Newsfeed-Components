/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

const createMenu = menuItems => { 
//
  const menu = document.createElement('div');
  const itemContainer = document.createElement('ul');
//
  menuItems.forEach( i => {
    let menuItem = document.createElement('li');
    menuItem.textContent = i;
    itemContainer.appendChild(menuItem);
  });
//
  menu.appendChild(itemContainer);
  menu.classList.add('menu');
  return menu;
}
//
let menu = createMenu(menuItems);
document.querySelector('.header').appendChild(menu);
let menuButton = document.querySelector('.menu-button');
//
menuButton.addEventListener('click', () => {
  menu.classList.toggle('menu--open');
});
