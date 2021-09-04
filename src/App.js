
import './App.css';
import React, {Component} from 'react';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {

  constructor (){
    super();
    this.state = {
      monsters: [],
      searchField :''
    };

    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(test => this.setState({monsters:test}) );
    //.then(test => console.log(test));
    
  }

  handleChange =(e) =>{
    this.setState({searchField: e.target.value})
  }

  render(){
    const {monsters, searchField} = this.state;
    //const monsters = this.state.monsters;
    //const searchField = this.state.searchField;

    const filterMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())

    )

    return (
      
          <div className='App'>
            <h1>Monster Rolodex</h1>
            <SearchBox
              placeholder = 'search monsters'
              handleChange = {this.handleChange}
            />
            <CardList monsters ={filterMonsters} />
          </div>
        );
      
  }
  
}

export default App;
