let MenuItem = require('./menu-item');

let items = [
  'Home',
  'Search',
  'About',
  'Contact'
];

let Menu = React.createClass({
  getInitialState: function () {
    return {
      activeMenu: 1
    }
  },
  
  render: function() {
    let activeMenu = this.state.activeMenu;
    let menuItems = items.map(function(item, index) {
      if (activeMenu === index) {
        return <MenuItem key={index} name={item} isActive={true} />
      } else {
      return <MenuItem key={index} name={item} />
    }
    });

    return (
      <ul>
        {menuItems}
        </ul>
    )
  }
})

module.exports = Menu
