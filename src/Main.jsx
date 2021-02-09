import React, { PureComponent } from "react";
import { Route, Switch } from "react-router-dom";
import Authentication from "../src/Pages/Authentication";
import Library from "../src/Pages/Library";
import { saveBooks } from "./Pages/Library/redux/actions";
import { connect } from "react-redux";
import { getAllBooksApi } from "./Api/calls";

import myImage from "./_assets/img/Background.svg";
import styled from "styled-components";

class Main extends PureComponent {
  //we can do it another way by redux-observable and epics listening a redux actions to be triggred
  //i'll do the easy way
  componentDidMount() {
    getAllBooksApi().then((res) => this.props.saveBooks(res.data));
  }

  render() {
    return (
      <div className="root">
        <Color>
          <Switch>
            <Route path="/" exact component={Authentication} />
            <Route path="/library" component={Library} />
          </Switch>
        </Color>
      </div>
    );
  }
}

const mapDispatchToProps = {
  saveBooks,
};
export default connect(null, mapDispatchToProps)(Main);

const Color = styled.div`
  background-image: url(${myImage});
  font-family: "FuturaNextW05-Book", BlinkMacSystemFont, -apple-system,
    "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: medium;
`;
