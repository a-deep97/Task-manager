
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
    const [filterOption,setfilterOption]=useState('');
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
            const state = {key:filterOption,param:searchParam}
            navigate('/projects',{state})
        }
        else if(props.listtype=="tasks"){
            navigate('/tasks',{state:{key:filterOption,param:searchParam}})
        } 
    }
    function handleOptionSelect(option){
        setfilterOption(option)
    }

    return(
        <form id="search-form" onSubmit={handleSubmit}>
            <DropDown options={filterList} onSelect={handleOptionSelect} />
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