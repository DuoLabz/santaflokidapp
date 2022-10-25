import { Alert, Container, Row} from 'react-bootstrap'
import NavbarComponent from './NavbarComponent';
import {CgDanger} from 'react-icons/cg'
import {FaReact} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import Chart from 'apexcharts'
import Logo from './Logo';

const NFT = () =>{
    return(
        <div className="homediv">
            <NavbarComponent/>
            <Container className='homecontainer text'>

                <h1 className='pagebanner'>
                    
                <Logo size={50} marginRight={10}/>
                     <div className='vline'/>NFT
                </h1>

                <Alert variant='danger' style={{fontSize:'15px',height:"fit-content"}}>
                
                        <div>
                            <CgDanger style={{display:'inline-block ',marginRight:'10px',fontSize:'25px', paddingBottom:'2px',color:'white'}}/>
                            <div style={{display:'inline-block',color:'white'}}>Coming soon</div>
                            <div style={{marginLeft:'35px'}}>NFT integrations will be coming soon. Track your NFTs and explore all of the beautiful designs inside the website! </div>
                    </div>
                </Alert>

            </Container>
            
        </div>
    );
}

export default NFT;