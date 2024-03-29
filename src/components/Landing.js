import React, { Component } from "react";
import styled from "styled-components";

import PageWrapper from "./ui/PageWrapper";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import ProductList from "./product/ProductList";

const Hero = styled.div`
  height: 300px;
  background: #003b6f;
  color: #ddd;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -40px -40px 60px;
  @media (max-width: 700px) {
    font-size: 2rem;
    height: 150px;
  }
`;

class Landing extends Component {
  render() {
    const { config } = this.props;
    return (
      <PageWrapper>
        <Paper style={{ padding: "40px" }}>
          <Hero>
            <div className="heroDiv">
              <p>Change the text in src / components / Landing.js</p>
            </div>
          </Hero>
          <Divider style={{ margin: "40px 0" }} />
          <ProductList config={config} />
        </Paper>
      </PageWrapper>
    );
  }
}
export default Landing;
