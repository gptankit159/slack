import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes ,Route,Link} from "react-router-dom";
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase";
import Login from './components/Login';
import Spinner from 'react-spinkit';

function App() {
  const [user , loading] = useAuthState(auth);
  if(loading){
    return(
      <AppLoading>
        <AppLoadingContent>
        <img src="https://ik.imagekit.io/rjcjzgdentg/clone/slack.png" alt="" />
        <Spinner name='ball-spin-fade-loader' color='purple' fadeIn='none' />
        </AppLoadingContent>
      </AppLoading>
    )}



  return (
    <div className="app">
      <Router>
        {!user ? (<Login />) :
        (<>
        <Header />
          <AppBody>
            <Sidebar />
            <Routes>
            <Route path="/" exact element={ <Chat /> }>
              {/* <Chat /> */}
            </Route>
          </Routes >
          </AppBody>
          
        </>)
        }
      
    </Router>
    </div>
  );
}

export default App;

const AppBody= styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoading = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  width: 100%;
`
const AppLoadingContent = styled.div`

  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  >img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;

  }
    
`