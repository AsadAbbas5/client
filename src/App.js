import logo from './logo.svg';
import './App.css';
import NaveBar from './compontents/libarary/NaveBar';
import Home from './compontents/home/Home';
import { Box, Container } from '@mui/material';
import Footer from './compontents/section/subscriptionSection/footer/Footer';
import Posts from './compontents/posts/Posts';
import BlogPages from './compontents/blogPages/BlogPages';
import NotFound from './compontents/404/NotFound';
import Contents from './compontents/Contents/Contents';
import About from './compontents/About/About';
import SignUp from './compontents/signUp/SignUp';
import SignIn from './compontents/SignIn/SignIn';
import Apppublic from './Apppublic';
import { connect } from 'react-redux';
import AppPrivite from './AppPriveit';
import { useEffect } from 'react';
import { loadProfile } from './store/action/authActionTypes';

function App({ islogin, loadProfile }) {

  useEffect(() => {
    loadProfile()
  }, [])

  return (
    <div className="App">

      <Box>

        {
          !islogin ?
            <Apppublic /> :
            <AppPrivite />
        }
      </Box>

      {/* <Footer /> */}

    </div>
  );
}

const mapStateProps = (state) => {
  return {
    islogin: state.auth.islogin
  }

}

export default connect(mapStateProps, { loadProfile })(App);
