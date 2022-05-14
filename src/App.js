import React , { useState } from 'react'
import './main.css'
import {Route , Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Rooms from './Components/Rooms'
import SingleRoom from './Components/SingleRoom'
import Error from './Components/Error'
export let Context;
const App=()=>{
    const [singleRoom , setSingleRoom] = useState(1);
    Context = React.createContext(setSingleRoom);
    return (
        <React.Fragment>
            <Context.Provider value={setSingleRoom}>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path="/rooms" element={<Rooms />}/>
                    <Route exact path="/rooms/single-room" element={<SingleRoom data={singleRoom}/>}/>
                    <Route path="/:qwe" element={<Error />}/>
                </Routes>
            </Context.Provider>
        </React.Fragment>
    );
}

export default App;
