import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// importando componets
import NovaSerie from './NovaSerie'
// import InfoSerie from './InfoSerie'

const Serie = () => {

    const [series, setSeries] = useState([])

    useEffect(() => {
        axios
            .get("/api/series")
            .then(res => {
                setSeries(res.data)
            })
    }, [series])

    
    const deleteSerie = id => {
        axios
            .delete('/api/series/'+id)
            .then(res => {
               const removeDaLista = series.filter(item => item._id !==id)
               setSeries(removeDaLista)
            })
      }

    const renderizaLinha = (item) => {
        return (
            <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.nome}</td>
                <td className="row">
                    <button className="btn btn-danger"  onClick={() => deleteSerie(item._id)}> Remover </button><p>&nbsp;</p>
                    {/* <EditarGenero btnName="Editar" idItem={item._id} /> */}
                    <Link className="btn btn-info" to={"/series/" + item._id}> Informações </Link>
                    
                </td>
            </tr>
        )
    }

    if (series.length === 0) {
        return (
          <div className="container">
              <br />
            <h1> Séries </h1>
            <div> 
                <NovaSerie btnName="Adicionar série"/><br />
            </div>
            <div className="alert alert-warning" role="alert">
              Nenhuma Série cadastrada
            </div>
          </div>
        );
      }


    return(
        <div className="container">
            <br />
           <h1> Série </h1>
            <div>
                <NovaSerie btnName="Adicionar série"/><br />
            </div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col"> ID </th> <th scope="col"> Nome </th>
                    <th scope="col"> Ações </th>
                </tr>
                </thead>
                <tbody> 
                    {series.map(renderizaLinha)} 
                </tbody>
            </table>
        </div>
    )
}

export default Serie