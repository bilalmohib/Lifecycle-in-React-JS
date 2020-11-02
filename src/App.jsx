import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Child from "./Components/Child"
class App extends Component 
{
  constructor(){
    super()
    this.state={
      count:0,
      data:[] 
    }
    console.log("constructor")
  }
  // shouldComponentUpdate(){
  //   if(this.state.count<5){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  // }
  // getSnapshotBeforeUpdate(preProps,preState)
  // {
  //   console.log("getSnapshotBeforeUpdate",preState)
  //   return 10;
  // }
  //Any thing which will be returned in getSnapshotBeforeUpdate It will be availabe
  //in the third component of snapshot 
  // componentDidUpdate(preProps,preState,snapshot)
  // {
  //   console.log(snapshot)
  // }

  // static getDerivedStateFromProps(props,state){
  //   console.log("getDerivedStateFromProps===>",state)
  //   return null
  // }
  // componentDidMount(){
  // console.log("componentDidMount")

  // fetch('https://jsonplaceholder.typicode.com/todos')
  // .then(response => response.json())
  // .then(d => {
  //    //console.log("data==>",d)
  //    this.setState({
  //      data:d
  //    })
  // })
  // .catch(err=>console.log(err))
  
  // }
   
  render() {
    //ye yahan hargiz nahin kar sakte kiyon keh ye call hota rahe ga render ke bar bar call hone kki wajah se
    // this.setState({
    //   count:this.state.count+1
    // })
   // console.log("data==>",this.state.data)
    return (
      <div style={{textAlign:"center",fontSize:"50px"}}>
        {/* For componentDidMount */}
       {/* <h1>React Lifecycle</h1>
       {this.state.data.map((v,i)=>{
         return <h4 key={i}>{v.title}</h4>
       })} */}

        {/* For getDerivedStateFromProps */}
      {/* <h1 style={{textAlign:"center",fontSize:"90px"}}>{this.state.count}</h1> */}
      {this.state.count < 5 && <Child count={this.state.count}/>}
      <button style={{textAlign:"center",fontSize:"50px"}} onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
      <button style={{textAlign:"center",fontSize:"50px"}} onClick={()=>this.setState({count:this.state.count-1})}>Decrement</button>

      </div>
    )
  }
}

export default App;
