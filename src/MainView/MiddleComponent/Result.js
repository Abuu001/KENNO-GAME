import React from 'react'
import AutorenewIcon from '@material-ui/icons/Autorenew';
import CloseIcon from '@material-ui/icons/Close';
import "./Result.css"

function Result({lastIndexPosition}) {

    const deleteHandler=(id)=>{
        console.log(id + "this is id");
        console.log(lastIndexPosition +"is idmain");
    }

    return (
        <div  className="Result">
            <div  className="Result__Row">
                <AutorenewIcon fontSize="large" color="action" className="Result__Icon"/>
                <div>
                    <div className="Number__Button__Row">
                            <button type="button" className="btn btn-outline-success  Number_Button"><span>43</span></button>
                            <button type="button" className="btn btn-outline-success  Number_Button"><span>44</span></button>
                            <button type="button" className="btn btn-outline-success  Number_Button"><span>45</span></button>
                            <button type="button" className="btn btn-outline-success  Number_Button"><span>46</span></button>
                            <button type="button" className="btn btn-outline-success  Number_Button"><span>47</span></button>
                        </div>

                        <div className="Number__Button__Row">
                            <button type="button" className="btn btn-outline-success  Number_Button"><span>43</span></button>
                            <button type="button" className="btn btn-outline-success  Number_Button"><span>44</span></button>
                            <button type="button" className="btn btn-outline-success  Number_Button"><span>45</span></button>
                            <button type="button" className="btn btn-outline-success  Number_Button"><span>46</span></button>
                            <button type="button" className="btn btn-outline-success  Number_Button"><span>47</span></button>
                        </div>
                    </div>
                    <CloseIcon  fontSize="large" color="error"  className="Result__Icon"   onClick={(e)=>deleteHandler(e)}/> 
            </div>
                <hr></hr>

        </div>
    )
}

export default Result
