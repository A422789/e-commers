import React from 'react'

const Button = ({text,color,background,rudios,width,className,inner,btnApper,onclick}) => {
  if(btnApper==false){
    return
  }else{

 
  return (
    <div>
      <button className={className} style={{borderRadius:rudios,textAlign:'center',height :'35px',lineHeight:'25px',width:width,color:color,border:'1px solid rgba(132, 129, 129, 1)',background:background}} onClick={onclick}>{text} {inner} </button>

    </div>
  )
   }
}

export default Button
