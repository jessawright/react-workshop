
function MenuItem() {
    return React.createElement('li', null, 'MenuItem');
}

ReactDOM.render(
    React.createElement('ul', null,
        React.createElement(MenuItem),
        React.createElement(MenuItem)
    ),
    document.getElementById('app')
);
