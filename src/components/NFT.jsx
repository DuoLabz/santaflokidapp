import { Alert, Container, Row} from 'react-bootstrap'
import NavbarComponent from './NavbarComponent';
import Logo from './Logo';
import bgimg from "../assets/images/bgimg.png";
import Nftbtn from './Nftbtn';
import { createContext, useState } from 'react';
import SpookyNftCards from './SpookyNftCards';
import SantaNftCards from './SantaNftCards';
import {IoChevronBackCircleSharp} from 'react-icons/io5';

const Appstate = createContext();

const NFT = () =>{

    const[santaNft,setSantaNft]=useState(false);
    const[spookyNft,setSpookyNft]=useState(false);
    console.log(santaNft);
    console.log(spookyNft);

    return(
        <Appstate.Provider value={[santaNft,setSantaNft,spookyNft,setSpookyNft]}>
        <div className="homediv">
        <img className="bgimg" src={bgimg}/>
            <NavbarComponent/>
            <Container className='homecontainer text'>

                <h1 className='pagebanner'>
                    
                <Logo size={50} marginRight={10}/>
                     <div className='vline'/>NFT
                </h1>

                {( santaNft == false && spookyNft == false )?
                <></>
                :
                <IoChevronBackCircleSharp className='backBtn' onClick={()=>{setSantaNft(false);setSpookyNft(false)}}></IoChevronBackCircleSharp>
                }


                {( santaNft == false && spookyNft == false )?
                <Nftbtn/>
                :
                <>
                {(spookyNft)?
                    <SpookyNftCards/>
                    :
                    <>
                {(santaNft)?
                    <SantaNftCards/>
                    :
                    <></>
                }
                </>
                    }
                </>
                }

            </Container>
            
        </div>
            </Appstate.Provider>
    );
}

export default NFT;
export {Appstate};