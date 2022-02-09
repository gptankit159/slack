import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import { db } from '../firebase';
import firebase from 'firebase/compat/app';
function ChatInput({channelName , channelId}) {

    const [input, setInput] = useState("");
    // console.log(channelId);
    const sendMessage =(e)=>{
        e.preventDefault(); //Prevents Refresh
        
        if(!channelId){
            return false;
        }

        db.collection("rooms").doc(channelId).collection("messages").add({
            message:input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user : "Ankit",
            userImage: "https://avatars.githubusercontent.com/u/59062386?s=40"
        })

        setInput("");
    }
  return <ChatInputConatiner>
      <form >
          <input 
          placeholder={`Message Room`} 
          onChange={(e)=>setInput(e.target.value) } 
          value={input}
          />
         {/* backticks are use dfor string interpolations ``  */}
         <Button hidden type='submit' onClick={sendMessage}>SEND</Button>
      </form>


  </ChatInputConatiner>;
}

export default ChatInput;

const ChatInputConatiner = styled.div`
    border-radius: 20px;
    >form {
        position: relative;
        display: flex;
        justify-content: center;
    }
    >form >input{
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }
    >form >button{
        display: none !important;
    }
`;