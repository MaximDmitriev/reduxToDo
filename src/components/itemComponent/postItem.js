import React, {Component}from 'react';
import styled from "styled-components";
import {connect} from "react-redux";

const ListItem = styled.li`
    margin-left: 0;
    margin-top: 15px;
    text-align: left;

    list-style-type: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 24px;
    
    color: ${props => props.done ? "rgba(0, 0, 0, 0.6)" : "#000000"};
    text-decoration: ${props => props.done ? "line-through" : "none"};
    cursor: default;
    ::after{
        content: "";
        display: block;
        width: 60px;
        margin-top: 10px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    }
`

class PostItem extends Component {
   

    onToggle = () => {
        const value= this.props.id;
        
        this.props.dispatch({type: "TOGGLE_DONE", value});
                
    }
    render() {
        const {done, label, id} = this.props;

        return(
            <ListItem 
                onClick={this.onToggle}
                done={done}
                id={id}
                >{label}</ListItem>
        )
    }
}

export default connect()(PostItem);