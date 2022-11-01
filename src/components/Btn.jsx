import { Container,Row,Col,Card,CardGroup } from "react-bootstrap";
import {IoPricetagOutline} from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import {FaHandHoldingUsd} from 'react-icons/fa'
import Chart from 'react-apexcharts'
import { useState } from "react";
import {FaEthereum,FaBtc} from 'react-icons/fa'
import statsIce1 from "../assets/images/snow/ice 1.png";
import statsIce2 from "../assets/images/snow/ice 2.png";
import statsIce3 from "../assets/images/snow/ice 3.png";
import playstore from "../assets/images/Playstore.png";
import appstore from "../assets/images/Appstore.png";

const Btn = () => {

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
        <Container style={{marginTop:'5px' , textAlign:"center" , justifyItems:"center", justifyContent:"center" , display:"flex"}}>
            <Row>
                <Col xl>
                <a href={"https://play.google.com/store/apps/details?id=com.santa.floki.rush&hl=en&gl=US"} target="_blank">
                    <img className="homebtn" style={{height:"80px",width:"255px"}} src={playstore}/>
                    </a>
                </Col>
                <Col xl>
                    <a href={"https://apps.apple.com/us/app/santa-floki-rush/id1614053788"} target="_blank">
                    <img className="homebtn" style={{height:"80px",width:"255px"}} src={appstore}/>
                    </a>
                </Col>
                </Row>
            </Container>
    );
}
export default Btn;