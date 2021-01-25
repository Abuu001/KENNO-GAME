import React,{useContext} from 'react'
import {StackRangeContext} from "../../kennoContextAPI/StackRangeAPI"
import "./RangeStack.css"

function RangeStack() {

    const [range,setRange] =useContext(StackRangeContext)

    const optionStake=(id)=>{       

        let noOfStack;

        switch (id) {
            case 3:
                // noOfStack=range.splice(1,1,"b")
                // setRange(noOfStack)
                // setRange(["a","b"])
                setRange(["a","b"])
            break;
    
            case 4:
                // noOfStack=range.splice(1,1,"b","c")
                // setRange(noOfStack)
                setRange(["a","b","c"])
            break;  

            case 5:
                // noOfStack=range.splice(1,1,"b","c","d")
                // setRange(noOfStack)
                setRange(["a","b","c","d"])
            break;  

            case 6:
                // noOfStack=range.splice(1,1,"b","c","d","e")
                // setRange(noOfStack)
                setRange(["a","b","c","d","e"])    
            break;  

            case 7:
                // noOfStack=range.splice(1,1,"b","c","d","e","f")
                // setRange(noOfStack)
                setRange(["a","b","c","d","e","f"])      
            break;  

            // case 7:
            //     noOfStack=range.splice(1,1,"b","c","d","e","f","g")
            //     setRange(noOfStack)
            //     setRange(["a","b","c","d","e","f","g"])      
            // break;  

            // case 8:
            //     noOfStack=range.splice(1,1,"b","c","d","e","f","g","h")
            //     setRange(noOfStack)
            //     setRange(["a","b","c","d","e","f","g","h"])      
            // break;  

            // case 9:
            //     noOfStack=range.splice(1,1,"b","c","d","e","f","g","h","i")
            //     setRange(noOfStack)
            //     setRange(["a","b","c","d","e","f","g","h","i"])      
            // break;  

            // case 10:
            //     noOfStack=range.splice(1,1,"b","c","d","e","f","g","h","i","j")
            //     setRange(noOfStack)
            //     setRange(["a","b","c","d","e","f","g","h","i","j"])      
            // break;  

            // default :
            //     setRange(["a","b","d","e","f","g","h","i","j","k"])
            default :
                setRange(["a","b","d","e"])
        }

        console.log(range);
    }     

    return (
        <div className="RangeStack">
            <button type="button" className="btn btn-outline-success  btn_style" onClick={()=>optionStake(3)}>3</button>
            <button type="button" className="btn btn-outline-success  btn_style" onClick={()=>optionStake(4)}>4</button>
            <button type="button" className="btn btn-outline-success  btn_style" onClick={()=>optionStake(5)} >5</button>
            <button type="button" className="btn btn-outline-success  btn_style" onClick={()=>optionStake(6)} >6</button>
            <button type="button" className="btn btn-outline-success  btn_style" onClick={()=>optionStake(7)} >7</button>
            {/* <button type="button" className="btn btn-outline-success  btn_style" onClick={()=>optionStake(7)} >7</button>
            <button type="button" className="btn btn-outline-success  btn_style" onClick={()=>optionStake(8)} >8</button>
            <button type="button" className="btn btn-outline-success  btn_style" onClick={()=>optionStake(9)} >9</button>
            <button type="button" className="btn btn-outline-success  btn_style" onClick={()=>optionStake(10)} >10</button> */}
        </div>
    )
} 

export default RangeStack
