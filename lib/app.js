(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var SelectableGroup = require('./selectable-group');
var MenuItem = require('./menu-item');

var items = ['Home', 'Search', 'About', 'Contact'];

var menuItems = items.map(function (item, index) {
  return React.createElement(MenuItem, { key: index, name: item });
});

ReactDOM.render(React.createElement(SelectableGroup, { children: menuItems, activeMenu: 1 }), document.getElementById('app'));

},{"./menu-item":2,"./selectable-group":3}],2:[function(require,module,exports){
'use strict';

var MenuItem = React.createClass({
  displayName: 'MenuItem',


  getDefaultProps: function getDefaultProps() {
    return {
      isActive: false,
      name: 'Default Menu Item'
    };
  },
  getInitialState: function getInitialState() {
    return {
      subMenuVisible: this.props.isActive
    };
  },
  handleOnMouseEnter: function handleOnMouseEnter() {
    this.setState({
      isHovering: true
    });
  },
  handleOnMouseLeave: function handleOnMouseLeave() {
    this.setState({
      isHovering: false
    });
  },

  handleOnClick: function handleOnClick() {
    this.setState({
      subMenuVisible: !this.state.subMenuVisible
    });
  },

  render: function render() {
    var style = {
      color: this.state.isHovering ? 'green' : 'black'
    };
    return React.createElement(
      'li',
      {
        style: style,
        onMouseEnter: this.handleOnMouseEnter,
        onMouseLeave: this.handleOnMouseLeave,
        onClick: this.handleOnClick },
      this.props.name,
      this.state.subMenuVisible ? React.createElement(
        'ul',
        null,
        React.createElement(
          'li',
          null,
          'Submenu'
        )
      ) : false
    );
  }
});

module.exports = MenuItem;

},{}],3:[function(require,module,exports){
'use strict';

var MenuItem = require('./menu-item');

var SelectableGroup = React.createClass({
  displayName: 'SelectableGroup',

  getInitialState: function getInitialState() {
    return {
      activeMenu: this.props.activeMenu
    };
  },

  render: function render() {
    var activeMenu = this.state.activeMenu;
    /*
        let menuItems = this.props.items.map(function(item, index) {
          if (activeMenu === index) {
            return <MenuItem key={index} name={item} isActive={true} />
          } else {
          return <MenuItem key={index} name={item} />
        }
        });
    */
    return React.createElement(
      'ul',
      null,
      this.props.children
    );
  }
});

module.exports = SelectableGroup;

},{"./menu-item":2}]},{},[1]);
