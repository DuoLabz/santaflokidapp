import { Alert, Container, Row} from 'react-bootstrap'
import NavbarComponent from './NavbarComponent';
import {CgDanger} from 'react-icons/cg'
import {FaReact} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import Chart from 'apexcharts'
import Logo from './Logo';
import Stats1 from './Stats1';

const Statistics = () =>{
    return(
        <div className="homediv">
            <NavbarComponent/>
            <Container className='homecontainer text'>

                <h1 className='pagebanner'>
                    <Logo size={50} marginRight={10}/>
                     <div className='vline'/>Statistics
                </h1>

                <Stats1/>

            </Container>
            
        </div>
    );
}

export default Statistics;