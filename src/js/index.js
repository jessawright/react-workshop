let SelectableGroup = require('./selectable-group');
let MenuItem = require('./menu-item');

let items = [
  'Home',
  'Search',
  'About',
  'Contact'
];

let menuItems = items.map(function(item, index){
  return <MenuItem key={index} name={item} />
});


ReactDOM.render(
  (
  <SelectableGroup children={menuItems} activeMenu={1}/>
  ),
    document.getElementById('app')
);
