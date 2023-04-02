import React from 'react'
import './widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle('Angel Allen are together', 'Top news - 9099 readers')}
            {newsArticle('Google invests $300M in ChatGPT rival', '5h - 2793 readers')}
            {newsArticle('Is quiet hiring a win-win?', '6h - 8653 readers')}
            {newsArticle('Meet the recession-proof industry', '6h - 2314 readers')}
            {newsArticle('Meet the recession-proof industry', '6h - 2416 readers')}

        </div>
    )
}

export default Widgets