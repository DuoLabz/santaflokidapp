import { Alert, Container, Row} from 'react-bootstrap'
import NavbarComponent from './NavbarComponent';
import {CgDanger} from 'react-icons/cg'
import {FaReact} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import Chart from 'apexcharts'
import Logo from './Logo';
import StakingCards from './Stakingcards';
import bgimg from "../assets/images/bgimg.png";

const Staking = () =>{
    return(
        <div className="homediv">
                        <img className="bgimg" src={bgimg}/>
            <NavbarComponent/>
            <Container className='homecontainer text'>

                <h1 className='pagebanner'>
                    <Logo size={50} marginRight={10}/>
                     <div className='vline'/>Staking
                </h1>

                <StakingCards/>

            </Container>
            
        </div>
    );
}

export default Staking;
