import React, {useState, useEffect} from 'react';
import './GoTopBtn.css'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const GoTopBtn = ({goTop}) => {
  
    return <>
        <div className="go-top-btn" onClick={goTop}>scroll to top <KeyboardDoubleArrowUpIcon className='top-icon'/></div>
    </>
}

export default GoTopBtn;