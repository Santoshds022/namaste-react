{/* <div id="parent">
    <div id="child">
        <h1>hello</h1>
    </div>
</div> */}
// this is used to create nested element
const heading = React.createElement("h1",{id:"parent"},React.createElement('div',{id:"child"},React.createElement("h1",{},"hello react")))


// this is used  to create sibling 
const heading1 = React.createElement("h1",{id:"parent"},React.createElement('div',{id:"child"},[React.createElement("h1",{},"hello react"),React.createElement("h1",{},"hello World")]))
        


const root = ReactDOM.createRoot(document.getElementById("root"));
        
        
root.render(heading1);