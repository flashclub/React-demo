import React from 'react'
import './contactItem.scss'
import Img from './imgBox.jsx'
export default function ContactItem(){
  return <div className='contact-item'>
    <Img size='40'/>
    <div className='contact-item-nickname'>昵称</div>
  </div>
}