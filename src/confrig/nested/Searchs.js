import {React,useState} from 'react'

const Searchs = (props) => {
  const [select,setSelected] = useState('')
  let {data ,onGet} = props

    const setValue = (e)=>{
      onGet(select ,  e)
    }

  return (
    <div>
      <div>

      <input type="text" onChange={(e) => setValue(e.target.value)} />
      </div>
      <div>
        <select name="" id="" onChange={(e) =>setSelected(e.target.value) }>
          {data.map( (x,i) =>{
            return(
              <option value={x.name}>{x.name}</option>
            )
          })}
        </select>
      </div>

    </div>
  )
}

export default Searchs
