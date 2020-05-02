import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class Services extends Component {
    
    render() {
        let serviceTitle = this.props.match.params.service_title;
        let serviceBody = this.props.match.params.service_body;
        return (
            <div>
                <p>We provide: </p>
                <h3>{serviceTitle}</h3>
                <p>{serviceBody}</p>
                <Button variant="success">Success</Button>
            </div>
        )
    }
}

export default Services;
