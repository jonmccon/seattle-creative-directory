import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Submit from "../components/Submit/Submit";
import Footer from "../components/Footer/Footer";
import SubmitContent from "../components/Submit/SubmitContent";
import config from "../../data/SiteConfig";

class SubmitPage extends Component {
  render() {
    return (
      <Layout>
        <div className="submit-container">
          <Helmet title={`Add to the Directory | ${config.siteTitle}`} />
          <SubmitContent />
          
        </div>
        <Footer />
      </Layout>
    );
  }
}

export default SubmitPage;
