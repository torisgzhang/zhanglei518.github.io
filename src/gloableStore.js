import React, { PureComponent } from 'react';
import * as actionCreators from './store/actionCreators';
import { connect } from "react-redux";

class GloableStore extends PureComponent {
  render() {
    return (
      // background: 'linear-gradient(200deg,#a0cfe4,#e8c37e)
      <div >
        {this.props.children}
      </div>
    );
  }
  componentDidMount() {
    const screenWidth = document.documentElement.clientWidth;
    window.addEventListener('resize', this.screenChange(screenWidth));
  }
  componentWillUnmount() {
    const screenWidth = document.documentElement.clientWidth;
    window.removeEventListener('resize', this.screenChange(screenWidth));
  }
  screenChange(screenWidth) {
    if(screenWidth < 600) {
      this.props.setIsMobile(true);
    } else {
      this.props.setIsMobile(false);
    }
  }
}
const mapDispatch = (dispatch) => ({
  setIsMobile(isM) {
    dispatch(actionCreators.isMobile(isM));
  }
});
export default connect(null, mapDispatch)(GloableStore);