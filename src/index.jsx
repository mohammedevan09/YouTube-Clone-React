import React from 'react'
import {createRoot} from "react-dom/client"
import App from './App'


function Index() {
    return (
        <>
        <App/>
        </>
    )
}

const root = createRoot(document.getElementById('root'))
root.render(<Index />)