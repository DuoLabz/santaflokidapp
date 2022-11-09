import { Container,Row,Col,Card,CardGroup, Button } from "react-bootstrap";
import { useState } from "react";
// import spookygif from '../assets/images/spookygif.gif';
import spookygif from '../assets/images/santagif.gif';


const SantaNftCards = () => {

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

        <Container style={{marginTop:'5px',textAlign:"center",overflow:"scroll",height:"75vh"}}>
            <Row>
                <Col xl>
                        <img style={{width:"200px" , borderRadius:"10%",margin:"10px"}} src={spookygif}/>
                </Col>

                <Col xl>
                        <img style={{width:"200px" , borderRadius:"10%",margin:"10px"}} src={spookygif}/>
                </Col>

                <Col xl>
                        <img style={{width:"200px" , borderRadius:"10%",margin:"10px"}} src={spookygif}/>
                </Col>

                <Col xl>
                        <img style={{width:"200px" , borderRadius:"10%",margin:"10px"}} src={spookygif}/>
                </Col>

                <Col xl>
                        <img style={{width:"200px" , borderRadius:"10%",margin:"10px"}} src={spookygif}/>
                </Col>

                <Col xl>
                        <img style={{width:"200px" , borderRadius:"10%",margin:"10px"}} src={spookygif}/>
                </Col>

                <Col xl>
                        <img style={{width:"200px" , borderRadius:"10%",margin:"10px"}} src={spookygif}/>
                </Col>

                <Col xl>
                        <img style={{width:"200px" , borderRadius:"10%",margin:"10px"}} src={spookygif}/>
                </Col>

                <Col xl>
                        <img style={{width:"200px" , borderRadius:"10%",margin:"10px"}} src={spookygif}/>
                </Col>

                <Col xl>
                        <img style={{width:"200px" , borderRadius:"10%",margin:"10px"}} src={spookygif}/>
                </Col>

                <Col xl>
                        <img style={{width:"200px" , borderRadius:"10%",margin:"10px"}} src={spookygif}/>
                </Col>

                <Col xl>
                        <img style={{width:"200px" , borderRadius:"10%",margin:"10px"}} src={spookygif}/>
                </Col>

                <Col xl>
                        <img style={{width:"200px" , borderRadius:"10%",margin:"10px"}} src={spookygif}/>
                </Col>

                <Col xl>
                        <img style={{width:"200px" , borderRadius:"10%",margin:"10px"}} src={spookygif}/>
                </Col>

                <Col xl>
                        <img style={{width:"200px" , borderRadius:"10%",margin:"10px"}} src={spookygif}/>
                </Col>

                <Col xl>
                        <img style={{width:"200px" , borderRadius:"10%",margin:"10px"}} src={spookygif}/>
                </Col>

                <Col xl>
                        <img style={{width:"200px" , borderRadius:"10%",margin:"10px"}} src={spookygif}/>
                </Col>

                <Col xl>
                        <img style={{width:"200px" , borderRadius:"10%",margin:"10px"}} src={spookygif}/>
                </Col>

                <Col xl>
                        <img style={{width:"200px" , borderRadius:"10%",margin:"10px"}} src={spookygif}/>
                </Col>

                <Col xl>
                        <img style={{width:"200px" , borderRadius:"10%",margin:"10px"}} src={spookygif}/>
                </Col>

            </Row>
            
        </Container>
    );
}
export default SantaNftCards;