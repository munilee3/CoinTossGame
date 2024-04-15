import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickTossCoin = () => {
    this.setState(prevState => ({total: prevState.total + 1}))
    const tossResults = Math.floor(Math.random() * 2)
    if (tossResults === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {total, heads, tails, imageUrl} = this.state
    return (
      <div className="app-container">
        <div className="game-container">
          <h1 className="game-title">Coin Toss Game</h1>
          <p className="game-description">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="coin-image" />
          <button
            type="button"
            className="toss-coin-btn"
            onClick={this.onClickTossCoin}
          >
            Toss Coin
          </button>
          <div className="game-results-container">
            <p className="toss-results">Total: {total}</p>
            <p className="toss-results">Heads: {heads}</p>
            <p className="toss-results">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
