import { Container,Row,Col,Card,CardGroup } from "react-bootstrap";
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
import axios from 'axios';
import { useEffect } from "react";

const Stats = () => {

    useEffect(()=>{
        axio();
    })

    const [santaPrice,setSantaPrice]=useState("...");
    const [spookyPrice,setSpookyPrice]=useState("...");
    const [marvinPrice,setMarvinPrice]=useState("...");

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

         
    const axio = async () =>{

        var api = await (await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=spookyhalloweenfloki&vs_currencies=usd")).data.spookyhalloweenfloki["usd"];
        setSpookyPrice(api);

        var api1 = await (await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=santa-floki-v2&vs_currencies=usd")).data["santa-floki-v2"].usd;
        setSantaPrice( api1);

        var api2 = await (await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=flokimarvin&vs_currencies=usd")).data.flokimarvin.usd;
        setMarvinPrice(api2);
    }

    return(
        <Container style={{marginTop:'5px'}}>
            <Row>
                <Col xl>
                    <Card className="statscard1">
                        <Card.Title style={{fontSize:"30px",fontWeight:"bold",textAlign:"center",  fontFamily: "Aclonica", borderBottom:"2px solid",paddingBottom:"15px"}}>
                        <IconContext.Provider value={{size:"25px"}}>
                            <img src={spooky} style={{marginRight:"15px",height:"50px" , backgroundColor:"#1274c6", border:"2px solid" , borderRadius:"50%"}}/>
                            </IconContext.Provider>
                            Spooky Halloween Floki
                        </Card.Title>
                        <Card.Title style={{fontSize:"20px",  fontFamily:"sans-serif"}}>
                            Token Price
                        </Card.Title>
                        <Card.Text className="bold">
                            <IconContext.Provider value={{size:"25px"}}>
                            <IoPricetag style={{marginRight:"10px"}}/>
                            </IconContext.Provider>
                             {spookyPrice}
                        </Card.Text>
                        <Card.Title style={{fontSize:"20px"}}>
                            Market Cap
                        </Card.Title>
                        <Card.Text className="bold">
                            <IconContext.Provider value={{size:"25px"}}>
                            <AiFillDollarCircle style={{marginRight:"10px"}}/>                            
                            </IconContext.Provider>
                             $11.19K
                        </Card.Text>
                        <Card.Title style={{fontSize:"20px"}}>
                            Dividend Holders
                        </Card.Title>
                        <Card.Text className="bold">
                            <IconContext.Provider value={{size:"25px"}}>
                            <FaHandHoldingUsd style={{marginRight:"10px"}}/>                           
                             </IconContext.Provider>
                             NA
                        </Card.Text>
                    </Card>
                </Col>
                <Col xl>
                    <Card className="statscard1">
                    <Card.Title style={{fontSize:"30px",fontWeight:"bold",textAlign:"center",  fontFamily: "Aclonica", borderBottom:"2px solid",paddingBottom:"15px"}}>
                         <img src={logo} style={{marginRight:"10px",height:"50px", border:"2px solid" , borderRadius:"50%"}}/>
                        Santa Floki                        
                        </Card.Title>
                        <Card.Title style={{fontSize:"20px"}}>
                            Token Price
                        </Card.Title>
                        <Card.Text className="bold">
                            <IconContext.Provider value={{size:"25px"}}>
                            <IoPricetag style={{marginRight:"10px"}}/>
                            </IconContext.Provider>
                             {santaPrice}
                        </Card.Text>
                        <Card.Title style={{fontSize:"20px"}}>
                            Market Cap
                        </Card.Title>
                        <Card.Text className="bold">
                            <IconContext.Provider value={{size:"25px"}}>
                            <AiFillDollarCircle style={{marginRight:"10px"}}/>                           
                             </IconContext.Provider>
                             $57.19K
                        </Card.Text>
                        <Card.Title style={{fontSize:"20px"}}>
                            Dividend Holders
                        </Card.Title>
                        <Card.Text className="bold">
                            <IconContext.Provider value={{size:"25px"}}>
                            <FaHandHoldingUsd style={{marginRight:"10px"}}/>                            
                            </IconContext.Provider>
                             2900
                        </Card.Text>
                    </Card>
                </Col>
                <Col xl>
                    <Card className="statscard1">
                    <Card.Title style={{fontSize:"30px",fontWeight:"bold",textAlign:"center",  fontFamily: "Aclonica", borderBottom:"2px solid",paddingBottom:"15px"}}>
                    <img src={"https://i0.wp.com/www.flokimarvin.io/wp-content/uploads/2022/06/Floki-Marvin-Logo-Transparent-min.png?w=1500&ssl=1"} style={{marginRight:"15px",height:"50px", border:"2px solid" , borderRadius:"50%" , padding:"5px"}}/>
                          Floki Marvin
                        </Card.Title>
                        <Card.Title style={{fontSize:"20px"}}>
                            Token Price
                        </Card.Title>
                        <Card.Text className="bold">
                            <IconContext.Provider value={{size:"25px"}}>
                            <IoPricetag style={{marginRight:"10px"}}/>
                            </IconContext.Provider>
                             {marvinPrice}
                        </Card.Text>
                        <Card.Title style={{fontSize:"20px"}}>
                            Market Cap
                        </Card.Title>
                        <Card.Text className="bold">
                            <IconContext.Provider value={{size:"25px"}}>
                            <AiFillDollarCircle style={{marginRight:"10px"}}/>                            
                            </IconContext.Provider>
                             NA
                        </Card.Text>
                        <Card.Title style={{fontSize:"20px"}}>
                            Dividend Holders
                        </Card.Title>
                        <Card.Text className="bold">
                            <IconContext.Provider value={{size:"25px"}}>
                            <FaHandHoldingUsd style={{marginRight:"10px"}}/>                            
                            </IconContext.Provider>
                             920
                        </Card.Text>
                    </Card>
                </Col>

                
                </Row>
            
            </Container>
    );
}
export default Stats;
