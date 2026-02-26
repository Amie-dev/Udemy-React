import { create } from "zustand";


export const usePostStore=create((set)=>({
    posts:[],
    loading:false,
    error:null,
    fetchPost:async()=>{
        set({loading:true,error:null})
        try {
            const res =await fetch("https://jsonplaceholder.typicode.com/posts")

            const data=await res.json()

            set({posts:data,loading:false})
        } catch (error) {
            set({error:error,loading:false})
        }
    }
}))