import React, {Component} from 'react'
import CardList from '../cardlist/CardList'
import SearchBox from '../searchbox/SearchBox'
import {robots} from '../robots';

import './App.css'

class App extends Component{

    constructor(){
        super()
        this.state={
            robots:robots,
            searchfield: ''
        }
    }

    onSearchChange=(event)=>{
        this.setState({
            searchfield:event.target.value
        })
        
    }

    render(){
        const filterRobots=this.state.robots.filter(robots =>{
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })

        return(
            <div className="tc">
                <h1 className="f2">Robot React-App</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filterRobots}/>
            </div>
        
            )
    }
   
}

export default App;