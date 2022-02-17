import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import { auth, provider } from '../firebase';

function Login() {
    const signIn =(e)=>{
        e.preventDefault();
        auth.signInWithPopup(provider).catch(error=> alert(error.message));
    }
  return (
    <LoginContainer>
        <LoginInnerContainer>
            <img src="https://ik.imagekit.io/rjcjzgdentg/clone/slack.png" alt="" />
            <h1>Sign In To Slack-clone</h1>
                <h2>A clone by Ankit</h2>
            <Button onClick={signIn}> Sign in with Google </Button>
        </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login;

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`;
const LoginInnerContainer = styled.div`
    text-align: center;
    padding: 80px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,.15), 0 1px 2px rgba(0,0,0,.24);

    >img{
        object-fit: contain;
        height: 100px;
        padding-bottom: 40px;
    }
    >Button{
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #769176 !important;
        color: white;
    }
`;
