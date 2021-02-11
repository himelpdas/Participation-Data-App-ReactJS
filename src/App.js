import {Container, Row, Col, Jumbotron} from 'react-bootstrap'
import Header from "./components/Header";
import DataTable from "./components/DataTable";
import {PieChart} from "react-minimal-pie-chart"
import {useState} from 'react'
import {filter, map} from 'lodash'
import {pieDataFromState} from "./helpers/Graphing";

function App() {

    const [tableState, setTableState] = useState([]);

    const [fn, setFn] = useState("")
    const [ln, setLn] = useState("")
    const [hr, setHr] = useState("")

    const onSubmit = (e) => {
        console.log("submitted")
        if (fn === "" || ln === "" || hr === "") {
            alert("All fields required!")
        }
        fetch('http://127.0.0.1:3333/participation', {
            method: 'post',
            headers: {'content-type': "application/json"},
            body: JSON.stringify({
                firstname: fn,
                lastname: ln,
                hours: hr
            })
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(`inserted ${data}`)
            setTableState([...tableState, {firstname: fn, lastname: ln, hours: hr, id: data.id}])
        });
    }

    const onDelete = (e) => {
        console.log("Deleted")
        fetch(`http://127.0.0.1:3333/participation/${e.target.id}`, {
            method: 'delete',
            body: JSON.stringify({
                firstname: fn,
                lastname: ln,
                hours: hr
            })
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(`deleted ${data}`)
            const newTable = filter(tableState, function (o) {
                if (o.id !== data.id) return o;
            });
            console.log(JSON.stringify(newTable))
            setTableState(newTable)
        });
    }

    return (
        <div className="App">
            <Header tableState={tableState} setTableState={setTableState} fn={fn} ln={ln} hr={hr} setFn={setFn}
                    setLn={setLn} setHr={setHr} onSubmit={onSubmit}/>
            <Container>
                <Jumbotron style={{textAlign: "center"}}>
                    <h1>Participation Data App</h1>
                    <h5>
                        The app creates, demonstrates, and deletes users and the % of their participation.
                    </h5>
                </Jumbotron>
                <Row>
                    <Col sm={12} md={8}>
                        <DataTable tableState={tableState} setTableState={setTableState} fn={fn} ln={ln} hr={hr}
                                   setFn={setFn} setLn={setLn} setHr={setHr} onDelete={onDelete}/>
                    </Col>
                    <Col sm={12} md={4}>
                        <PieChart
                            data={pieDataFromState(tableState)}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
