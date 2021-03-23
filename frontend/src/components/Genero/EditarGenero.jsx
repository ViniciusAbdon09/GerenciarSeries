import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from "axios"

const ModalExample = (props) => {
    const [nome, setNome] = useState('')

    const {
        btnName,
        idItem,
        className
      } = props;

    useEffect(() => { 
        axios
            .get("/api/generos/" + idItem)
            .then(res => {
                setNome(res.data.nome)
            })
    }, [idItem])

    const onChangeName = event => {
        setNome(event.target.value)
    }

    const save = () =>{
        axios
            .put('/api/generos/'+ idItem, { 
                nome
            })
            .then(res => {
                toggle()
            })
    }

  

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="info" onClick={toggle}>{btnName}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Editar Gênero</ModalHeader>
        <ModalBody>
            <form>
                <div className="mb-3">
                <label for="name" className="form-label">Nome</label>
                <input type="text" value={nome} onChange={onChangeName} className="form-control" id="name"/>
                </div>
            </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={save}>Salvar</Button>{' '}
          <Button color="danger" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;