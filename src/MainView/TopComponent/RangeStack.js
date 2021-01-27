import React,{useContext} from 'react'
import {StackRangeContext} from "../../kennoContextAPI/StackRangeAPI"
import "./RangeStack.css"

function RangeStack() {

    const [range,setRange] =useContext(StackRangeContext)

    const optionStake=(id)=>{       

        // let noOfStack;

        // sets the size range of the stake slots
        switch (id) {
            case 3:
                // noOfStack=range.splice(1,1,"b")
                // setRange(noOfStack)
                // setRange(["a","b"])
                setRange(["a","b"])
            break;
    
            case 4:
                setRange(["a","b","c"])
            break;  

            case 5:
                setRange(["a","b","c","d"])
            break;  

            case 6:
                setRange(["a","b","c","d","e"])    
            break;  

            case 7:
                setRange(["a","b","c","d","e","f"])      
            break;  

            default :
                setRange(["a","b","d","e"])
        }
    }     

    return (
        <div className="RangeStack">
            <button type="button" className="btn btn-outline-success  btn_style" onClick={()=>optionStake(3)}>3</button>
            <button type="button" className="btn btn-outline-success  btn_style" onClick={()=>optionStake(4)}>4</button>
            <button type="button" className="btn btn-outline-success  btn_style" onClick={()=>optionStake(5)} >5</button>
            <button type="button" className="btn btn-outline-success  btn_style" onClick={()=>optionStake(6)} >6</button>
            <button type="button" className="btn btn-outline-success  btn_style" onClick={()=>optionStake(7)} >7</button>
        </div>
    )
} 

export default RangeStack
