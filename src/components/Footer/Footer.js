import './Footer.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';


const Footer = () => {
    return (
        <div className="contact row">
            <h1 className="contact-title">Contact Me</h1>
            <div className='contact-detail'>At the moment, I am looking for an internship or <br></br>junior web development position in Finland. <br></br> Please contact me through: <br></br>
            <LocalPhoneIcon/> : +358 465887841 (WhatsApp | SMS | Phone Call)<br></br>
            <EmailIcon/>: quanbui021001@gmail.com <br/> Or via my  <a href='https://www.linkedin.com/in/quan-bui-0a4908209/'>LinkedIn profile</a>
            </div>
            <div className="contact-end col">
                <div>Looking foward to get in touch<br></br> and explore career options! <br></br>I appreciate your time and consideration <SentimentSatisfiedAltIcon/>.</div>
            </div>
        </div>
    )
}

export default Footer