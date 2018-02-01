class Header extends React.Component {
    render() {
        return (<p>This is a header component</p>);
    }
}

function createJsx() {
    return (
    <div>
        <h1>Title</h1>
        <Header />
    </div>)
}

ReactDOM.render(createJsx(), document.getElementById('app'))