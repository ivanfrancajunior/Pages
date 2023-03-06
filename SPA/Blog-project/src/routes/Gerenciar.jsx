import React,{useState, useEffect} from 'react'
import blogFetch from '../axios/consfig'
import './Gerenciar.css'
import { Link } from 'react-router-dom'



const Gerenciar = () => {

    const [posts, setPosts] = useState([])

  useEffect(()=>{
    const getPosts = async () =>{
      try {
        const res = await blogFetch("/posts")
  
        const data = res.data
  
        setPosts(data)
        console.log(data)
        
      } catch (error) {

        console.log(error)  
      } 
    }
    getPosts()

    },[])


  return (
    <div>
        <h1>Gerencair </h1>
      {posts.length === 0 ? <p>Carregando....</p>:(
        posts.map((post) =>(
          <div className='post' key={post.id}> 
          <h2>{post.title}</h2>
          <div>
          <Link to={`/posts/edit-post/${post.id}`} className='btn-edit'>Editar</Link> 
          <Link to={`/posts/delete-post/${post.id}`} className='btn-delete'>Deletar</Link> 
          </div>

        </div>
        ))
      )}  
    </div>
  )
}

export default Gerenciar