import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="home-bg-container">
          <div className="home-inner-container">
            <h1 className="home-heading">AI Model End-to-End Text Generation Pipeline</h1>
            <p className="home-discription">
            A text generation application using Python, employing an AI framework like GPT-2 or GPT-3. The pipeline should include data collection, model fine-tuning, and deployment on a web platform (MERN). The application should allow users to input prompts and generate coherent text responses.   Millions of people are searching for jobs, salary information,
              company reviews. Find the job that fits your abilities and
              potential.
            </p>
            <Link to="/bot" className="link-item">
              <button type="button" className="home-button">
                Use AI Model
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Home