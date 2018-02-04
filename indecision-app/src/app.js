class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.state = {
            options:  ['Thing one', 'Thing two', 'Thing four']
            // options:  []
        }
    }
    // handleDeleteOptions callback from child
    handleDeleteOptions() {
        this.setState( () => {
            return ({ 
                options: [] 
            });
        })
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>                
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0}/>
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasOptions: props.hasOptions
        }
    }
    handlePick() {
        alert('handle pick')
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}
                disabled={!this.props.hasOptions}>What should i do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove all</button>
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
    onFormSubmit(event) {
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        if (option) {
            // app.options.push(option);
            // event.target.elements.option.value = ' ';
            // renderApp();
            alert(option);
        }
    };    
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="option"/>
                    <button>Add option</button>
                </form>
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