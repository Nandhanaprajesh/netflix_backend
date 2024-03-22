import React, { useEffect, useState } from 'react'
import './nav.css'

function Nav() {
    const [show,setShow]=useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>600){
                setShow(true)
            }else{
                setShow(false)
            }
        })
    })
    console.log(show);

  return (
    <div className='nav'>
        <img width={'150px'} src='https://upload.wikimedia.org/wikipedia/commons/f/ff/Netflix-new-icon.png'/>
    </div>
  )
}

export default Nav