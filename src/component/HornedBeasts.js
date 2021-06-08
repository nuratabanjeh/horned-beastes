import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Selected from "./Selected";

class HornedBeasts extends React.Component {

    constructor(props) {
        console.log("🚀 ~ file: HornedBeasts.js ~ line 11 ~ HornedBeast ~ constructor ~ props", props)
        super(props);
        this.state = {

            likes: 0,
            show: false,
        };
    }

    favorite = () => {
        this.setState({ likes: this.state.likes + 1 });
        this.showing();
    };

    showing = () => {
        this.setState({ show: true })

    }
    closing = () => {
        this.setState({ show: false })

    }
    render() {
        return (


            < div >
                <Col >
                    <Card style={
                        { width: '20rem' }
                    } bg='dark' text='light'>
                        <Card.Img variant="top"

                            onClick={this.favorite}
                            src={this.props.image_url}
                        />
                        < Card.Body >


                            <Card.Title > {this.props.title}< /Card.Title>

            <Card.Text >

                                    ❤️ = {this.state.likes}
                                </Card.Text>

                                <Card.Text > {this.props.description}
                                    < /Card.Text >
             < /Card.Body > 
             </Card>
                                < /Col >
                                <Selected show={this.state.show} closing={this.closing} title={this.props.title} image_url={this.props.image_url} description={this.props.description} />

            </div>
        )
    }

}

export default HornedBeasts;