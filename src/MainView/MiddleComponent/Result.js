import React,{useContext} from 'react'
import AutorenewIcon from '@material-ui/icons/Autorenew';
import CloseIcon from '@material-ui/icons/Close';
import {StackRangeContext} from "../../kennoContextAPI/StackRangeAPI"
import "./Result.css"

function Result({numbers,setNumbers}) {

    const [range] =useContext(StackRangeContext)
   
    const deleteHandler=()=>{
        setNumbers([])
    }

    const breakLine = range.length >= 5 ?  <p>mhh</p>: <p>heyyy</p>;
 
    const noOfRoom = numbers.map((row,index)=>{
        return(
            <div  className='Result__Row'   key={index} >  
                {/* <button type="button" className="btn btn-outline-success  Number_Button "><span>{stakeData}</span></button> */}
                <input type="text" value={row}   className="Result_Row_InputField" disabled/>
                {/* {breakLine} */}   
            </div>
        )
    })

    return (
        <div  className="Result">
            <div className="Number__Button__Row">
                <AutorenewIcon fontSize="large" color="action" className="Result__Icon"/>
                {noOfRoom}
                <CloseIcon  fontSize="large" color="error"  className="Result__Icon"   onClick={()=>deleteHandler()}/> 
            </div>
            <hr></hr>

        </div>
    )
}

export default Result
