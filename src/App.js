import React, { lazy, Suspense, Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import store from '@/store';
import { GlobalStyle } from '@/common/styles/globalStyle';
import { IconfontStyle } from '@/statics/iconfont/iconfont.js';

import Layout from '@/components/Layout/Layout.jsx';

import Home from "@/pages/home/home.jsx";
import Welcome from '@/pages/welcome/welcome.jsx';
const Login = lazy(() => import('@/pages/login/login.jsx'));
const Write = lazy(() => import('@/pages/write/write.jsx'));
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
          <Route path="/write" exact component={Write} />
        </Switch>
      </Layout>
    );
    
    return (
      <Provider store={store}>
        <div>
          <GlobalStyle />
          <IconfontStyle />
          <Router>
            <Switch>
              <Route path="/" exact component={Welcome} />
              <Suspense fallback={<div>Loading...</div>}>
                <Route path="/" render={() => LayoutRouter} />
              </Suspense>
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;