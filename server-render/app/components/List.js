import React from 'react';

export default class List extends React.Component {
  constructor() {
    super();
    this.clickLi = this.clickLi.bind(this);
  }
  clickLi() {
    console.log('click li');
  }
  componentWillMount() {
    console.log('comp will mount');
  }
  componentDidMount() {
    console.log('comp did mount');
  }
  render() {
    const {data} = this.props;
    console.log('render');
    return <div>
    <a href="/">Home</a>
    <a href="/list">List</a>
    <ul>
        {data.map((item) => <li key={item.name} onClick={this.clickLi}>
            {item.name}:{item.sport}
        </li>
        )}
    </ul>
    </div>
  }
}
