import React from "react";
import react from "react";
import css from "./App.css" 
import axios from "axios";
import Probs from "./probs.js"
 
 

 class App extends React.Component{
  constructor(){
    super();
    this.state = {
      Name : "",
      Age : "",
      ndata : [],
      editdata:[],
      _id:"",
      isEdit:false
    }
  }
//infochange
  infochange = event =>{
    const{name,value} = event.target;
    this.setState({
      [name]:value

    })
  }
 
    //create   
  create = event =>{
    event.preventDefault();
    if(!this.state.isEdit){
      var data = {
        isEdit:this.state.isEdit,
        Name: this.state.Name,
        Age: this.state.Age
      }
  //post
  var url = window.location.origin;
  axios.post( `${url}/persons/post`,data).then(res=>{
    console.log(res);
  })
  this.getall();
    }
    else{
       
      
      var data = {
        isEdit:this.state.isEdit,
        _id:this.state._id,
        Name: this.state.Name,
        Age: this.state.Age
      }
      axios.put("http://localhost:5000/persons/up/"+data._id,data).then(res=>{
    console.log()
    console.log(data._id);
    this.getall();
  })
      
    }
    
   
  }

//getall fuction
  getall(){
    var url = window.location.origin;
    let BASE_URL=`${url}/persons/get`
//     if(process.env.NODE_ENV==="production"){
// let BASE_URL = `${req.protocol}:/${req.get('host')}/persons/get`
//     }
    axios.get( BASE_URL).then(res=>{
    const  val =res.data;

    this.setState({
      ndata:val
    })
    console.log(val);  
    
  })

  }
  componentDidMount()
  {
this.getall();
  }
  
//update
  update = data =>{  
    console.log(data)
     this.setState({
      isEdit:true,
       Name:data.Name,
       Age:data.Age,
       _id:data._id
        
       
      })
      console.log(data._id);
       
  }
  //delete
  del = data =>{
  
    if(data!=null){
      console.log(data);
      axios.delete ("http://localhost:5000/persons/del/"+data._id,data).then(res=>{
     
        console.log(data._id);
        this.getall();
      })

    }
  }
  
  render()
  {
    var url = window.location.origin;
    return <div>
      <h1 className="App">hello react {url} babu test    biiiiiiiiiiiiii</h1>
      <h1 className="App">babu branch push branch</h1>
      
    <form autoComplete="off" onSubmit={this.create}  method="post"  >
           name:<input type="text"   onChange={this.infochange}
            name="Name"
            value={this.state.Name}
            />

            
           age:<input type="text"   onChange={this.infochange}
           name="Age"
           value={this.state.Age}
           />
          <button type="submit">{this.state.isEdit? 'update':'create'}</button>     
       </form>

       <form   encType="multipart/form-data" method="POst">
        <input type="file" name="myfile"></input>
        <button type="submit" value="ufv">upload</button>
       </form>

       <form action="/umf" encType="multipart/form-data" method="POst">
        <input type="file" name="myfiles" multiple></input>
        <button type="submit" value="umfv">upload</button>
       </form>


       <form action="/uphoto" encType="multipart/form-data" method="POst">
        <input type="file" name="myfile"></input>
        <button type="submit" value="uphoto">upload</button>
       </form>
        
       <h1>hello data{this.state.ndata.map(e=>
       <h2 >{"Name  :"}{e.Name}{"Age  :"}{e.Age}<button  onClick={event=>{this.update(e)}}>cliclk</button>,<button  onClick={event=>{this.del(e)}}>delete</button></h2>
        )}</h1>
        </div>
  }
 }


 export default App;