
/**
 * This component represents search tool
 */

import { Component, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Projects from "../projects";
import Tasks from "../tasks";

function Search(props){

    const navigate=useNavigate();
    const [searchParam,setsearchParam]=useState('');

    function handleChange(event){
        setsearchParam(event.target.value)
    }
    function handleSubmit(event){
        event.preventDefault()
        console.log("list type",props.listtype)
        if(props.listtype=="projects"){
            navigate('/tasks',{state:{param:searchParam}})
        }
        else if(props.listtype=="tasks"){
            navigate('/projects',{state:{param:searchParam}})
        } 
    }


    return(
        <form id="search-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={searchParam} 
                onChange={handleChange}
                placeholder="search"/>
            <button type="submit">Search</button>
        </form>
    )
}

export default Search;