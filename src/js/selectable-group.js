let MenuItem = require('./menu-item');



let SelectableGroup = React.createClass({
  getInitialState: function () {
    return {
      activeMenu: this.props.activeMenu
    }
  },

  let newChildren = React.Children.map(this.props.children, function(child, index) {
    return React.cloneElement(child, { isActive: true })
  }),

  render: function() {
    let activeMenu = this.state.activeMenu;
/*
    let menuItems = this.props.items.map(function(item, index) {
      if (activeMenu === index) {
        return <MenuItem key={index} name={item} isActive={true} />
      } else {
      return <MenuItem key={index} name={item} />
    }
    });
*/
    return (
      <ul>
        {this.props.newChildren}
        </ul>
    )
  }
})

module.exports = SelectableGroup
