import React from 'react';
import { fetchDataFromApi } from './../utils';

const withData = MyComponent =>
  class extends React {
    state = { data: [] };
    componentDidMount() {
      fetchDataFromApi().then(data => this.setState({ data }));
    }
    render() {
      <MyComponent {...this.props} data={this.state.data} />;
    }
  };

export default withData;
