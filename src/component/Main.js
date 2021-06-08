import React from "react";
import HornedBeasts from './HornedBeasts';
import DataRow from '../data.json';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';



class Main extends React.Component {


    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         elementData: this.props.data
    //     };
    // }
    render() {


        return (<
            Row xs={1}
            md={3}
            className="g-4" >

            {
                DataRow.map((item) => {
                    return <
                        HornedBeasts title={item.title}
                        description={item.description}
                        image_url={item.image_url}
                        key={item.title}
                    />

                })
            } <
            /Row>
        )
    }
}

export default Main;