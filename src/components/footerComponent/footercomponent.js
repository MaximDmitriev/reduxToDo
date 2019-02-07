import React, {Component} from 'react';
import styled from "styled-components";
import {connect} from "react-redux";

const FooterWrap = styled.div`
    width: 100%;
    margin-bottom: 14px;
    button{
        width: 135px;
        height: 40px;
        font-weight: 300;
        font-size: 16px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        :focus{
            outline: none;
        }
    }
`

const PostInput = styled.input`
    width: 550px;
    height: 30px;
    margin-bottom: 14px;
    margin-top: 20px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 18px;

    background: rgba(255, 255, 255, 0);;
    color: rgba(0, 0, 0, 0.4);
    border:none;
    border-bottom: 1px solid #000000;
    :focus{
        outline: none;
    }
`
const BtnWrap = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
`
const BtnAdd = styled.button`
    background: #FFFFFF;
   `
const BtnHide = styled.button`
    background: #FFE482;
`

class Footer extends Component {

    onAdd = () => {
        if(this.refs.body.value !== ""){

            this.props.dispatch({type: "ADD",
                                body: this.refs.body.value,
                                done: false,
                                id: this.props.nums.length + 1});

            this.refs.body.value = "";
        }
    }

    show = () => {
        this.props.dispatch({type: "HIDE"});
    }

    render() {
        return(
            <FooterWrap>
                <PostInput 
                    ref="body"
                    placeholder="Enter a new todo item"/>
                <BtnWrap>
                    <BtnHide onClick={this.show}>{this.props.show ? "Show completed" : "Hide completed"}</BtnHide>
                    <BtnAdd onClick={this.onAdd} >Add new</BtnAdd>
                </BtnWrap>
            </FooterWrap>
        )
    }
}

const mapStateToProps = function(state) {
    return {
      nums: state.addPost,
      show: state.show
    };
  }

export default connect(mapStateToProps)(Footer);