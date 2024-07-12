import { useEffect, useRef } from "react";


export default function useOutsideClick(ref, Handler){


    useEffect(()=>{
        function listener(event){

            if(!ref.current || ref.current.contains(event.target)){
                return;
            }

            Handler(event)

        }

        document.addEventListener('mousedown',listener)
        document.addEventListener('touchstart',listener)

        return ()=>{
            document.removeEventListener('mousedown',listener)
            document.removeEventListener('touchstart',listener)
        }
    },[Handler,ref])
}