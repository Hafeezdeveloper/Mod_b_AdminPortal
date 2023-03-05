import { Box } from '@mui/system'
import {React,useState} from 'react'
import Searchs from '../confrig/nested/Searchs'

const SmGrid = (props) => {
 const [abc,setAbc] = useState('')
    let {dataSource ,cols} = props
    
  return (
    <div>
            <Box>
                <Searchs 
                    onGet={ (a,b) => {
                        if(a === "Full Name"){
                            setAbc(b)
                        }else{
                            setAbc(b)
                        }
                    }}
                data={[
                    {
                    name : 'Full Name',
                    },
                    {
                    name : 'email',
                    },
                ]}  />
            </Box>
        <Box>
      {dataSource && Array.isArray(dataSource) && (
          <table  className='table '>
            <thead>
                <tr>
                {cols.map((x,i) =>{
                    return(
                        <th>{x.name}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                    {dataSource.filter( (val,index) =>{
                            if(abc == ""){
                                return val
                            }else if (abc === "email") {
                                return val.name.toLowerCase().includes(abc.toLowerCase())
                            }
                            else{
                                return val.email.toLowerCase().includes(abc.toLowerCase())
                            }
                    }).map( (x,ind) =>(
                        <tr>
                     

                        {cols.map((itm,i)=>(
                            <td key={i}>{x[itm.key]}</td>
                            ))}
                            
                </tr>
                    )
                    )}
            </tbody>
        </table>
      ) }
      </Box>
    </div>
  )
}

export default SmGrid
