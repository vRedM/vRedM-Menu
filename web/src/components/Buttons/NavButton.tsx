import React from 'react'
import './NavButton.css'

interface Props {
  title : string;
  onClick:() => void;
}


function NavButton({title, onClick}: Props) {
  return (
    <button onClick={onClick} className='base-button'>
      {title}
    </button>
  )
}

export default NavButton