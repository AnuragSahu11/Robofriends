import React, { useEffect, useState } from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import './App.css'
import scroll from './scroll'


function App(){
    const [robot,setRobot] = useState([])
    const [searchfield, setSearchfield] = useState('')

    function onSearchChange(e){
        setSearchfield(e.target.value)
        
        
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(json => {
                setRobot(json)
                

            })
    },[])
    

    
    const searchText = robot.filter(bots => {
        return(bots.name.toLowerCase().includes(searchfield.toLowerCase()))
    })
   
    return(
        <div className='flex flex-column'>
            <div className='tc'>
            <h1 className='tc f1' >ROBOFRIENDS</h1>
            <SearchBox searchChange = {onSearchChange} />
            </div>
            
            <CardList className=' tc' robot={searchText} />

        </div>
    )
}
export default App