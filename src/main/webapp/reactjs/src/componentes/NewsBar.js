import React, {Component} from 'react';
import {default as NewsLink} from './NewsLink';
import {Http} from "./index";
import {Container, Row} from "react-bootstrap";

class NewsBar extends Component {
    constructor() {
        super();
        this.state = {
            news:[]
        };
        Http.get('news')
            .then(res=>{
                let news = res.data;
                this.setState({news:news})
            })
    }
    render() {
        let val = this.state.news.map(n =><Row><NewsLink news={n}/></Row>)
        return (
            <Container>
                {val}
            </Container>
        );
    }
}

export default NewsBar;