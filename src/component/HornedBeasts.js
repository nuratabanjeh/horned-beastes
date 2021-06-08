import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

class HornedBeast extends React.Component {

    constructor(props) {
        console.log("🚀 ~ file: HornedBeasts.js ~ line 11 ~ HornedBeast ~ constructor ~ props", props)
        super(props);
        this.state = {

            likes: 0,
        };
    }

    favorite = () => {
        this.setState({ likes: this.state.likes + 1 });
    };

    render() {
        return (


            < div >
                <Col >
                    <Card style={
                        { width: '20rem' }
                    } >
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

            </div>
        )
    }

}

export default HornedBeast;