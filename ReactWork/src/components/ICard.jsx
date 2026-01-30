
import './icard.css'
export default function ICard({data}) {
  return (
    <div className="container" >
        <img src={data.image} height={200} width={100} style={{borderRadius:"50%"}} />
        <h2> Name: {data.sname} </h2>
        <h2>Roll:{data.sroll}</h2>
        <h2>Branch: {data.sbranch}</h2>
        <h2>Section: {data.ssection}</h2>
    </div>
  )
}
