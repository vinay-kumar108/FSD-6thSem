// console.log("Hello World");
// const div=document.getElementsByTagName('div');

// div[0].innerText="ABES Engineering College";
// div[0].style.color='brown';
// div[0].style.backgroundColor='cyan'
// console.log(div);

const div=document.getElementsByClassName('container');

// div[0].innerHTML='<h2 style=color:red>Hii, I m using DOM</h2>';
// console.dir(div);


const button=document.getElementById('btn');
console.log(button);
const laoding=document.getElementById('disp');
function displayData(){
laoding.innerHTML='<h2>Data is loading....</h2>';
    //console.log("hiii...inside displaydata");
    setTimeout(()=>{
const h2=document.createElement('h2');
h2.innerText="CS B Student";
h2.style.backgroundColor='cadetblue';
//console.log(h2);
div[0].appendChild(h2);

const img=document.createElement('img');
img.src='https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png';
img.setAttribute('height',200);
img.setAttribute('width',200);
console.log(img);
div[0].appendChild(img);
laoding.innerHTML='';

    },2000);
    

}

button.addEventListener('click',displayData);