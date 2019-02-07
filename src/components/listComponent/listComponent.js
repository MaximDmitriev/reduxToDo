import React, {Component} from 'react';
import styled from "styled-components";
import {connect} from "react-redux";

import PostItem from "../itemComponent/postItem";

const List = styled.ul`
    margin-top: 10px;
    margin-left: 50px;
    margin-bottom: auto;
    padding: 0;
`

class ListItems extends Component {

    render(){

        const {post, show} = this.props;

        let content = null;

        if(show) {
            content = post.map((item) => 
            
            {
                if(!item.status)
                    return (
                        <PostItem 
                            label={item.body} 
                            key={item.id} 
                            done={item.status} 
                            id={item.id} 
                            />
                        )
                    return false;
                })
        } else {
            content = post.map((item) => {
                return (
                    <PostItem 
                        label={item.body} 
                        key={item.id} 
                        done={item.status} 
                        id={item.id} 
                           />
                    )
                })
        }

        return(
            <List>
                {content}
            </List>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.addPost,
        show: state.show
    }
}

export default connect(mapStateToProps)(ListItems);