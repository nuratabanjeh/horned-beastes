import React from "react";
import HornedBeasts from './HornedBeasts';
import DataRow from '../data.json';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = { numberOfHorned: "all" };
    }

    hornsChoosen = (event) => {
        this.setState({
            numberOfHorned: event.target.value,
        });
    };

    render() {
        return (
            <>
                <Form>
                    <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
                        <Form.Label>Select Number of Hornes</Form.Label>
                        <Form.Control as="select" custom onChange={this.hornsChoosen}>
                            <option value="all">All</option>
                            <option value="one">One</option>
                            <option value="two">Two</option>
                            <option value="three">Three</option>
                            <option value="100">wow</option>
                        </Form.Control>
                    </Form.Group>
                </Form>

                <Container>
                    <Row xs={1} md={3} className="g-4">
                        {DataRow
                            .filter((item) => {
                                if (this.state.numberOfHorned === "all") {
                                    return true;
                                } else if (this.state.numberOfHorned === "one") {
                                    return item.horns === 1;
                                } else if (this.state.numberOfHorned === "two") {
                                    return item.horns === 2;
                                } else if (this.state.numberOfHorned === "three") {
                                    return item.horns === 3;
                                } else {
                                    return item.horns === 100;
                                }
                            })
                            .map((item) => {
                                return (
                                    <HornedBeasts
                                        title={item.title}
                                        description={item.description}
                                        image_url={item.image_url}
                                    />
                                );
                            })}
                    </Row>
                </Container>
            </>
        );
    }
}
export default Main;