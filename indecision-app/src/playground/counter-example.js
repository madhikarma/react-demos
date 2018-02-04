
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = { 
            count: props.count
        }
    }
    handleAddOne() {
        console.log('handleAddOne clicked');
        this.setState( (prevState) => {
            return { count: prevState.count+1 }
        })
        console.log(this.state);
    }
    handleMinusOne() {
        console.log('handleMinusOne clicked');
        this.setState( (prevState) => {
            return { count: prevState.count-1 }
        })
        console.log(this.state);

    }
    handleReset() {
        console.log('handleReset clicked');

        this.setState( () => {
            return { count: 0 }
        })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}


// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// };

// ReactDOM.render(<User name='Andrew' age={27} />, document.getElementById('app'));

Counter.defaultProps = {
    count: 0
}


ReactDOM.render(<Counter count={-10}/>, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const minusOne = () => {
//     count --;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();