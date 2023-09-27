
/**
 * This component represents search tool
 */

import { Component, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Projects from "../projects";
import Tasks from "../tasks";
import DropDown from './drop-down';

import '../../css/search.css'

function Filter(props){

    const navigate=useNavigate();
    const [searchParam,setsearchParam]=useState('');
    const [filterOption,setfilterOption]=useState('');
    const [filterList,setFilterList]=useState((value)=>{
        /** Function to create filter list based on page */
        let filter={
            "projects":["id","owner"],
            "tasks":["id", "owner","project"],
        }
        return filter[props.componentToRender]
    });
    function handleChange(event){
        /** Function to handle changed input values */
        setsearchParam(event.target.value)
    }
    function handleSubmit(event){
        /** Function to handle even in search button submit */
        event.preventDefault()
        if(props.componentToRender=="projects"){
            const state = {key:filterOption,param:searchParam}
            navigate('/projects',{state})
        }
        else if(props.componentToRender=="tasks"){
            navigate('/tasks',{state:{key:filterOption,param:searchParam}})
        } 
    }
    function handleOptionSelect(option){
        setfilterOption(option)
    }

    return(
        <form className="search-bar" onSubmit={handleSubmit}>
            <DropDown options={filterList} onSelect={handleOptionSelect} />
            <input 
                type="text" 
                className="search-input"
                value={searchParam} 
                onChange={handleChange}
                placeholder="search"/>
            <button className="apply-button" type="submit">Apply</button>
        </form>
    )
}

export default Filter;