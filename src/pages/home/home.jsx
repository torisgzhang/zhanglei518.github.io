import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import {
  HomeWrapper,
} from './style';
import List from './components/List/List.jsx';
import { actionCreators } from './store';

class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper className="clearfix">
        <List></List>
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.getHomeData();
  }
}

const mapDispatch = (dispatch) => ({
  getHomeData() {
    dispatch(actionCreators.getHomeData());
  }
});
export default connect(null, mapDispatch)(Home);