import React, {Component} from 'react';
import axios from 'axios';
import {
    Http, NewsBar
} from '../componentes'
import {
    Container, Row
} from 'react-bootstrap';


export default  class Home extends Component {
    constructor() {
        super();
        this.state= {
            noticias:[],
            staff: [],
            manga:[]
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <NewsBar/>
                </Row>
            </Container>
        );
    }
}
