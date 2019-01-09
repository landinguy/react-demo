import React, {Component} from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    //组件加载时调用的方法
    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000)
    }

    //组件卸载时调用的方法
    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({date: new Date()});
    }

    render() {
        return (
            <div>
                <h4>现在是 {this.state.date.toLocaleTimeString()}</h4>
            </div>
        );
    }
}

export default Clock;
