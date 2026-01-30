
import './icard.css'
export default function ICard(props) {
  return (
    <div className="container" >
        <h2> Name: {props.sname} </h2>
        <h2>Roll:{props.roll}</h2>
        <h2>Branch: {props.sbranch}</h2>
        <h2>Section: {props.ssection}</h2>
    </div>
  )
}
