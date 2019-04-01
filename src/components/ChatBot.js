import React, {Component} from 'react'

import './chat/chat.css'
import ChatHeader from './chat/ChatHeader';
import ChatConversa from './chat/ChatConversa';
import ChatMensagem from './chat/ChatMensagem';

class ChatBot extends Component {
    render(){
        return(
            <div className='chatbot'>
                <ChatHeader />
                <ChatConversa />
                <ChatMensagem />
            </div>
        )
    }
}

export default ChatBot