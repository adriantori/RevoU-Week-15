import React from 'react'
import { Get, Post, Put, Delete } from './functions'

const AppContents: React.FC = () => {

    return (
        <div>
            <button onClick={Get}>GET</button>
            <button onClick={Post}>POST</button>
            <button onClick={Put}>PUT</button>
            <button onClick={Delete}>DELETE</button>
        </div>
    )
}

export default AppContents