import { Container,Row,Col,Card,CardGroup, Button } from "react-bootstrap";
import { IconContext } from "react-icons/lib";
import { useContext, useState } from "react";
import spooky from "../assets/images/spookyhaloweenfloki.png";
import logo from '../assets/images/logo.png'
import santa from '../assets/images/santagif.gif';
import spookygif from '../assets/images/spookygif.gif';
import NFT, {Appstate} from './NFT';

const Nftbtn = () => {

    const[santaNft,setSantaNft,spookyNft,setSpookyNft] = useContext(Appstate);

    const [option, setOption] = useState({
        dataLabels:{enabled:false},
        grid:{show:false},
        tooltip:{enabled:false},
        chart:{toolbar:{show:false}},
        xaxis:{labels:{show:false},crosshairs:{show:false},axisBorder:{show:false},axisTicks:{show:false}},
        yaxis:{labels:{show:false}},
        fill:{colors:['#fe0000']},
        stroke:{colors:['#fe0000']}
     })

    return(
        <Container style={{marginTop:'5px'}}>
            <Row>

                <Col xl>
                    <Card className="statscard1">
                        <Card.Title style={{fontSize:"20px",fontWeight:"bold",textAlign:"center",  fontFamily: "Aclonica", borderBottom:"2px solid",paddingBottom:"15px"}}>
                        <IconContext.Provider value={{size:"25px"}}>
                            <img src={spooky} style={{marginRight:"10px",height:"50px" , backgroundColor:"#1274c6",borderRadius:"100%"}}/>
                            </IconContext.Provider>
                            Spooky Halloween Floki
                        </Card.Title>
                        <Card.Text style={{textAlign:"center" , marginTop:"10px"}}>
                        <img style={{width:"200px" , borderRadius:"10%"}} src={spookygif}/>
                        </Card.Text>
                        <Card.Text style={{fontSize:"20px" , textAlign:"center" , marginTop:"10px"}}>
                            <button className="btn btn-warning" onClick={()=>{setSpookyNft(true);setSantaNft(false)}} >NFTs Collection!</button>
                        </Card.Text>
                    </Card>
                </Col>

                <Col xl>
                    <Card className="statscard1">
                    <Card.Title style={{fontSize:"20px",fontWeight:"bold",textAlign:"center",  fontFamily: "Aclonica", borderBottom:"2px solid",paddingBottom:"6px"}}>
                         <img src={logo} style={{marginRight:"10px",height:"60px"}}/>
                        Santa Floki                        
                        </Card.Title>
                        <Card.Text style={{textAlign:"center" , marginTop:"10px"}}>
                        <img style={{width:"167px" , borderRadius:"10%"}} src={santa}/>
                        </Card.Text>
                        <Card.Text style={{fontSize:"20px" , textAlign:"center" , marginTop:"10px"}}>
                            {/* <button className="btn btn-warning" onClick={console.log=()=>{("hello working")}}  style={{backgroundColor:"yello"}}>NFTs Collection!</button> */}
                            <button className="btn btn-warning" onClick={()=>{setSantaNft(true);setSpookyNft(false)}}  style={{backgroundColor:"yello"}}>NFTs Collection!</button>

                        </Card.Text>

                    </Card>
                </Col>

                </Row>
            
            </Container>
    );
}
export default Nftbtn;