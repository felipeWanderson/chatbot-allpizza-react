import React, { Component } from 'react'
import { Alert, Badge } from 'reactstrap'

class ChatConversa extends Component {
    render() {
        return (
            <div className='chat-conversa'>
                <Badge color='primary'>
                    Atendente disse:
                </Badge>
                <Alert color='primary'>
                    Olá como posso ajudar?
                </Alert>

                <Badge color='warning'>
                    você disse:
                </Badge>
                <Alert color='warning'>
                    resposta
                </Alert>

            </div>
        )
    }
}

export default ChatConversa