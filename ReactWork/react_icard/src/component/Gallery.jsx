import React from 'react'
import ICard from './ICard'

function Gallery() {
    const student=[
      {
        pic:"https://images.rawpixel.com/image_png_social_portrait/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTEyL3Jhd3BpeGVsX29mZmljZV8zNl9waG90b19vZl95b3VuZ19pbmRpYW5fZ2lybF9ob2xkaW5nX3N0dWRlbnRfYl81ZmVkNmMzMy01ZWU0LTRjY2MtYmNiZS1kZWVlOWQyNTBmMWYtbTRzODZ3b2gucG5n.png",
        name:"Amit Tomer",
        roll:"3973859",
        branch:"CS",
        section:"B"
    },
    {    pic:"url",
        name:"Ankit",
        roll:"786868",
        branch:"CS",
        section:"B"
    },
      {
        pic:"url",
        name:"Pankaj",
        roll:"09797979",
        branch:"CS",
        section:"B"
    },
      { pic:"url",
        name:"Raj Singh",
        roll:"0897977",
        branch:"CS",
        section:"B"
    },
  
  ]
  return (
    <div>
  {/* <ICard sname="Rahul" sroll="34675" sbranch="CS" ssection="B" /> */}
   {/* {JSON.stringify(student)} */}
   {/* <ICard data={student[2]} /> */}

   {
    student.map((ele)=>(
    <ICard data={ele} />
    ))
   }
    

     {/* <ICard /> */}

    </div>
  )
}

export default Gallery