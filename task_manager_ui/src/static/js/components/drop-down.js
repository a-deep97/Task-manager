
/**
 * This component represents a drop down option
 */

import { Component } from "react";

class DropDown extends Component{
    
    constructor(props){
        super(props)
        this.state={
            selectedOption:null
        }
        this.HandleOnChange=this.HandleOnChange.bind(this)
    }

    HandleOnChange(event){
        this.setState({selectedOption:event.target.value},()=>{
            console.log("selected option: ",this.state.selectedOption)
        })
        // calling callback function as properties to return selected option to form
        this.props.onSelect(this.state.selectedOption)
    }
    createOptions(){
        let optionList=[]
        if(this.props.options==null){
            return null
        }
        for(let i=0;i<this.props.options.length;i++){
            optionList.push(<option value={this.props.options[i].value}>{this.props.options[i]}</option>)
        }
        return optionList
    }
    render(){
        const options_list=this.createOptions()
        return(
            <select value={this.state.selectedOption} onChange={this.HandleOnChange}>
                <option value="">select</option>
                {options_list}
            </select>
        )
    }

}

export default DropDown