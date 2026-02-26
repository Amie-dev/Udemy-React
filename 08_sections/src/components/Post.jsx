

import{useEffect} from 'react'
import { usePostStore } from '../store/postStore'

function Post() {
  const {posts,loading, error, fetchPost}=usePostStore()

  useEffect(()=>{
 fetchPost()
  },[fetchPost])

  if (loading) {
    return (
        <p>Loading....</p>
    )
  }
  if(error)return <p>{error}</p>
  return (
    <div>
        
        {
            posts.map((p)=>(
                <div key={p.id}>
                <li >{p.id}</li>
                <li >{p.title}</li></div>
            ))
        }
    </div>
  )
}

export default Post