import React, { useState, useRef } from "react";
import Axios from "axios";

import People from '../../assets/people.svg'
import Arrow from '../../assets/arrow.svg'

import { Container, Image, InputLabel, Input } from "./styles";
import { useNavigate } from "react-router-dom";
import H1 from "../../components/Title";
import ContainerItens from "../../components/ContainerItens"
import Button from "../../components/Button"



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