import React, {useState,useEffect} from 'react'
import CardList from '../../components/cardlist/CardList'
import SearchBox from '../../components/searchbox/SearchBox'
import Scroll from '../../components/scroll/scroll'
import ErrorBoundry from '../../components/error/ErrorBoundry.js'
import './App.css'

function App(){

    const [robots,setRobots]=useState([])
    const [searchfield,setSearchfield]=useState('')

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.json())
        .then((users)=>{
              setRobots(users)
         
        },[])
    },[])

   
    const onSearchChange=(event)=>{
        setSearchfield(event.target.value)
    }

     const filterRobots=robots.filter(robot =>{
        return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
    })


        return (!robots.length)?(
                <div className="tc">
                    <h1 className="f2">Robot React-App</h1>
                    <p className="f2"> Loading...</p>
            </div>
            ):
            (
            <div className="tc">
                <h1 className="f2">Robot React-App</h1>

                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                        <CardList robots={filterRobots}/>
                        </ErrorBoundry>
                    </Scroll>
            </div>
        
            )
 }
   


export default App;