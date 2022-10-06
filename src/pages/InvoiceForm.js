import React, { useState } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const InvoiceForm = (props) => {
    const [companyDetails, setcompanyDetails] = useState({
        name: "",
        address: "",
        mobile: "",
        email: "",
        website: ""
    });
    const [customerDetails, setcustomerDetails] = useState({
        name: "",
        address: "",
        mobile: "",
        email: "",
    });
    const [productDetails, setproductDetails] = useState({
        p1Name: "",
        p1Quantity: "",
        p2Name: "",
        p2Quantity: ""
    });

    return (
        <div className='container' style={{ marginTop: '20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px', textDecoration: 'underline' }}>INVOICE FORM</h2>
            <Form>
                <h3>Company Details</h3>
                <Row style={{ marginTop: '20px' }}>
                    <Col sm={4} >
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={(e) => setcompanyDetails({ ...companyDetails, name: e.target.value })} />
                        </Form.Group><br />
                    </Col>
                    <Col sm={4}>
                        <Form.Group>
                            <Form.Label>Address</Form.Label>
                            <Form.Control onChange={(e) => setcompanyDetails({ ...companyDetails, address: e.target.value })} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row style={{ marginTop: '20px' }}>
                    <Col sm={4} >
                        <Form.Group>
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control onChange={(e) => setcompanyDetails({ ...companyDetails, mobile: e.target.value })} />
                        </Form.Group><br />
                    </Col>
                    <Col sm={4}>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={(e) => setcompanyDetails({ ...companyDetails, email: e.target.value })} />
                        </Form.Group>
                    </Col>
                    <Col sm={4}>
                        <Form.Group>
                            <Form.Label>Website</Form.Label>
                            <Form.Control onChange={(e) => setcompanyDetails({ ...companyDetails, website: e.target.value })} />
                        </Form.Group>
                    </Col>
                </Row>
                <h3 style={{ marginTop: '20px' }}>Customer Details</h3>
                <Row style={{ marginTop: '20px' }}>
                    <Col sm={4} >
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={(e) => setcustomerDetails({ ...customerDetails, name: e.target.value })} />
                        </Form.Group><br />
                    </Col>
                    <Col sm={4}>
                        <Form.Group>
                            <Form.Label>Address</Form.Label>
                            <Form.Control onChange={(e) => setcustomerDetails({ ...customerDetails, address: e.target.value })} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row style={{ marginTop: '20px' }}>
                    <Col sm={4} >
                        <Form.Group>
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control onChange={(e) => setcustomerDetails({ ...customerDetails, mobile: e.target.value })} />
                        </Form.Group><br />
                    </Col>
                    <Col sm={4}>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={(e) => setcustomerDetails({ ...customerDetails, email: e.target.value })} />
                        </Form.Group>
                    </Col>
                </Row>
                <h3 style={{ marginTop: '20px' }}>Product Details</h3>
                <Row style={{ marginTop: '20px' }}>
                    <Col sm={2}>
                        <h5 style={{ marginTop: '40px' }}>Product 1:</h5>
                    </Col>
                    <Col sm={4} >
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={(e) => setproductDetails({ ...productDetails, p1Name: e.target.value })} />
                        </Form.Group><br />
                    </Col>
                    <Col sm={4}>
                        <Form.Group>
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control onChange={(e) => setproductDetails({ ...productDetails, p1Quantity: e.target.value })} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row style={{ marginTop: '20px' }}>
                    <Col sm={2}>
                        <h5 style={{ marginTop: '40px' }}>Product 2:</h5>
                    </Col>
                    <Col sm={4} >
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={(e) => setproductDetails({ ...productDetails, p2Name: e.target.value })} />
                        </Form.Group><br />
                    </Col>
                    <Col sm={4}>
                        <Form.Group>
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control onChange={(e) => setproductDetails({ ...productDetails, p2Quantity: e.target.value })} />
                        </Form.Group>
                    </Col>
                </Row>
                <center>
                    <Button style={{ margin: '40px 0px' }} onClick={() => props.history.push('/invoice', { customerDetails: customerDetails, companyDetails: companyDetails, productDetails: productDetails })}>Submit</Button>
                </center>
            </Form>
        </div>
    );
};

export default InvoiceForm;