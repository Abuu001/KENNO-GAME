import React from 'react'
import "./TopComponent.css"
import Stake from "./Stake"
import RangeStack from './RangeStack'

function TopComponent({setResultLoop}) {
    return (
        <div className="TopComponent">
            <RangeStack />
            <Stake  />
        </div>
    )
}

export default TopComponent
