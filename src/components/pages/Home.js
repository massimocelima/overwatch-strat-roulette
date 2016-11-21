import React, {Component} from 'react';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';

class Home extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
        <div>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
        </div>
    );
  }
}

export default withWidth()(Home);
