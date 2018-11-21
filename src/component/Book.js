import React,{Component  } from "react";
 
class Book extends Component{
    deletHandeler=()=>{
        alert('delete Sucessfull')
    }
    render(){

        return(
            <li className="list-group-item d-flex">
               <p>{this.props.book.name}</p>
               <span className='ml-auto'>{this.props.book.price}</span>
                <div className='mx-4'>
                <span><i onClick={()=>this.props.deleteHandeler(this.props.book.id)} className="fa fa-trash"></i></span>
                </div>
               
               
            </li>
        )
    }
}

export default Book 