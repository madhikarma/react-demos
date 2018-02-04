
// count - setup default prop value to 0
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = { 
            count: 0
        }
    }
    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);
        if (!isNaN(count)) {
            this.setState( () => ({ count: parseInt(count, 10) } ) )
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log('saving', this.state.count);
            localStorage.setItem('count', this.state.count);
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount', ' - Counter');
    }
    handleAddOne() {
        this.setState( (prevState) => {
            return { count: prevState.count+1 }
        })
        console.log(this.state);
    }
    handleMinusOne() {
        this.setState( (prevState) => {
            return { count: prevState.count-1 }
        })
        console.log(this.state);

    }
    handleReset() {
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

// Counter.defaultProps = {
//     count: 0
// }

ReactDOM.render(<Counter count={-10}/>, document.getElementById('app'));
