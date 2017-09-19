import React from 'react';

export default class Home extends React.Component {
  constructor() {
    super();
  }
  render() {
    const {data} = this.props;
    return <div>
        <a href="/">Home</a>
        <a href="/list">List</a>
        <div>
            Hello {data.username}!
        </div>
    </div>
  }
}
