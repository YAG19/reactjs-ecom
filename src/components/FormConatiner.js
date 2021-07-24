import React from 'react'
import {Container , Row , Col} from 'react-bootstrap';

export const FormConatiner = ({children}) => {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} md={12}>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default FormConatiner;