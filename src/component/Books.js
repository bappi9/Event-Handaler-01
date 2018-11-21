import React,{Component} from 'react'
import  Book from './Book'; 

class Books extends Component{
    
    render(){
        return(
            <div>
            {this.props.books.map(book=>{
             return(    
                      
                 <Book deleteHandeler={this.props.deleteHandeler} book ={ book }/>
                
                 )

            })}
        
        </div>
          
        )
    }
}

export default Books