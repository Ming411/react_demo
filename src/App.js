import React, {PureComponent} from 'react';

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  setCount() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    return (
      <div>
        <span>{this.state.count}</span>
        <button onClick={this.setCount.bind(this)}>+1</button>
      </div>
    );
  }
}
