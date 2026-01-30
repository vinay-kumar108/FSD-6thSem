
import ICard from './ICard.jsx'
function Gallery() {
    const student=[{
        image:"https://www.w3schools.com/howto/img_avatar.png",
        sname:"Vinay",
        sroll:"278978",
        sbranch:"CS",
        ssection:"A"
    },
    {
        image:"https://www.w3schools.com/howto/img_avatar.png",
        sname:"Rahul",
        sroll:"278979",
        sbranch:"CS",
        ssection:"B"
    },      
    {
        image:"https://www.w3schools.com/howto/img_avatar.png",
        sname:"Ramesh",
        sroll:"278980",
        sbranch:"CS",
        ssection:"C"
    },
    {
        image:"https://www.w3schools.com/howto/img_avatar.png",
        sname:"Suresh",
        sroll:"278981",
        sbranch:"CS",
        ssection:"D"
    }]
  return (
    <div>
        {/* <ICard sname="Rahul" roll="278979" sbranch="CS" ssection="B"/> */}
        {/* <ICard data={student}/></div> */}
    {student.map((ele)=>(
<ICard data={ele}/>
    ))
}

  </div>
    )}
export default Gallery;
