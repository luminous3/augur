import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      balance: null,
      avgTransferAmt: null,
      token: null,
    }
  }

  async getBalance() {
    const token = document.getElementsByClassName('balanceToken')[0].value
    const account = document.getElementsByClassName('balanceAccount')[0].value

    debugger

    const response = await fetch(`/${token}/account/${account}/balance`)
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(body.message)
    }

    this.setState({
      balance: body,
    })
  }

  async getAvgTransferAmt() {
    const token = document.getElementsByClassName('avgToken')[0].value

    const response = await fetch(`/${token}/stats/average`)
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(body.message)
    }

    this.setState({
      avgTransferAmt: body,
    })
  }

  render() {
    const { balance, avgTransferAmt, token } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <h4>Augur Test App</h4>
        </header>
        <section className="App-body">
          <ul>
            <h4>Balance of Account for Token</h4>
            <li className="querySection">
              <div>
                <input placeholder="Token" className="balanceToken tokenInput" />
                <input placeholder="Account" className="balanceAccount tokenInput" />
                <button onClick={this.getBalance.bind(this)}>Submit</button>
              </div>
              <label>{balance}</label>
            </li>

            <h4>Average Token Transfer Amount</h4>
            <li>
              <div>
                <input placeholder="Token" className="avgToken tokenInput">
                  {token}
                </input>
                <button onClick={this.getAvgTransferAmt.bind(this)}>Submit</button>
              </div>
              <label>{avgTransferAmt} </label>
            </li>

            <h4>Median Token Transfer Amount</h4>
            <li>
              <div>
                <input placeholder="Token" className="tokenInput">
                  {token}
                </input>
                <button onClick={this.getAvgTransferAmt.bind(this)}>Submit</button>
              </div>
              <label>{avgTransferAmt} </label>
            </li>

            <h4>Highest Account Value</h4>
            <li>
              <div>
                <input placeholder="Timestamp" className="highestAccountTimestamp">
                  {token}
                </input>
                <button onClick={this.getAvgTransferAmt.bind(this)}>Submit</button>
              </div>
              <label>{avgTransferAmt} </label>
            </li>

            <h4>Most Transfers of a Token</h4>
            <li>
              <div>
                <input placeholder="Token" className="tokenInput" />
                <input placeholder="Timestamp" type="text" name="timestamp">
                  {token}
                </input>
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
