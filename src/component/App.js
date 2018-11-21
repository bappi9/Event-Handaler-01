import React, { Component } from 'react';
 import Books from './Books'

class App extends Component {
  state={
    books:[{
      name:'JavaScript',
      author: 'Kyle Simson',
      price:120,
      id:1
    },
  {
    name:'C#',
      author: 'Mosh Hamadini',
      price:120,
      id:2
  },
{
  name: 'python',
  author : 'python',
  price:120,
  id:3
}]
  }

  deleteHandeler=(id)=>{
    
    let nebook=this.state.books.filter(book=>{
      return (book.id!=id)
    })
    this.setState({
     books: nebook
    } 
    )
}
  render() {
    return (
      <div className="App">
         
        <Books deleteHandeler={this.deleteHandeler.bind(this)}  books={this.state.books}/>
      </div>
    );
  }
}

export default App;
