import {Alert, Container, Row} from 'react-bootstrap'
import NavbarComponent from './NavbarComponent';
import { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../App';
import { useEffect } from 'react';
import Logo from './Logo';
import mainlogo from "../assets/images/mainlogo.png";
import bannerIce from "../assets/images/snow/ice 2.png";
import bgimg from "../assets/images/bgimg.png";
import Btn from "./Btn";

const Home = () => {
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
            <NavbarComponent callback={connectionCallback}/>
           
            <Container className='homecontainer text'>
                <h1 className='pagebanner outline text-nowrap'>
                     <img className='bannerIce' src={bannerIce}/>
                    {/* <IconContext.Provider value={{size:"50px"}}> */}
                    <Logo size={50}/>
                    {/* </IconContext.Provider> */}
                     <div  className='vline' style={{marginLeft:'10px'}}  />
                     Welcome to the SantaFloki Ecosystem
                </h1>
            <img className='homelogo' src={mainlogo}/>
            
            <Btn/>

            </Container>
            
        </div>
    );
}
export default Home;