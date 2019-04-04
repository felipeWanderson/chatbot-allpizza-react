import React, {Component} from 'react'
import {InputGroup, InputGroupAddon, Button,Input} from 'reactstrap';
import { connect } from 'react-redux'; 

class ChatMensagem extends Component {
    constructor(props) {
        super(props)
        this.inputEnviaTexto = this.inputEnviaTexto.bind(this);
    }

    inputEnviaTexto(e){
        if(e.keyCode === 13){
            console.log(e.target.value);
        }
        
    }

    render(){
        return (
            <div className='chat-mensagem'>
                <hr />
                <InputGroup>
                    <Input onKeyDown={this.inputEnviaTexto} placeholder='Digite sua mensagem' />
                    <InputGroupAddon addonType='append'>
                        <Button color='success'>enviar</Button>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        );
    }
}

export default connect(null,null)(ChatMensagem) 