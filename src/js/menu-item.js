let MenuItem = React.createClass({

  getDefaultProps: function() {
    return {
      isActive: false
    }
  },
  getInitialState: function() {
    return {
      subMenuVisible: this.props.isActive
    }
  },
  handleOnMouseEnter: function () {
    this.setState({
      isHovering: true
    })
  },
  handleOnMouseLeave: function() {
    this.setState({
      isHovering: false
    })
  },

  handleOnClick: function() {
    this.setState({
      subMenuVisible: !this.state.subMenuVisible
    })
  },

  render: function() {
    let style = {
      color: this.state.isHovering ? 'green' : 'black'
    }
    return (
      <li
        style={style}
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}
        onClick={this.handleOnClick}>
        Menu Item
          {this.state.subMenuVisible ? (
            <ul>
              <li>Submenu</li>
            </ul>
          ) : false}
      </li>
    )
  }
})


module.exports = MenuItem
