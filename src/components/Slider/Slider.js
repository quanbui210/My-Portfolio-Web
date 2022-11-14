/* eslint-disable jsx-a11y/anchor-is-valid */
import {Fragment} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Slider.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

const Slider = () => {
    return <div className="slider">
        <h1 className="slider-title">Hi, My name is Quan Bui, I build and design Web Applications. 
        <p className="slider-description">An highly adaptable web developer with a huge passion with coding, designing and working with websites. 
        At the moment, I am comfortable working with #React, #JavaScript, #HTML, #CSS. </p>
        <div className='icon-container'>          
        <a href="https://github.com/quanbui210" className='slider-icon'><GitHubIcon/></a>
        <a href='https://www.linkedin.com/in/quan-bui-0a4908209/' className='slider-icon'><LinkedInIcon/></a>
        <a href='facebook.com' className='slider-icon'><FacebookIcon/></a>
        <a href='mailto:quanbui021001@gmail.com?subject = Feedback&body = Message' className='slider-icon'><EmailIcon/></a>
        </div>
        </h1>
    </div>
}

export default Slider