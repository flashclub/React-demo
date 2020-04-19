import React from 'react'
import './imgBox.scss'

export default function Img(prop){
  let {size} = prop
  size || (size = 40)
  return <span className={'img-'+size}>
    图片
  </span>
}