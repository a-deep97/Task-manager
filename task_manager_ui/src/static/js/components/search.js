
/**
 * This component represents search tool
 */

import { Component, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Projects from "../projects";
import Tasks from "../tasks";
import DropDown from './drop-down';

function Search(props){

    const navigate=useNavigate();
    const [searchParam,setsearchParam]=useState('');
    const [filterList,setFilterList]=useState((value)=>{
        /** Function to create filter list based on page */
        let filter={
            "projects":["id","owner"],
            "tasks":["id", "owner","project"],
        }
        return filter[props.listtype]
    });

    function handleChange(event){
        /** Function to handle changed input values */
        setsearchParam(event.target.value)
    }
    function handleSubmit(event){
        /** Function to handle even in search button submit */
        event.preventDefault()
        if(props.listtype=="projects"){
            navigate('/tasks',{state:{param:searchParam}})
        }
        else if(props.listtype=="tasks"){
            navigate('/projects',{state:{param:searchParam}})
        } 
    }

    return(
        <form id="search-form" onSubmit={handleSubmit}>
            <DropDown options={filterList} />
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