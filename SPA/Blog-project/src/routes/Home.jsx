import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import blogFetch from '../axios/consfig'
import './Home.css'

const Home = () => {

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
    <div className='home'>
      <h1>Últimos Posts  🚀</h1>
      {posts.length === 0 ? <p>Carregando....</p>:(
        posts.map((post) =>(
          <div className='post' key={post.id}> 
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link to={`/posts/${post.id}`} className='btn'>Ler mais</Link> 
        
        
        </div>
        ))
      )}  
    </div>
  )
}

export default Home