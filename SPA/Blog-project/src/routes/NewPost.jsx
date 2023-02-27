import React,{useState} from 'react'
import './Newpost.css'
import blogFetch from '../axios/consfig'
import {useNavigate} from 'react-router-dom'

const NewPost = () => {

  const navigate = useNavigate()
  const [title,setTitle] = useState()
  const [body,setBody] = useState()

  const createPost = async (e) =>{
    e.preventDefault();

    const post = {title, body, userId:1 }

    await blogFetch.post('/posts',{
      body:post,

    });
    navigate('/')

  }

  return (
    <div className='new-post'> 
      <h2>Inserir novo Post </h2>
      <form onSubmit={(e) =>createPost(e)}>
        <div className='form-control'>
          <label htmlFor="title"> Título</label>
          <input type="text" name='title' placeholder='Digite o título' id='title' onChange={(e) => setTitle(e.target.value)}/>

        </div>
        <div className='form-control'>
          <label htmlFor="body"> Conteúdo</label>

          <textarea name="body" id="body" placeholder='Digite o conteudo' onChange={(e) => setBody(e.target.value)}/>
        </div>
        <input type="submit"  className='btn-submit ' value='Criar!'  />


      </form>
    </div>
  )
}

export default NewPost