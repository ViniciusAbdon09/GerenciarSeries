import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from "axios"

const NovaSerie = (props) => {
    const [nome, setNome] = useState('')

    const [modal, setModal] = useState(false);
  
    const onChangeName = event => {
        setNome(event.target.value)
    }

    const save = () =>{
        axios
            .post('/api/series/create', { 
                nome
            })
            .then(res => {
                setNome('')
                toggle()
            })
    }

  const {
    btnName,
    className
  } = props;

  const toggle = () => setModal(!modal);
 
  return (
    <div>
      <Button color="primary" onClick={toggle}>{btnName}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Adicionar Série</ModalHeader>
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

export default NovaSerie;