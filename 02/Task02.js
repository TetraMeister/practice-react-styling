import React from 'react';

import Button from './../src/components/Button';
import { Row, Col, Button as RBButton } from 'react-bootstrap';

const Task02 = () => {
    return (
        <Row>
            <Col>
                <RBButton variant='primary' size='sm' active>Button!</RBButton>
                <RBButton variant='primary' size='sm' disabled>Button!</RBButton>
                <RBButton variant='primary' size='lg' active>Button!</RBButton>
                <RBButton variant='primary' size='lg' disabled>Button!</RBButton>
                <RBButton variant='secondary' size='sm' active>Button!</RBButton>
                <RBButton variant='secondary' size='sm' disabled>Button!</RBButton>
                <RBButton variant='secondary' size='lg' active>Button!</RBButton>
                <RBButton variant='secondary' size='lg' disabled>Button!</RBButton>
            </Col>
            <Col>
                <Button variant='primary' size='sm' active>Button!</Button>
                <Button variant='primary' size='sm' disabled>Button!</Button>
                <Button variant='primary' size='lg' active>Button!</Button>
                <Button variant='primary' size='lg' disabled>Button!</Button>
                <Button variant='secondary' size='sm' active>Button!</Button>
                <Button variant='secondary' size='sm' disabled>Button!</Button>
                <Button variant='secondary' size='lg' active>Button!</Button>
                <Button variant='secondary' size='lg' disabled>Button!</Button>
            </Col>
        </Row>
)
}

export default Task02;

