import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      balance: null,
      avgTransferAmt: null,
    }
  }

  getAvgTransferAmt = () => {
    console.log('test')
  }

  render() {
    const { balance, avgTransferAmt } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <h4>Augur Test App</h4>
        </header>
        <section className="App-body">
          <ul>
            <h4>Balance of Token</h4>
            <li className="querySection">
              <div>
                <input placeholder="Token" type="text" name="token" />
                <input placeholder="Timestamp" type="text" name="timestamp" />
                <button> Submit </button>
              </div>
              <label>{balance} </label>
            </li>

            <h4>Average Token Transfer Amount</h4>
            <li>
              <div>
                <input placeholder="Token" type="text" name="token" />
                <button onClick={this.getAvgTransferAmt.bind(this)}>Submit</button>
              </div>
              <label>{avgTransferAmt} </label>
            </li>
          </ul>
        </section>
      </div>
    )
  }
}

export default App
