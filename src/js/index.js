let MenuItem = require('./menu-item');

ReactDOM.render(
    React.createElement('ul', null,
        React.createElement(MenuItem),
        React.createElement(MenuItem)
    ),
    document.getElementById('app')
);
