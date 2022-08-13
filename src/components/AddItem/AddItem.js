import React, { Component } from "react";
import './additem.css'

class AddItem extends Component{
    state={
        name : '',
        age : ''
    }
    handleChange= (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }


    handleSubmit = (e)=>{
        e.preventDefault()
       if (e.target.name.value=== '') return false
       else {
        this.props.addItem(this.state)
        this.setState({
            name:'',
            age : ''

        })
       }
    }

    render(){
        return(
            <div className="addItem">
               <form  onSubmit={this.handleSubmit}>
                   <input className="text" type="text" placeholder="حط اسم المادة" id="name" onChange={this.handleChange} value={this.state.name}/>
                   <input className="number" type="number" placeholder="حط عدد الكتب" id="age" onChange={this.handleChange} value={this.state.age}/>
                    <input className="action" type="submit" value="ضيف البلوة    "/>
              </form>
            </div>
        )
    }

}

export default AddItem