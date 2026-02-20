const parent=document.getElementById('parent');
console.log(parent);
const root=ReactDOM.createRoot(parent);
 const h2=React.createElement("h2",{style:{color:'brown',backgroundColor:'cyan'}},"Welcome to React App");

//JSX
const name=<h2>Rahul Kumar</h2>
const branch=<h2>CS-B</h2>
const pic=<img></img>
const container=(
    <div style={{}}>
    {name}
    </div>
)
 root.render(container);