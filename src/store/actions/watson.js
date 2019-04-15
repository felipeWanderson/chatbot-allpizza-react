import axios from 'axios'
export const conversaWatsonRequest = () => {
    return {
        type: 'CONVERSA_WATSON_REQUEST',
        carregando: true,
        erro: false
    }
}

export const conversaWatsonSucess = (respostas) => {
    return {
        type: 'CONVERSA_WATSON_SUCESS',
        respostas,
        carregando: false,
        erro: false
    }
}

export const conversaWatsonError = () => {
    return {
        type: 'CONVERSA_WATSON_ERROR',
        carregando: false,
        erro: true
    }
} 

export const conversaWatson = ((mensagem, contexto) => {
    return dispach => {
        dispach(conversaWatsonRequest())
        //chama o backend do watson (firebase)
        const url = 'http://localhost:5000/meu-projeto-chat-all-pizza/us-central1/conversa'
        axios.post(url, {mensagem, contexto})
             .then((data)=> dispach(conversaWatsonSucess(data)))
             .catch(() => dispach(conversaWatsonError()))
    }
})