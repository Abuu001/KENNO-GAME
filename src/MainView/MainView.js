import React,{useState} from 'react'
import  "./MainView.css"
import TopComponent from "./TopComponent/TopComponent"
import AddIcon from '@material-ui/icons/Add';
import NumberRange from "./MiddleComponent/NumberRange"

function MainView() {

    const [resultLoop,setResultLoop]=useState(["constantRow"])
    const loopHandler=()=>{
        resultLoop.push("+1Row")
        setResultLoop([...resultLoop])
    }

    return  (
        <div className="MainView">
            <p style={{fontSize : 32 ,fontWeight: 500, fontFamily:"sans-serif"}}>Numbers To Pick Per Row</p>
            <TopComponent /> 
            <NumberRange resultLoop={resultLoop} />
            <div className="AddLine" style={{marginTop:14}}>
                 <button type="button" className="btn btn-outline-success " onClick={loopHandler}>  <AddIcon />  Add More Lines</button>
            </div>
        </div>
    )
}

export default MainView
