import React from 'react';

const fetchData = () => Promise.resolve(['some data from api']);

const withData = MyComponent =>
  class extends React {
    state = { data: [] };
    componentDidMount() {
      fetchData().then(data => this.setState({ data }));
    }
    render() {
      <MyComponent {...this.props} data={this.state.data} />;
    }
  };
