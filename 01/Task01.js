import React from 'react';

import Alert from './../src/components/Alert';
import { Row, Col, Alert as RBAlert } from 'react-bootstrap';


const Task01 = () => {
    return (
        <Row>
            <Col>
                <RBAlert >Uwaga! <em>Styled Components</em> nadchodzi!</RBAlert>
                <RBAlert variant="primary">Uwaga! <em>Styled Components</em> nadchodzi!</RBAlert>
                <RBAlert variant="secondary">Uwaga! <em>Styled Components</em> nadchodzi!</RBAlert>
            </Col>
            <Col>
                <Alert>Uwaga! <em>Styled Components</em> nadchodzi!</Alert>
                <Alert variant="primary">Uwaga! <em>Styled Components</em> nadchodzi!</Alert>
                <Alert variant="secondary">Uwaga! <em>Styled Components</em> nadchodzi!</Alert>
            </Col>
        </Row>
    )
}

export default Task01;

