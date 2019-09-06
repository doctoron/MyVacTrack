import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import {
    Table,
    CardBody,
    Button

} from 'reactstrap';

const Vaccines = props => (
    <tr>
        {/* <td>{<a href="#">{props.vaccines.name}</a>}</td> */}
        <td><Button outline color='danger'>{props.vaccines.name}</Button></td>
        <td>{props.vaccines.dose}</td>
        <td>
            <Link to={"/edit/" + props.vaccines._id}>New Date</Link>
        </td>
    </tr>
)

export default class VaccineList extends Component {

    constructor (props) {
        super(props);
        this.state = { vaccines: [] };
    }

    componentDidMount () {
        Axios.get('/api/vaccines')
            .then(res => {
                this.setState({ vaccines: res.data });
            })
            .catch(err => {
                console.log('Oh oh, something must have gone wrong', err)
            })
    }


    vaccineTodoList () {
        console.log(this.state.vaccines);
        return this.state.vaccines.map(function (currentVaccines, i) {
            return <Vaccines vaccines={currentVaccines} key={i} />;
        });
    }

    render () {
        return (
            <div>
                <CardBody>
                    <h3>Complete Vaccine List</h3>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Vaccine Name</th>
                                <th>Dose</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.vaccineTodoList()}
                        </tbody>
                    </Table>
                </CardBody>
            </div>

        )
    }

}