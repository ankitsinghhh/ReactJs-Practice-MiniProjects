import React, { useRef } from 'react'

const ScrollToSections = () => {
    const data=[
        {
            label:'first Card',
            style:{
                width:'100p%',
                height:'600px',
                backgroundColor:'#0274BD',
                display:'flex',
                justifyContent:'center',
                // alignItems:'center',
                color:'#343a40',
            }
        },
        {
            label:'Second Card',
            style:{
                width:'100p%',
                height:'600px',
                backgroundColor:'#C4AD9D',
                display:'flex',
                justifyContent:'center',
                // alignItems:'center',
                color:'#f8f9fa',
            }
        },
        {
            label:'Third Card',
            style:{
                width:'100p%',
                height:'600px',
                backgroundColor:'#F57251',
                display:'flex',
                justifyContent:'center',
                // alignItems:'center',
                color:'#343a40',
            }
        },
        {
            label:'Fourth Card',
            style:{
                width:'100p%',
                height:'600px',
                backgroundColor:'#55356E',
                display:'flex',
                justifyContent:'center',
                // alignItems:'center',
                color:'#f8f9fa',
            }
        },
        {
            label:'Fifth Card',
            style:{
                width:'100p%',
                height:'600px',
                backgroundColor:'#AFCBD5',
                display:'flex',
                justifyContent:'center',
                // alignItems:'center',
                color:'#343a40',
            }
        }
    ]

    const ref = useRef()

    function scrollSectionHandle(){
        ref.current?.scrollIntoView({ behavior:'smooth' })
    }

  return (
    <div className='wrapper' 
    >
       <div className="head">
       <h1>Scroll To a Particular Section</h1>
       <button onClick={scrollSectionHandle}>Scroll To Section 4</button>
       </div>
        {
            data.map((item, index)=>(
                <div ref={index===3? ref:null}  key={index} style={item.style}>
                    <h2  style={{paddingTop:'70px'}} >{item.label}</h2>
                </div>
            ))
        }
    </div>
  )
}

export default ScrollToSections