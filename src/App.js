import React from 'react';
import numeral from 'numeral';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '123', customLocale: false
    };
    // this.handleChange = this.handleChange.bind(this);
    console.log('constructor');

  }

  componentWillMount() {
    numeral.register('locale', 'hohoho', {
      delimiters: {
          thousands: ' ',
          decimal: ','
      },
      abbreviations: {
          thousand: 'k',
          million: 'm',
          billion: 'b',
          trillion: 't'
      },
      ordinal : function (number) {
          return number === 1 ? 'er' : 'ème';
      },
      currency: {
          symbol: '€'
      }
    });
    //numeral.locale('hohoho')
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <content className='values'>
          <div>
            Default value: 
            <input type='number' value={this.state.value} onChange={this.handleChange}></input>
          </div>
          <div>
            Format '0,0': thousand separator 
            {<input value={numeral(this.state.value).format('0,0')} disabled></input>}
          </div>
          <div>
            Format '(0,0)': absolute value 
            {<input value={numeral(this.state.value).format('(0,0)')} disabled></input>}
          </div>
          <div>
            Format '0.0a': number with letter 
            {<input value={numeral(this.state.value).format('0.0a')} disabled></input>}
          </div>
          <div>
            Format '0o': place 
            {<input value={numeral(this.state.value).format('0o')} disabled></input>}
          </div>
          <div>
            Format '$0.00': typical balance 
            <input id='balance' value={numeral(this.state.value).format('$0.00')} disabled></input>
          </div>
          <div>
            Format '0.00 b': file size typical format 
            {<input value={numeral(this.state.value).format('0.00 b')} disabled></input>}
          </div>
          <div>
            Format '00:00:00': time format (seconds to normal time) 
            {<input value={numeral(this.state.value).format('00:00:00')} disabled></input>}
          </div>
          <div>
            Manipulate numeral 'balance' (plus 10 dollars): 
            {`${numeral(this.state.value).add(10).format('$0.00')}`}
          </div>
        </content>
      </div>
    );
  }
}

export default App;
