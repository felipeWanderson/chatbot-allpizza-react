import React from 'react'
import {InputGroup, InputGroupAddon, Button,Input} from 'reactstrap'

const ChatMensagem = props => {
    return (
        <div className='chat-mensagem'>
            <InputGroup>
                <Input placeholder='Digite sua mensagem' />
                <InputGroupAddon addonType='append'>
                    <Button color='success'>enviar</Button>
                </InputGroupAddon>
            </InputGroup>
        </div>
    )
}

export default ChatMensagem