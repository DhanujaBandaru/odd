// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  handleIncrementClick = () => {
    const randomNum = Math.floor(Math.random() * 101)
    const newCount = this.state.count + randomNum
    this.setState({count: newCount})
  }

  render() {
    const {count} = this.state
    const isEven = count % 2 === 0

    return (
      <div className={`container ${isEven ? 'even' : 'odd'}`}>
        <h1 className="heading"> Count 0</h1>
        <p className="count-type">{`Count is ${isEven ? 'Even' : 'Odd'}`}</p>
        <button className="button" onClick={this.handleIncrementClick}>
          Increment
        </button>
        <p className="paragraph">Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
