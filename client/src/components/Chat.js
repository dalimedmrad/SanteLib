import React from 'react';
import './Chat.css';
import {useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from "../components/ChatFeed"
import LoginForm from '../components/LoginForm'
import { logOutChat } from '../Redux/actions/user';
const projectID = '57153bcf-83ac-4974-a15f-5d76c4bca8ca';

const Chat = () => {
  const history = useNavigate();
  const dispatch=useDispatch()
    if (!localStorage.getItem('username')) return <LoginForm />
    return (
      <div>
      <button onClick={()=>{dispatch(logOutChat());
        history.push('/')}}>LOG OUT</button>

        <ChatEngine
          height="100vh"
          projectID={projectID}
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
          renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
          onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
      </div>
    )
    
}

export default Chat;
