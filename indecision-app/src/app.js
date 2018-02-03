// Bind examples See Mozilla developer network docs for more info
// const obj = {
//     name: 'Vikram',
//     getName() {
//         return this.name;
//     },
// }

// // const func  = function() {
// //     console.log(this);
// // }
// // func();
// const getName = obj.getName.bind({ name: 'Andrew'});
// console.log(getName());

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
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handle pick')
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should i do?</button>
            </div>
        );
    }
}

// 1. setup form
// 2. wire up onSubmit
// 3. handleAddOption -> fetch value typed if value exists then alert

class Options extends React.Component {
    constructor(props) {
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        console.log(this.props.options);
        alert('handleRemoveAll');
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove all</button>
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