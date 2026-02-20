import React, { useEffect, useState } from 'react'

function Dashboard() {
  const[data,setData]=useState([]);
  const[cart,setCart]=useState([]);
 
  useEffect(()=>{
           async function fetchData(){
                   const serverresponse=await fetch('https://fakestoreapi.com/products');
                   const jsonResponse=await serverresponse.json();
                   console.log(jsonResponse)
                   setData(jsonResponse);
           }
    
         fetchData();
  },[])
 
function shoppingCart(ele){
setCart(data=>[...data,ele])
alert("Item added in cart");
// alert(cart.length);
  //alert(ele.title);
}


  return (
    <div>
      <div>
        {
          cart.length===0?(<h4>Cart is empty</h4>):
          (
         
          cart.map((ele)=>(
             <h3 style={{backgroundColor:'cayn'}}>{ele.title}</h3>
          ))
         
          )
        }
      </div>

      {
        data.length===0?(<h2>Data could not fetch</h2>):(
          <div>
          {
            data.map((ele)=>(
            <div style={{ height:'300px', width:'300px'}}>
              <img src={ele.image} height={100} width={100} />
              <h3>{ele.title}</h3>

              <button onClick={()=>shoppingCart(ele)}>Add to Cart</button>
            </div>
            ))
          }
          </div>
        )
      }
     {/* {
      JSON.stringify(data)
     } */}
    </div>
  )
}


export default Dashboard