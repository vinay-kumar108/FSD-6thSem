const parent=document.getElementById('parent');
// console.log(parent);
const root=ReactDOM.createRoot(parent);
// const h2=React.createElement("h2",{style:{color:'brown',backgroundColor:'cyan'}},"Welcome to React App");

// const li1=React.createElement("li",{},"Java");
// const li2=React.createElement("li",{},"Python");
// const li3=React.createElement("li",{},"React");
// const ul=React.createElement("ul",{style:{backgroundColor:'black',color:'white'}},li1,li2,li3);

// const pic=React.createElement('img',{src:'https://www.flexjobs.com/blog/wp-content/uploads/2022/06/07130847/How-to-Put-Your-Work-Samples-Online.jpg',style:{width:'200px', height:'200px',borderRadius:'50%'}});
// const myname=React.createElement("h1",{},"Vansh Tomar");
// const header=React.createElement("div",{style:{display:'flex', gap:"200px"}},pic,myname);

// const wrapper=React.createElement('div',{},h2,header,ul);


//JSX
const h2=<h2>Hello using JSX</h2>;
const li1=<li>React</li>;
const li2=<li>Java</li>;
const ul=<ul>{li1}{li2}</ul>
const container=(
    <div>
    {h2},
    {ul}

    </div>
)


root.render(container);