let MenuItem = require('./menu-item');

ReactDOM.render(
  (
    <ul>
      <MenuItem isActive={true}/>
      <MenuItem />
    </ul>
  ),
    document.getElementById('app')
);
