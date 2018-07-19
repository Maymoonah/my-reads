import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Current from './Components/Current';
import WantTo from './Components/WantTo';
import Read from './Components/Read';
import Search from './Components/Search';
import * as BooksAPI from './BooksAPI';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      search: []
    }
  }
  componentDidMount() {
    BooksAPI.getAll()
    .then(response => {
      this.setState({books: response});
      console.log(this.state.books)
    })

    BooksAPI.search('tree').then(response => {
      this.setState({search: response}); 
      console.log(response);
    })

  }

  render() {

  const list = this.state.books;
    return (
      <div className="App">
        <Header />
        <Search />
        <Current book={list}/>
        <WantTo />
        <Read />
      </div>
    );
  }
}

export default App;
