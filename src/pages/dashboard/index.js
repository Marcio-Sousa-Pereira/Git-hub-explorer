import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import { Title, Form, Repositories } from './style'

export default function Dashboard () {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState([]);

  function handleAddRepository(event) {
    event.preventDefault();
    api.get(`repos/${newRepo}`)
      .then(response => {
        console.log(response)
        
        const repository = response.data;
        setRepositories([...repositories, repository])
      })
  }
  return (
    <>
      <Title>Explore repositórios no Github</Title>
      <Form onSubmit={handleAddRepository}>
        <input value={newRepo} 
        onChange={e => setNewRepo(e.target.value)} 
        placeholder="Digite o nome do repositório" />

        <button type="submit">Pesquisar</button>
        </Form>
        <Repositories>
          <a href="teste">
            <img src="#" alt="#"/>
            <div>
              <strong>alguma coisa</strong>
              <p>description</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        </Repositories>
    </>
  );
}