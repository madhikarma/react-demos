class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should i do?</button>
            </div>
        );
    }
}

// challenge
// create options component render "options component here"
// add option ->

function createJsx() {
    return (
    <div>
        <h1>Title</h1>
        <Header />
        <Action />
    </div>)
}

ReactDOM.render(createJsx(), document.getElementById('app'))