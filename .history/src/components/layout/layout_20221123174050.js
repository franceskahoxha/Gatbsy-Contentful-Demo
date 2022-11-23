import React from "react";
import Seo from "../services/seo";
import Navigation from "../Navigation/NavigationBar";
import Footer from "../footer/footer";
class Template extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <>
        <Seo />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </>
    );
  }
}

export default Template;
