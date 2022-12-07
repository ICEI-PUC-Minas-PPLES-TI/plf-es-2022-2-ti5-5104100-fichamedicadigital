import React from 'react'
import './Message.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { mensageria, mensageriaDelete } from '../slices/consultSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Message = () => {

    const dispatch = useDispatch()
    
    const user = useSelector((state) => state.auth.user)
    const notificacoes = useSelector((state) => state.consult.notificacoes)
    const customId = "custom-id-yes";

    useEffect(() => {
        dispatch(mensageria(user.id))
    }, [])

    const notify = (notificacao) => {
        toast(`${notificacao}`, {
          toastId: customId
        });
      }
    return (
        <>
            {notificacoes && notificacoes.id != null && (
                <div>
                    {notify(notificacoes.descricao)}
                    <ToastContainer/>
                </div>
            )
            }
        </>
    )
}

export default Message