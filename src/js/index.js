let SelectableGroup = require('./selectable-group');
let MenuItem = require('./menu-item');

let items = [
  'Home',
  'Search',
  'About',
  'Contact'
];

ReactDOM.render(
  (
  <SelectableGroup items={items} activeMenu={1}/>
  ),
    document.getElementById('app')
);
