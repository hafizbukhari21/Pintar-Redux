import React, { Component } from 'react'
import {useSelector, useDispatch} from 'react-redux'

export default function View(){
    const _MainReducers = useSelector(state=>state.MainReducers)
    const disPatch = useDispatch()
    return(<>
         <div className="App">
            <div>Angka : {_MainReducers}</div>
            <button onClick = {()=>{
                disPatch({type:"ADD"})
            }}>Count</button>
        </div>   
    </>)
}