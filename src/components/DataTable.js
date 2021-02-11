import {Table, Button} from 'react-bootstrap'
import {useEffect, useState} from "react";
import {colorFromID} from '../helpers/Graphing'

function DataTable(props) {

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        if (mounted === false) {
            fetch("http://127.0.0.1:3333/participation")
                .then(res => res.json())
                .then(
                    (result) => {
                        props.setTableState([...props.tableState, ...result]);
                    },
                    (error) => {
                        console.log("there has been an error retrieving the hours")
                    }
                )
            setMounted(true)
        }
    });

    return <Table striped bordered hover>
        <thead>
        <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Hours</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        {props.tableState.map((value, index) => {
            return <tr key={value.id}>
                <td>{value.id} <span style={{color: colorFromID(`${value.id}`)}}>■</span></td>
                <td>{value.firstname}</td>
                <td>{value.lastname}</td>
                <td>{value.hours}</td>
                <td><Button id={value.id} onClick={props.onDelete}>Delete</Button></td>
            </tr>
        })}
        </tbody>
    </Table>
}

export default DataTable