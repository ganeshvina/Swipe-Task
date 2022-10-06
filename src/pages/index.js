import React, { useRef, useState, useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Modal } from 'react-bootstrap';
import './styles.css'
// import document from './document.pdf'

const Home = (props) => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

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

    useEffect(() => {
        if (!props.location.state) {
            props.history.push('/')
        } else {
            setcompanyDetails(props.location.state.companyDetails)
            setcustomerDetails(props.location.state.customerDetails)
            setproductDetails(props.location.state.productDetails)
        }
    }, [props.history]);

    const html = `<center>
    <table>
        <tr>
            <td colSpan="4" rowSpan="3">
                <b>
                 ${companyDetails.name}
                </b><br />
                ${companyDetails.address}<br/>
                Contact Number: ${companyDetails.mobile}<br/>
                Email: ${companyDetails.email}<br/>
                ${companyDetails.website}
            </td>
            <td colSpan="2">
                Voucher No.<br/>
                <b>1</b>
            </td>
            <td colSpan="2">
                Dated<br/>
                <b>${new Date(Date.now())}</b>
            </td>
        </tr>
        <tr>
            <td colSpan="2"></td>
            <td colSpan="2">
                <b>15 Days via cheque</b>                
            </td>
        </tr>
        <tr>
            <td colSpan="2">
                Circular No.<br/>
                <b>1</b>
            </td>
            <td colSpan="2">Other Reference(s)</td>
        </tr>
        <tr>
            <td colSpan="4" rowSpan="2">
                Dispatch To<br/>
                <b> ${customerDetails.name} </b><br/>
                ${customerDetails.address}<br/>
                ${customerDetails.mobile}<br/>
                ${customerDetails.email}
            </td>
            <td colSpan="2">Dispatch through <br/> <b> By Road </b></td>
            <td colSpan="2">Destination</td>
        </tr>
        <tr>
            <td colSpan="4" rowSpan="2">
                Terms of Delivery<br/>
                <b>Ex-Factory Delivery</b>  
            </td>
        </tr>
        <tr>
        <td colSpan="4" >
        Dispatch To<br/>
        <b> ${customerDetails.name} </b><br/>
        ${customerDetails.address}<br/>
        ${customerDetails.mobile}<br/>
        ${customerDetails.email}
    </td>
        </tr>
        <tr>
            <td>SL</td>
            <td>Items</td>
            <td>Due DT</td>
            <td>Qty</td>
            <td>Rate</td>
            <td>Per</td>
            <td>Dis%</td>
            <td>Amt</td>
        </tr>
        <tr>
            <td>1</td>
            <td>${productDetails.p1Name}</td>
            <td>3 Days</td>
            <td>${productDetails.p1Quantity} Nos</td>
            <td>7020</td>
            <td>Nos</td>
            <td>10%</td>
            <td>70000</td>
        </tr>
        <tr>
            <td>2</td>
            <td>${productDetails.p2Name}</td>
            <td>3 Days</td>
            <td>${productDetails.p2Quantity} Nos</td>
            <td>8000</td>
            <td>Nos</td>
            <td>10%</td>
            <td>80000</td>
        </tr>
        <tr>
            <td colSpan="3">Total</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>1,50,000</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td colSpan="4" rowSpan="4"></td>
        </tr>
        <tr>
            <td colSpan="4">${companyDetails.name}</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table>
</center>`
    return (

        <div className='container' >
            <center>
                <div ref={componentRef} style={{ marginTop: '50px', marginBottom: '50px' }} dangerouslySetInnerHTML={{ __html: html }}>
                </div>
                <Button onClick={handlePrint} style={{ marginRight: '30px', padding: '10px 20px' }}>Download</Button>
                <ViewPdf html={html} />
            </center>
        </div >
    );
};


function ViewPdf({ html }) {
    const [show, setshow] = useState(false);
    const handleClose = () => setshow(false);

    return (
        <>
            {/* //eslint-disable-next-line */}
            <Button className='btn btn-primary' onClick={() => setshow(true)} style={{ marginRight: '30px', padding: '10px 20px' }}>View PDF</Button>
            <Modal show={show} size="lg" onHide={handleClose} keyboard={false} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Body>
                    <div classNameName='container' style={{ margin: '80px' }} dangerouslySetInnerHTML={{ __html: html }}>

                    </div><br />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Home;