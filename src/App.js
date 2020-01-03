import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import Header from './Header'
import './App.css';
import Features from './Features';
import Summary from './Cart';
import Total from './Options';

// This object will allow us to
// easily convert numbers into US dollar values
export const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  
render() {
   

    return (
      <div className="App">
        <Header />
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            < Features updateFeature={this.updateFeature} selected={this.state.selected} features={this.props.features} USCurrencyFormat={USCurrencyFormat}/>
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
              < Summary selected={this.state.selected}/>
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
               <Total selected={this.state.selected}/>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
