import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      counter: ''
    };
  }

  handleChange = event => {
    this.setState ({
      value: event.target.value,
      counter: this.props.maxChars - (event.target.value).length
    })
  }

  render() {
    return (

      <div>
      <form>
        <strong>Your message:</strong>
        <input type="text"
        value = {this.state.value}
        onChange={this.handleChange}
         />
         <p>Characters Left: {this.state.counter}</p>

         </form>
      </div>

    );
  }
}

export default TwitterMessage;
