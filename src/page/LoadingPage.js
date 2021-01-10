import { CircularProgress } from '@material-ui/core'
import React from 'react'

function LoadingPage() {
    return (
       <div style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
           <CircularProgress/>
       </div>
    )
}

export default LoadingPage
