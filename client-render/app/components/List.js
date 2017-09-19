import React from 'react';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    setTimeout(() => {
        this.setState({
            data: [
              {
                "name": "test",
                "sport": "basket"
              },
              {
                "name": "test2",
                "sport": "foot"
              }
            ]
        });
    }, 3000);
  }
  render() {
    return <ul>
      {this.state.data.map((item) => <li key={item.name}>{item.name}:{item.sport}</li>)}
    </ul>
  }
}
