import React,{useContext,useState} from 'react'
import "./FootBar.css"
import WarningIcon from '@material-ui/icons/Warning';
import {KennoContext} from "../kennoContextAPI/KennoContextAPI"
import {  toast } from 'react-toastify';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function FootBar() {
    const [totalMoney]=useContext(KennoContext);

    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    const toastNotification = ()=>{
        toast.success("Proceeding to payment !!");
        setOpen(o => !o)
    }
    
    return (
        <div className="FootBar">
           <button type="button" className="btn btn-outline-success Footbar__Btn" onClick={ toastNotification}> 
                <span className="Footbar_txt"> BUY TICKET </span>
                <span className="Footbar_txt_Amount">Total  Stake : KES  {totalMoney}</span>
           </button>
           <h5>   <WarningIcon color="error" /> <b>Maximum Stake Per Ticket : KES 250</b></h5>

          <Popup open={open} closeOnDocumentClick onClose={closeModal}  className="modal">

            <div id="closeModal">
                <a className="close"  href="#" onClick={closeModal}>
                &times;
              </a>
                <div></div>
            </div>
             
              <span> Score  </span>
              <p>Your score: </p>
 
          </Popup>
        </div>
    )
}

export default FootBar
