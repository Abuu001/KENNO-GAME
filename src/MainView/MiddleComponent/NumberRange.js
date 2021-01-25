import React,{useState,useContext} from 'react'
import "./NumberRange.css"
import Result from "./Result"
import {StackRangeContext} from "../../kennoContextAPI/StackRangeAPI"
import CheckIcon from '@material-ui/icons/Check';

function NumberRange() {

    const [range] =useContext(StackRangeContext)
    const [numbers,setNumbers]=useState([])
 
    const stakeNumbers=(num)=>{

        //checks if the array has same value
        const contains= numbers.includes(num)
        if(!contains){
            numbers.push(num)
            setNumbers([...numbers])
        }
    }

    return (
        <div className="NumberRange__Row">
                <div className="NumberRange">
                    <div className="Number__Button__Row">
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(1)} ><span>1</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(2)}><span>2</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(3)}><span>3</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(4)}><span>4</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(5)}><span>5</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(6)}><span>6</span></button>
                    </div>

                    <div className="Number__Button__Row">
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(7)}><span>7</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(8)}><span>8</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(9)}><span>9</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(10)}><span>10</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(11)}><span>11</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(12)}><span>12</span></button>
                    </div>
                    
                    <div className="Number__Button__Row">
                        <button type="button"className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(13)}><span>13</span></button>
                        <button type="button"className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(14)}><span>14</span></button>
                        <button type="button"className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(15)}><span>15</span></button>
                        <button type="button"className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(16)}><span>16</span></button>
                        <button type="button"className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(17)}><span>17</span></button>
                        <button type="button"className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(18)}><span>18</span></button>
                    </div>

                    <div className="Number__Button__Row">
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(19)}><span>19</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(20)}><span>20</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(21)}><span>21</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(22)}><span>22</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(23)}><span>23</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(24)}><span>24</span></button>
                    </div>

                    <div className="Number__Button__Row">
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(25)}><span>25</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(26)}><span>26</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(27)}><span>27</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(28)}><span>28</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(29)}><span>29</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(30)}><span>30</span></button>
                    </div>

                    <div className="Number__Button__Row">
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(31)}><span>31</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(32)}><span>32</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(33)}><span>33</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(34)}><span>34</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(35)}><span>35</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(36)}><span>36</span></button>
                    </div>

                    <div className="Number__Button__Row">
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(37)}><span>37</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(38)}><span>38</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(39)}><span>39</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(40)}><span>40</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(41)}><span>41</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(42)}><span>42</span></button>
                    </div>

                    <div className="Number__Button__Row">
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(43)}><span><a href="#">43</a></span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(44)}><span>44</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(45)}><span>45</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(46)}><span>46</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(47)}><span>47</span></button>
                        <button type="button" className={`${numbers.length > range.length ?  `btn btn-outline-success  Number_Button__Disable ` : `btn btn-outline-success  Number_Button` }`} onClick={()=>stakeNumbers(48)}><span>48</span></button>
                    </div>

                </div>
                   <div>
                        <p>You have selected : {range.length+1} slots</p>
                        <p>{numbers.length}/{range.length+1} completed <CheckIcon fontSize="large" color={`${numbers.length === range.length+1 ? `primary` : `error`}`}/> </p>
                        <div className={`${numbers.length === range.length+1 ?  "NumberRange__Result__completed" :  "NumberRange__Result__Notcompleted" }`}>
                            <Result  numbers={numbers}  setNumbers={setNumbers}/>
                        </div>
                   </div>
        </div>
    
    )
}

export default NumberRange;
