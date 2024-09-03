import { Component } from "react";
import { Client } from "@gradio/client";
import { BsRobot, BsSend } from "react-icons/bs";
import BeatLoader from "react-spinners/BeatLoader";
import Header from "../Header";
import "./index.css";

class Bot extends Component {
  state = { query: "", answer: "", isLoading: false };

  gettingHuggingRepo = async () => {
    this.setState({ isLoading: true });
    const { query } = this.state;
    const client = await Client.connect("Karthik0406143/AI", {
      hf_token: "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",
    });
    const result = await client.predict("/chat", {
      user_message: { query },
    });
    this.setState({
      answer: result.data,
      query: "",
      isLoading: false,
    });
  };

  enterQuery = (event) => {
    this.setState({ query: event.target.value });
  };

  getResponse = () => {
    this.gettingHuggingRepo();
  };
  keyDown = (event) => {
    if (event.key === "Enter") {
      this.getResponse();
    }
  };
  render() {
    const { answer, query, isLoading } = this.state;
    return (
      <div className="bot-container">
        <Header />
        <div className="container">
          <div className="robot-continer container">
            <BsRobot className="robot-icon" />
            <h1 className="robot-heading">Hi this is "Chitti", An AI Bot.</h1>
          </div>
          <div className="chat-container">
            {isLoading ? (
              <BeatLoader />
            ) : (
              <p className="answer-para">{answer}</p>
            )}
          </div>
          <div className="text-area-container">
            <textarea
              className="text-area"
              onChange={this.enterQuery}
              value={query}
              placeholder="Ask Any Question?..."
              onKeyDown={this.keyDown}
            ></textarea>
            <button type="button" className="button" onClick={this.getResponse}>
              <BsSend className="send-icon" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Bot;
