import React ,{useContext}from 'react'
import "./Stake.css"
// import DeleteForeverIcon from '@material-ui/icons/DeleteForever'; 
import {KennoContext} from "../../kennoContextAPI/KennoContextAPI"

function Stake() {
    const [totalMoney,setTotalMoney]=useContext(KennoContext)
 
    const  incrementHandler=()=>{
        setTotalMoney(+totalMoney+1)
    }

    const decrementHandler=()=>{
        setTotalMoney(+totalMoney-1)
    }

    return (
        <div>
            {/* <DeleteForeverIcon fontSize="large"  className="Result__Icon"  color="error" /> */}
            <p style={{fontSize : 18 ,fontWeight: 500}}>Stake Per Line</p>
            <div className="Stake">
                <button type="button" className={`${totalMoney >= 250 ?  `btn btn-success disable__stake__btn` :   `btn btn-success  Stake__btn` }`} onClick={incrementHandler}>+</button>
                <p className="Stake__Result"> KES {totalMoney}</p>
                <button type="button" className={`${totalMoney<=50 ?  `btn btn-success disable__stake__btn` :   `btn btn-success  Stake__btn` }`}  onClick={decrementHandler}>-</button>
            </div>
        </div> 
    )
}

export default Stake
