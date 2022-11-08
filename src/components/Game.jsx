import {Alert, Container, Row} from 'react-bootstrap'
import NavbarComponent from './NavbarComponent';
import { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../App';
import { useEffect } from 'react';
import Logo from './Logo';
import gamelogo from "../assets/images/logoSplash.png";
import bgimg from "../assets/images/bgimg.png";
import Btn from "./Btn";

const Game = () => {
    const [provider,setProvider] = useState(null);
    const [toggle,setToggle,connected,setConnected,address,setAddress] = useContext(Context);
    const [price,setPrice]= useState("...");
    
    useEffect(()=>{
        console.log("wow from connected");
    },[connected]);
    
    function connectionCallback(provider,address){
        setProvider(provider);
        setAddress(address);
    }


    return(
        <div className="homediv">
            <img className="bgimg" src={bgimg}/>
            <NavbarComponent/>
           
            <Container className='homecontainer text'>
                <h1 className='pagebanner'>
                    
                    <Logo size={50} marginRight={10}/>
                         <div className='vline'/>P2E Game

                </h1>
            <img className='homelogo gamelogo' src={gamelogo}/>
            
            <Btn/>

            </Container>
            
        </div>
    );
}
export default Game;