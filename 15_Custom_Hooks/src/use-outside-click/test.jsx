import { useState,useRef } from "react"
import useOutsideClick from "."


export default function UseOnClickOutsideTest(){

    const [showContent, setShowContent] = useState(false)
    
    const ref=useRef()
    useOutsideClick(ref, ()=>setShowContent(false))

    return (
        <div>
            {

                showContent ?
                (<div ref={ref}>
                    <h1>This is a Random Content</h1>
                    <p>please click outside of this paragraph to close this , it wont close until you click outside </p>
                </div>) : 
                (<button onClick={()=>setShowContent(true)}>
                    Show Content
                </button>)
            }
        </div>
    )
}