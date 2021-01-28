import React, { Fragment } from 'react';
import { Container, Span, Input, Button, Span1, Wraper } from './styles'

// import { Container } from './styles';

function Home() {
  return (
    <Fragment>
      <Container>
        <Wraper>
          <Span>Formulario de Cadastramento
      <Input type="name" placeholder="Digite seu nome" />
            <Input type="name" placeholder="Digite seu Endereço" required />
            <Input type="number" placeholder="Digite seu telefone" />
            <Input type="number" placeholder="Digite sua idade" />
            <Button>Cadastrar</Button>
          </Span>
        </Wraper>
        <Span1 className="span1">Olá seja bem vindo aos nossos serviços de testes, estamos com todos os direitos reservados
          </Span1>
      </Container>
    </Fragment>
  )
}

export default Home;