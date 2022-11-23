import React from "react";
import Layout from "../components/layout/layout";
import "./styling/styles.scss";

class RootIndex extends React.Component {
  render() {
    return <Layout location={this.props.location}></Layout>;
  }
}

export default RootIndex;
