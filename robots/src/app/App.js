import React, {Component} from 'react'
import CardList from '../cardlist/CardList'
import SearchBox from '../searchbox/SearchBox'
import Scroll from '../scroll/scroll'
import './App.css'

class App extends Component{

    constructor(){
        super()
        this.state={
            robots:[],
            searchfield: ''
        }
       
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.json())
        .then((users)=>{
            this.setState({
                  robots:users
             })
        })

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

        if(this.state.robots.length===0){
            return(
                <div className="tc">
                    <h1 className="f2">Robot React-App</h1>
                    <p className="f2"> Loading...</p>
            </div>
            )
        }

        return(
            <div className="tc">
                <h1 className="f2">Robot React-App</h1>

                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                    <CardList robots={filterRobots}/>
                    </Scroll>
            </div>
        
            )
    }
   
}

export default App;