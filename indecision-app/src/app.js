class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Thing two', 'Thing four'];

        return (
            <div>                
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
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

// setup options prop for Options comp
// render length of options array

class Options extends React.Component {
    render() {
        return (
            <div>
            {    
                this.props.options.map( (option) => {
                    return <Option key={option} optionText={option}/> 
                })
            }
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                Add option component here
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

// challenge
// nested Option -> Option component here

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));