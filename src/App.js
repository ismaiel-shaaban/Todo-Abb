import React , { Component } from "react";
import Todoitems from "./components/TodoItem/TodoItem";
import AddItem from "./components/AddItem/AddItem";

class App extends Component{
  state ={
    items : [
     
    ]
  }


  addItem=(item) =>{
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState(items)
  }

  deleteItem = (id) =>{

    let items = this.state.items.filter(item=>{
      return item.id !== id
    })
    this.setState({items})
  }
  

  render(){

   return(
    <div className="app container">
        <h1 className="text-center">البلاوي اللي ورانا  </h1>
        <Todoitems items = {this.state.items} deleteItem={this.deleteItem}/>
        <AddItem addItem={this.addItem}/>
        
    </div>
   )
  }
}

export default App;
