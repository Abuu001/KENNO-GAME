import React from 'react'
import MainView from "../MainView/MainView"


function ModelView({children}) {
    return (
        <div>
            <MainView />
            {children}
        </div>
    )
}

export default ModelView
