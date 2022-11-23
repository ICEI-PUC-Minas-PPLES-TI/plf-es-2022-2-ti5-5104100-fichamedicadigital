import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { mensageria,mensageriaDelete } from '../slices/consultSlice'

const Message = () => {

    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.user)
    const notificacoes = useSelector((state) => state.consult.notificacoes)
    console.log(notificacoes)
    useEffect(() => {
        dispatch(mensageria(user.id))
    },[])

    const handleDelete = () => {
        dispatch(mensageriaDelete(notificacoes.idUsuario))
        setTimeout(function() {
            window.location.reload(1);
          }, 1000);
    }

  return (
    <>
    {notificacoes && notificacoes.id != null && 
        <div class="row alert alert-warning w-25 mt-2 ms-2 border-bottom" role="alert">
            <div className='col-9'>
            {notificacoes.descricao}
            </div>
            <div className='col-3'>
                <button className='btn' onClick={handleDelete}>X</button>
            </div>
        </div>
    }
    </>
  )
}

export default Message