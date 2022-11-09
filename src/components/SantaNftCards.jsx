import { Container} from "react-bootstrap";
import { useState } from "react";


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
        
             const NFTsArray=[...Array(48).keys()]
        
            return(
        
                <Container style={{marginTop:'5px',textAlign:"center",overflow:"scroll",height:"70vh"}}>
                        {NFTsArray.map(
                                (nft)=>{
                                        return(<img style={{width:"200px" , borderRadius:"10%",margin:"10px"}} src={'https://santafloki.mypinata.cloud/ipfs/QmNmnNBnxZvHiYQuUNyW4a54RiSpWocCxhjqa51LstmHwa/'+nft+'.png'}/>)
                                }
                        )}
                </Container>
            );
        }
export default SantaNftCards;