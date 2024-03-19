import { DivContato,Form, DivInput, Label, Input, TituloContato, BotaoContato } from "./style";
import emailjs from '@emailjs/browser'
import { useState } from "react";

function Contato(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');


    function enviarEmail(e){
        e.preventDefault()
        const templateParams = {
            from_name: nome,
            message: mensagem,
            email: email
        }
        emailjs.send('service_apxcfq7','template_ngnmwdc', templateParams, 'o4wPHPXPvhRkE7Dzh' )
        .then((response) => {
            console.log('Email enviado com sucesso!', response.status, response.text)
            
        },
        (error) => {
            console.log('O envio do Email falhou!', error)
        })
       
            setNome('');
            setEmail('');
            setMensagem('');
       
    }


    return(
        <DivContato id="contato">
            <TituloContato >Contato</TituloContato>
              <Form onSubmit={enviarEmail}>
                <DivInput>
                    <Label>Nome *</Label>
                    <Input 
                        placeholder="Seu nome completo" 
                        required 
                        type="text" 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)}
                        />
                </DivInput>
                <DivInput>
                    <Label>Email *</Label>
                    <Input 
                    placeholder="Seu email preferido" 
                    required 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </DivInput>
                <DivInput>
                    <Label>Mensagem *</Label>
                    <Input 
                    placeholder="Escreva sua mensagem"  
                    required 
                    type="text" 
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    paddingBottom="8rem"/>
                </DivInput>
                    <BotaoContato type="submit" value="Enviar Mensagem"></BotaoContato>
            </Form>
        </DivContato>
      
    )
}

export default Contato