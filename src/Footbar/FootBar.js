import React,{useContext} from 'react'
import "./FootBar.css"
import WarningIcon from '@material-ui/icons/Warning';
import {KennoContext} from "../kennoContextAPI/KennoContextAPI"
import {  toast } from 'react-toastify';

function FootBar() {
    const [totalMoney]=useContext(KennoContext)
    const toastNotification = ()=> toast.success("Proceeding to payment !!")

    return (
        <div className="FootBar">
           <button type="button" className="btn btn-outline-success Footbar__Btn" onClick={toastNotification}> 
           <span className="Footbar_txt">
              BUY TICKET 
           </span>
            <span className="Footbar_txt_Amount">Total  Stake : KES  {totalMoney}</span>
            
           </button>
           <h5>   <WarningIcon color="error" /> <b>Maximum Stake Per Ticket : KES 250</b></h5>
        </div>
    )
}

export default FootBar
