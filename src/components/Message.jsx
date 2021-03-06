import React from 'react';
import styled from 'styled-components';

function Message({message , timestamp , user, userImage}) {
  return <MessageContainer>
      <img src={userImage} alt="userIcon" />
      <MessageInfo>
    <h4>
        {user}{' '}
        <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
    </h4>
    <p>{message}</p>
      </MessageInfo>
  </MessageContainer>;
}

export default Message;

const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    >img{
        height: 50px;
        border-radius: 6px;
    }
`;

const MessageInfo = styled.div`
    margin-left: 10px;
    >h4 > span{
        color: gray;
        font-weight: 400;
        margin-left: 4px;
        font-size: 11px;
    }
`