import React from "react";
import './TodoItem.css'

const Todoitems =  (props) => {
    const {items,deleteItem} = props ;
    let length = items.length ;
    const ListItems =length ? (
        items.map( item=>{
            return(
                <div key={item.id}>
                    <span className="name"> {item.name}</span>
                    <span className="age"> {item.age}</span>
                    <span className="action icon" onClick={() =>deleteItem(item.id)}> &times;</span>
                </div>
            )
        })
    ): (<p>خلاص كدا معندناش</p>)
    

    
    return (
        <div className="ListItem">
            <div>
                <span className="name title">المادة</span>
                <span className="age title">عدد الكتب</span>
                <span className="action title">Action</span>
            </div>
            {ListItems}
        </div>
    )
}

export default Todoitems