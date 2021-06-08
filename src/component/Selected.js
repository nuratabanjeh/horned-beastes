import React from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
class Selected extends React.Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.closing}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card bg='dark' text='light'>
                        <Card.Img variant="top" src={this.props.image_url} alt={this.props.title} title={this.props.title} />
                    </Card>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>{this.props.description}</Card.Text>
                    </Card.Body>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.closing}>
                        Close
          </Button>

                </Modal.Footer>
            </Modal>
        );
    }

}
export default Selected;