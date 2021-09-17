import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const object = this.state;
    const calc = calculate(object, buttonName);
    this.setState(() => ({
      ...calc,
    }));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <>
        <Display total={total} next={next} operation={operation} />
        <ButtonPanel handleClick={this.handleClick} />
      </>
    );
  }
}

export default App;
