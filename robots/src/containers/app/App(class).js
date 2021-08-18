import React, {Component} from 'react'
import CardList from '../../components/cardlist/CardList'
import SearchBox from '../../components/searchbox/SearchBox'
import Scroll from '../../components/scroll/scroll'
import ErrorBoundry from '../../components/error/ErrorBoundry.js'
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
        const {robots,searchfield}=this.state
        const filterRobots=robots.filter(robot =>{
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
        })

        if(!robots.length){
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
                        <ErrorBoundry>
                        <CardList robots={filterRobots}/>
                        </ErrorBoundry>
                    </Scroll>
            </div>
        
            )
    }
   
}

export default App;