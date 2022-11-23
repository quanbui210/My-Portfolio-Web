import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Certifications.css'
import hsimg from '../../assets/certificateHub.png'
import jsimg from '../../assets/jscert.png'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';



const Certifications = () => {
    return (
        
    <Container className='cert-container'>
        <h1 className='cert-title'>Certifications</h1>
        <Row>
            <Col>
                <a className='cert-name' href="https://app-eu1.hubspot.com/academy/achievements/0fp51zm9/en/1/bui-quan/hubspot-cms-for-developers">
                    HubSpot CMS for Developers  <OpenInNewIcon className='badge-icon' style={{fontSize: '14px'}}/>
                </a> <br></br>
                <img src={hsimg} alt="" className='cert-img' />

            </Col>
            <Col>
                <a className='cert-name' href="https://freecodecamp.org/certification/fcce950a9cb-8660-4f84-8ac9-af1083d1512e/javascript-algorithms-and-data-structures">
                    JavaScript Algorithms and Data Structures <OpenInNewIcon className='badge-icon' style={{fontSize: '14px'}}/>
                </a>
                <img src={jsimg} alt="" className='cert-img' />
            </Col>
        </Row>
    </Container>
   )
}

export default Certifications