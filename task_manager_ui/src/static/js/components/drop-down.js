
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
    }

    HandleOnChange(event){
        this.setState({selectedOption:event.target.value})
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
        console.log("filter list",this.props.options)
        const options_list=this.createOptions()
        return(
            <select value={this.state.selectedOption} onChange={this.HandleonChange}>
                <option value="">select</option>
                {options_list}
            </select>
        )
    }

}

export default DropDown