
import React, { useEffect, useState } from 'react'
import Posts from '../../Api/BaseMethApi'
import SmGrid from '../../comp/SmGrid'


const Post = () => {
    const [dataSource,setDataSource] = useState([])
    const [cols,setCol] = useState([
        {
             name:"Full Name" ,
             key:"name"
        },
        {
            name:"Email" ,
            key:"email"
       },
        {
        name:"Address" ,
        key:"body"
        },
        
    ])

    const getData = () =>{
        Posts("comments")
        .then( (succ) => {
            setDataSource([...succ.data])
           
        } )
        .catch((err) => {
            console.log(err)
        })

    }

    useEffect( () =>{
        getData()
    },[])
  return (
    <div>
   <h1 >i m post</h1>
    <SmGrid dataSource={dataSource} cols={cols} />
    </div>
  )
}

export default Post
