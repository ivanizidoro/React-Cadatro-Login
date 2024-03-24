import React, { useState, useRef } from "react";
import Axios from "axios";

import People from '../../assets/people.svg'
import Arrow from '../../assets/arrow.svg'

import { Container, H1, Image, ContainerItens, InputLabel, Input, Button } from "./styles";
import { useNavigate } from "react-router-dom";



function App() {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser() {

    const { data: newUser } = await Axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value
    })


    setUsers([...users, newUser])

    navigate('/usuarios')

  }

  return (
    <Container>
      <Image alt="logo-img" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar<img alt="seta" src={Arrow} />
        </Button>

      </ContainerItens>
    </Container>
  );
}

export default App