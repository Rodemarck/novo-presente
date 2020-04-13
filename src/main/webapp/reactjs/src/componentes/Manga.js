import React, {Component} from "react";
import {
    Col,
    Container, Image,
    Row
} from 'react-bootstrap';
class Manga extends Component{
    render() {
        return (
            <Container>
                <Row>
                    <Col md={4}>
                        alguma coisa aleatoria = [{this.props.nome}]
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Manga;