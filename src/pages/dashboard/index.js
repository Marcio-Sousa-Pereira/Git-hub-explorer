import React from 'react';
import { Title, Form, Repositories } from './style'

export default function Dashboard () {
  return (
    <>
      <Title>Explore repositórios no Github</Title>
      <Form action="">
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
        <Repositories>
          
        </Repositories>
      </Form>
    </>
  );
}