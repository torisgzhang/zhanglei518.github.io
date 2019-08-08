import React, { lazy, Suspense, Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from "react-redux";
import store from '@/store';
import GloableStore from './gloableStore';
import { GlobalStyle } from '@/common/styles/globalStyle';
import { IconfontStyle } from '@/statics/iconfont/iconfont.js';
import { Spin } from 'antd';
import Layout from '@/components/Layout/Layout.jsx';
import Home from "@/pages/home/home.jsx";
import Welcome from '@/pages/welcome/welcome.jsx';
const Login = lazy(() => import('@/pages/login/login.jsx'));
const Tag = lazy(() => import('@/pages/tag/tag.jsx'));
const About = lazy(() => import('@/pages/about/about.jsx'));
const Detail = lazy(() => import('@/pages/detail/detail.jsx'));
// const ErrorPage = lazy(() => import('@/pages/error/error.jsx'));

class App extends Component {
  render() {
    let LayoutRouter = (
      <Layout>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/detail/:id" exact component={Detail} />
          <Route path="/login" exact component={Login} />
          <Route path="/tag" exact component={Tag} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Layout>
    );
    
    return (
      <Provider store={store}>
        <GloableStore>
          <GlobalStyle />
          <IconfontStyle />
          <Router>
            <Switch>
              <Route path="/" exact component={Welcome} />
              <Suspense fallback={<Spin size="large" />}>
                <Route path="/" render={() => LayoutRouter} />
              </Suspense>
            </Switch>
          </Router>
        </GloableStore>
      </Provider>
    );
  }
}

export default (App);