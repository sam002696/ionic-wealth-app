import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import AuthProvider from './contexts/AuthProvider/AuthProvider';
import LoginForm from './Pages/Login/LoginForm/LoginForm';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import RegisterForm from './Pages/Login/RegisterForm/RegisterForm';
import NotFound from './Pages/NotFound/NotFound';
import Page404 from './Pages/NotFound/Page404';

import TermsandConditions from './Pages/Policies/TermsandConditions/TermsandConditions';
import ReviewForm from './Pages/Review/ReviewForm';
import ServiceDetailsList from './Pages/ServiceDetailsList/ServiceDetailsList/ServiceDetailsList';
import PreLoader from './Pages/Shared/PreLoader/PreLoader';
import StartFromTop from './Pages/Shared/StartFromTop/StartFromTop';
import Testimonial from './Pages/Testimonial/Testimonial';
import Webviewer from './Pages/WebViewer/Webviewer';
const LazyContactUs = React.lazy(() => import('./Pages/ContactUs/ContactUs'));
const LazyHome = React.lazy(() => import('./Pages/Home/Home/Home'));
const LazyDashboard = React.lazy(() => import('./Pages/Dashboard/Dashboard/Dashboard'));
const LazyMainAdminDashboard = React.lazy(() => import('./Pages/Dashboard/Dashboard/MainAdminDashboard'));



function App() {
  return (
    <div >

      <AuthProvider>
        <Router>
          <StartFromTop />
          <Switch>
            <Route exact path="/">
              <React.Suspense fallback={<PreLoader />}>
                <LazyHome />
              </React.Suspense>
              {/* <Home /> */}
            </Route>
            <Route path="/home">
              <React.Suspense fallback={<PreLoader />}>
                <LazyHome />
              </React.Suspense>
              {/* <Home /> */}
            </Route>

            <Route path="/allservices">
              <ServiceDetailsList />
            </Route>
            <Route path="/contactus">
              <React.Suspense fallback={<PreLoader />}>
                <LazyContactUs />
              </React.Suspense>

            </Route>

            <Route path="/pdf">
              <Webviewer />
            </Route>

            <Route path="/admindashboard">
              <React.Suspense fallback={<PreLoader />}>
                <LazyMainAdminDashboard />
              </React.Suspense>
            </Route>
            <PrivateRoute path="/dashboard">
              <React.Suspense fallback={<PreLoader />}>
                <LazyDashboard />
              </React.Suspense>
            </PrivateRoute>

            <Route path="/testimonial">
              <Testimonial />
            </Route>
            <Route path="/reviewform">
              <ReviewForm />
            </Route>
            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path="/register">
              <RegisterForm />
            </Route>
            <Route path="/terms-conditions">
              <TermsandConditions />
            </Route>
            <Route path="/notfound">
              <NotFound />
            </Route>
            <Route path="*">
              <Page404 />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
