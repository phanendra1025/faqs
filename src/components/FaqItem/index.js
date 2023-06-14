// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {
    isAnswerVisible: false,
  }

  showAnswer = () => {
    this.setState(prevState => ({isAnswerVisible: !prevState.isAnswerVisible}))
  }

  render() {
    const {faqDetails} = this.props
    const {isAnswerVisible} = this.state
    const {questionText, answerText} = faqDetails

    const imageUrl = isAnswerVisible
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '

    return (
      <li className="faq-item">
        <div className="question-container">
          <h1 className="question ">{questionText}</h1>
          <button
            type="button"
            onClick={this.showAnswer}
            className="plus-or-minus-button"
          >
            {' '}
            <img
              src={imageUrl}
              alt="plus
"
            />
          </button>
        </div>

        {isAnswerVisible && (
          <div>
            <hr className="hr-line" />
            <p className="answer-text">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
