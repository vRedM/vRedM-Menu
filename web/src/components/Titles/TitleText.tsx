import React from 'react'
import './TitleText.css'

interface Props {
  title : string;
}

function TitleText({title}: Props) {
  return (
    <div className="backgroundimage">
    <h1 className='title-text'>{title}</h1>
    </div>
  )
}

export default TitleText