import { useState } from "react"

export const DemoState = () => {
    // const[decorate,setDecorate]=useState('red')
    // const[bg,setBg]=useState('black')
    // const[hit,setHit]=useState(0)

    // const handleClick = () =>{
    //     setDecorate('green')
    //     setBg('beige')
    //     setHit(hit+1)
    // }

    // const handleDoubleClick = () =>{
    //     setDecorate('blue')
    //     setBg('red')
    //     setHit(0)
    // }

    const[btn,setBtn]=useState({
        decorate:'',
        bg:'',
        hit:0
    })

    const handleClick = () =>{
        setBtn(()=>{
            return{
                decorate:'maroon',
                bg:'yellow',
                hit: btn.hit+1
            }
        })
    }

    const handleDoubleClick = () =>{
        setBtn(()=>{
            return{
                decorate:'yellow',
                bg:'maroon',
                hit: 0
            }
        })
    }

    return(
        <>
            <button style={{color:btn.decorate,backgroundColor:btn.bg}} 
            onDoubleClick={handleDoubleClick} 
            onClick={handleClick}>
                Reactive Button {btn.hit}
            </button>
        </>
    )
}