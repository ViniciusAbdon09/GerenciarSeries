import React, { useState, useEffect } from 'react'
import axios from 'axios'

// importando componets
import NovoGenero from './NovoGenero'
import EditarGenero from './EditarGenero'

const Genero = () => {

    const [generos, setGeneros] = useState([])

    useEffect(() => {
        axios
            .get("/api/generos")
            .then(res => {
                setGeneros(res.data)
            })
    }, [generos])

    
    const deleteGenero = id => {
        axios
            .delete('/api/generos/'+id)
            .then(res => {
               const removeDaLista = generos.filter(item => item._id !==id)
               setGeneros(removeDaLista)
            })
      }

    const renderizaLinha = (item) => {
        return (
            <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.nome}</td>
                <td className="row">
                    <button className="btn btn-danger"  onClick={() => deleteGenero(item._id)}> Remover </button><p>&nbsp;</p>
                    <EditarGenero btnName="Editar" idItem={item._id} />
                </td>
            </tr>
        )
    }

    if (generos.length === 0) {
        return (
          <div className="container">
              <br />
            <h1> Gêneros </h1>
            <div> 
                <NovoGenero btnName="Adicionar genêro"/><br />
            </div>
            <div className="alert alert-warning" role="alert">
              Nenhum gênero cadastrado
            </div>
          </div>
        );
      }


    return(
        <div className="container">
            <br />
           <h1> Gêneros </h1>
            <div>
                <NovoGenero btnName="Adicionar genêro"/><br />
            </div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col"> ID </th> <th scope="col"> Nome </th>
                    <th scope="col"> Ações </th>
                </tr>
                </thead>
                <tbody> 
                    {generos.map(renderizaLinha)} 
                </tbody>
            </table>
        </div>
    )
}

export default Genero