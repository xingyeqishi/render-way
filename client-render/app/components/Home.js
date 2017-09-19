import React from 'react';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ''
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        username: 'sxs'
      });
    }, 3000);
  }
  render() {
    return <div> Hello {this.state.username} !</div>
  }
}
