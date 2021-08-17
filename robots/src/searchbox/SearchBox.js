import React from 'react'

const SearchBox= ({ searchfield ,searchChange})=>{
    return (
        <div className="tc pa2">
             <input 
              className="pa3 ba b--green bg-lightest-blue"
              type='search' 
              placeholder="search your robot"
              onChange={searchChange}
              ></input>
        </div>
           )
}

export default SearchBox