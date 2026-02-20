import React from 'react'
import './icard.css'
function ICard({data}) {
  return (
    <div className='container'>
    <img src={data.pic} height={100} width={200} style={{borderRadius:'50%'}} />  
   <h2>Name: {data.name}</h2>
   <h2>Roll:{data.roll}</h2>
   <h2>Branch:{data.branch}</h2>
   <h2>Section:{data.section}</h2>

    </div>
  )
}

export default ICard