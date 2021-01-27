import React,{useContext,useState} from 'react'
import AutorenewIcon from '@material-ui/icons/Autorenew';
import CloseIcon from '@material-ui/icons/Close';
import {StackRangeContext} from "../../kennoContextAPI/StackRangeAPI"
import Spinner from "../../utils/Spinner/Spinner"
import AssignmentIcon from '@material-ui/icons/Assignment';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./Result.css"

function Result({numbers,setNumbers,disableBtn,setDisableBtn,time}) {

    const [range] =useContext(StackRangeContext)
    const [randomNo,setRandomNo]=useState([])
    const [checkResult,setCheckResult]=useState([])
    const [correct,setCorrect]=useState(0)
    const [emoji,setEmoji]=useState([])
 

    //to open the check result model
    const [open, setOpen] = useState(false);
    const closeModal = () =>{
        setOpen(false);
        setCheckResult([])
        setCorrect(0)
        setNumbers([])
        setEmoji([])
    } 
   
    //clears the stake
    const deleteHandler=()=>{
        setNumbers([])
        setCheckResult([])
        setCorrect(0)
        setEmoji([])
    }
 
    //selects a random num at range btwn 1 -48
    const handleSelectRandom =()=>{
        
        // choosing random no according to  the no of times ifor the stake
        for(let i=0; i< range.length+1 ; i++){
            const rand = Math.floor(Math.random() * (48 - 1) + 1);
            randomNo.push(rand)
            setRandomNo([...randomNo]);
        }
       
       //  if(checkResult.length>0){
           setRandomNo([])
      //   }
        setNumbers(randomNo)
        setDisableBtn(false)
    }

    const checkResultsHandler=()=>{
        setOpen(o => !o)
     
        for(let i=0; i< range.length+1 ; i++){
            const rand = Math.floor(Math.random() * (48 - 1) + 1);
            checkResult.push(rand)
            // setCheckResult([...randomNo]);
            setCheckResult([...checkResult]);
        }

        if(range.length+1   !== numbers.length){
            setCheckResult([])
        } 
      // setNumbers(randomNo)

      //disable results btn after clicked
        setDisableBtn(prevData =>!prevData)

        // checks if the result array matches with the stake numbers && !undefined
        if(checkResult[0]===numbers[0] && numbers[0] !== undefined){
            setCorrect(prevData=>prevData+1)
            emoji.push('🟢'  )
            setEmoji([...emoji])
        } 

        if(checkResult[1]===numbers[1] && numbers[1] !== undefined){
            setCorrect(prevData=>prevData+1)
            emoji.push('🟢'  )
            setEmoji([...emoji])
        }

        if(checkResult[2]===numbers[2] && numbers[2] !== undefined){
            setCorrect(prevData=>prevData+1)
            emoji.push('🟢'  )
            setEmoji([...emoji])
        }

        if(checkResult[3]===numbers[3] && numbers[3] !== undefined){
            setCorrect(prevData=>prevData+1)
            emoji.push('🟢'  )
            setEmoji([...emoji])
        }

        if(checkResult[4]===numbers[4] && numbers[4] !== undefined){
            setCorrect(prevData=>prevData+1)
            emoji.push('🟢'  )
            setEmoji([...emoji])
        }
        if(checkResult[5]===numbers[5]  && numbers[5] !== undefined ){
            setCorrect(prevData=>prevData+1)
            emoji.push('🟢'  )
            setEmoji([...emoji])
        }

        if(checkResult[6]===numbers[6] && numbers[6] !== undefined){
            setCorrect(prevData=>prevData+1)
            emoji.push('🟢'  )
            setEmoji([...emoji])
        }

    }
   //sets a green ball  emoji for each correct score 
    const greenBall = emoji.map(corr=> corr  );

    // loops through the selected numbers
    const noOfRoom = numbers.map((row,index)=>{

        return(
            <div  className='Result__Row'   key={index} >  
                <input type="text" value={row}   className="Result_Row_InputField" disabled/> 
            </div>
        )
    })

    const resultsLoop=checkResult.map((res,indx)=>{
       
        return(
            <div className='Result__Row' key={indx}>
            <input type="text" value={res}   className="Result_Row_InputField" disabled/> 
            </div>
        )
    })

    return (
        <div  className="Result">
            <div className="Number__Button__Row">
                <AutorenewIcon fontSize="large" color="action" className="Result__Icon" onClick={handleSelectRandom}/>
                   {noOfRoom}
                <CloseIcon  fontSize="large" color="error"  className="Result__Icon"   onClick={()=>deleteHandler()}/> 
            </div>
            <hr></hr>
            
        <div className="Result__Score"> 
          <button type="button" className={` ${ disableBtn === true  ?  `btn btn-outline-success Result__Score__btn` : `btn btn-outline-success`}  `}   onClick={checkResultsHandler} disabled={disableBtn}  > check results</button>
        </div>
        
          <Popup open={open} closeOnDocumentClick onClose={closeModal} >
              <div  className="my-popup ">
                <div id="closeModal">
                    <a className="close"  href="#" onClick={closeModal}>
                    &times;
                </a>
                    <div></div>
                </div>
            
                <span style={{fontSize:18}}> Score  <AssignmentIcon /> {correct >=2 ? <span  style={{color: 'green'}}>Good Keep Trying!! '👏👏👏'</span> : <span style={{color: 'red'}}>Looser !! '😭😭😭😭'</span> }</span>
                <p style={{fontSize:18}}>Your score: {correct}    {greenBall}</p>
                <div className="Number__Button__Row  Number__Row__Modal"> 
                    <p style={{fontSize:18}}>Your Stake :  </p> 
                <span>{noOfRoom}</span> 
                </div>
                <hr></hr>
            
                <div className="Number__Button__Row  Number__Row__Modal">
                    <p style={{fontSize:18}}>Result : </p>
                    <span> {time ?  resultsLoop : <Spinner/>}</span>
                </div>
              </div>
        </Popup>
  


        </div>
    )
}

export default Result
