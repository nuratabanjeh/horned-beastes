import React from "react";
import HornedBeasts from './HornedBeasts';
import DataRow from '../data.json';
import Row from 'react-bootstrap/Row';




class Main extends React.Component {


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