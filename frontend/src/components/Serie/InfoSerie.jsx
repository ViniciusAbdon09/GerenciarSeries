import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom'
import { Jumbotron, Button, Badge } from 'reactstrap'

const InfoSerie = ({match}) => {
    const [form, setForm] = useState({
        nome: ''
    })

    const [success, setSuccess] = useState(false)
    const [editar, setEditar] = useState(false)
    const [generos, setGenero] = useState([])
    const [serie, setSerie] = useState({})
    const [genreId, setGenreId] = useState('')

    

    useEffect(() => {
            axios
            .get('/api/series/' + match.params.id)
            .then(resp => {
                setSerie(resp.data)
                setForm(resp.data)
            })
    }, [match.params.id])

    useEffect(() => {
        axios
            .get("/api/generos")
            .then(resp => {
                setGenero(resp.data)
                const genres = resp.data
                const encontrado = genres.filter(value => serie.genre === value.name)
                if(encontrado) {
                    setGenreId(encontrado.id)
                }
            })
    }, [serie])

   
    const onChange = field => event => {
        setForm({
            ...form,
            [field] : event.target.value
         })
     }

    const seleciona = value => () => {
        setForm({
            ...form,
            status: value
        })
    }


    const edit = () => {
        setEditar(!editar)
    }

    const save = () => {
        axios.put('/api/series/' + match.params.id, {
            ...form,
            genre_id: genreId
        })
        .then(res => {
            setSuccess(true)
        })
    }


   const nomeGenero = generos.filter(genre => genre._id === serie.genero_id).map(genre => genre.nome)
    console.log("ARRAY CONTENDO O NOME DO GENero", nomeGenero )


    if(success){ 
        return <Redirect to="/series" />
    }
  return (
    <div>
        <header>
            <div className="h-100" style={{background: 'rgba(0,0,0,0.7)', color: 'black'}}>
                <div className="container h-100">
                     <Jumbotron>
                        <h1 className="display-3">{serie.nome}</h1>
                        <p> 
                            {
                                serie.status === 'Assistido' &&
                                <h3>Status: <Badge color="success">{serie.status}</Badge></h3>
                            }

                            {
                                serie.status === 'Assistindo' &&
                                <h3>Status: <Badge color="warning">{serie.status}</Badge></h3>
                            }

                            {
                                serie.status === 'Para_assistir' &&
                                <h3>Status: <Badge color="primary">{serie.status}</Badge></h3>
                            }
                        </p>
                        <p className="lead">Genêro: {nomeGenero}</p>
                        <p className="lead">Sua avaliação pessoal da serie</p>
                        <p>Nota: {serie.avaliacao}</p>
                        <hr className="my-2" />
                        <p>Lembrete: {serie.lembrete}.</p>
                        <p className="lead">
                       
                            {
                                editar === false &&
                                <Button color="primary" onClick={edit} >Editar</Button>
                            }

                        </p>
                    </Jumbotron>
                </div>
            </div>
        </header>
        <br />
        <div className="container">
       {
        editar === true &&
        <div>
            <h3>Informações da série</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nome</label>
                    <input type="text" value={form.nome} onChange={onChange('nome')} className="form-control" id="nome" />
                </div>
                <div className="mb-3">
                    <label htmlFor="comments" className="form-label">Lembrete</label>
                    <input type="text" value={form.lembrete} onChange={onChange('lembrete')} className="form-control" id="lembrete"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="avaliacao" className="form-label">Avaliação</label>
                    <input type="number" max="5" min="0" value={form.avaliacao} onChange={onChange('avaliacao')} className="form-control" id="avaliacao"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="name">Genêro</label>
                    <select className="form-control" onChange={onChange('genero_id')} value={form.genero_id} id="genero_id">
                        {generos.map( genre => <option key={genre._id} value={genre._id} >{genre.nome}</option>)}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="name">Status</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="status" id="assistido" value="Assistido" checked={form.status === 'Assistido'} onChange={seleciona('Assistido')}/>
                        <label className="form-check-label" htmlFor="assistido" >
                            Assistido
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="status" id="assistindo" value="Assistindo" checked={form.status === 'Assistindo'} onChange={seleciona('Assistindo')}/>
                        <label className="form-check-label" htmlFor="assistindo" >
                            Assistindo
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="status" id="paraAssistir" value="Para_assistir" checked={form.status === 'Para_assistir'} onChange={seleciona('Para_assistir')}/>
                        <label className="form-check-label" htmlFor="paraAssistir">
                            Para Assistir
                        </label>
                    </div>  
                </div>
                <br />
                <button type="button" onClick={save} className="btn btn-primary">Salvar</button>{' '}
                <button onClick={edit} className="btn btn-danger">Cancelar edição</button>
            </form>    
           
        </div>     
       }  
        </div>
     <br/>
    </div>
  );
};

export default InfoSerie;
