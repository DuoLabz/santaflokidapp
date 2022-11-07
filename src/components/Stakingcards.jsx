import { Container,Row,Col,Card,CardGroup, Button } from "react-bootstrap";
import {IoPricetag,IoStatsChart,IoRocketSharp} from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import {FaHandHoldingUsd,FaMoneyBill} from 'react-icons/fa';
import { useState } from "react";
import {AiFillDollarCircle} from 'react-icons/ai';
import statsIce1 from "../assets/images/snow/ice 1.png";
import statsIce2 from "../assets/images/snow/ice 2.png";
import statsIce3 from "../assets/images/snow/ice 3.png";
import spooky from "../assets/images/spookyhaloweenfloki.png";
import logo from '../assets/images/logo.png'
import santa from '../assets/images/santagif.gif';
import spookygif from '../assets/images/spookygif.gif';

const StakingCards = () => {

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
                            <Button className="btn btn-warning" href="https://spookyhalloweenfloki.com/staking/" target="_blank" style={{backgroundColor:"yello"}}>Stake NFTs!</Button>
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
                            <Button className="btn btn-warning" href="https://santafloki.com/staking/" target="_blank" style={{backgroundColor:"yello"}}>Stake NFTs!</Button>
                        </Card.Text>
                    </Card>
                </Col>

                <Col xl>
                    <Card className="statscard1">
                    <Card.Title style={{fontSize:"20px",fontWeight:"bold",textAlign:"center",  fontFamily: "Aclonica", borderBottom:"2px solid",paddingBottom:"15px"}}>
                    <img src={"https://i0.wp.com/www.flokimarvin.io/wp-content/uploads/2022/06/FLOKI-MARVIN-18-min.png?w=1080&ssl=1"} style={{marginRight:"10px",height:"50px"}}/>
                          Floki Marvin
                        </Card.Title>
                        <Card.Text style={{textAlign:"center" , marginTop:"10px"}}>
                        <img className="spiner" style={{width:"200px"}} src={"https://i0.wp.com/www.flokimarvin.io/wp-content/uploads/2022/06/Floki-Marvin-Logo-Transparent-min.png?w=1500&ssl=1"}/>
                        </Card.Text>
                        <Card.Text style={{fontSize:"20px" , textAlign:"center" , marginTop:"10px"}}>
                            <Button className="btn btn-warning" href="https://staking.flokimarvin.io/" target="_blank" style={{backgroundColor:"yello"}}>Stake Tokens!</Button>
                        </Card.Text>
                    </Card>
                </Col>

                </Row>
            
            </Container>
    );
}
export default StakingCards;