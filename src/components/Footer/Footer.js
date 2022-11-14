import './Footer.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <div>At the moment, I am looking for an internship or junior web development position in Finland. Please contact me through: <br></br>
            <LocalPhoneIcon/> : +358 465887841 (WhatsApp | SMS | Phone Call)<br></br>
            <EmailIcon/>: quanbui021001@gmail.com <br/> Or through my LinkedIn profile <a href='https://www.linkedin.com/in/quan-bui-0a4908209/' className='footer-icon'><LinkedInIcon/></a>
            </div>
        </div>
    )
}

export default Footer