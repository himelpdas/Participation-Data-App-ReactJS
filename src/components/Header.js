import {Button, Col, FormControl, InputGroup, Row} from "react-bootstrap";
import {useEffect, useState} from "react";

function Header(props){

    const [mounted, setMounted] = useState(false)

    function onFn(e) {
        console.log(e.target.value)
        props.setFn(e.target.value)
    }
    function onLn(e) {
        console.log(e.target.value)
        props.setLn(e.target.value)
    }
    function onHr(e) {
        console.log(e.target.value)
        props.setHr(e.target.value)
    }

    return <Row style={{margin: "50px"}}>
        <Col md={3} sm={6}>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">F</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl onChange={onFn}
                    placeholder="Firstname"
                    aria-label="Firstname"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
        </Col>
        <Col md={3} sm={6}>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">L</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl onChange={onLn}
                    placeholder="Lastname"
                    aria-label="Lastname"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
        </Col>
        <Col md={3} sm={6}>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">P</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type={"number"} onChange={onHr}
                    placeholder="Percent"
                    aria-label="Percent"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
        </Col>
        <Col md={3} sm={6}><Button style={{width: '100%'}} onClick={props.onSubmit}>Send</Button></Col>
    </Row>
}

export default Header;