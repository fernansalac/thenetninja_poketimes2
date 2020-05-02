import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class Services extends Component {
    
    render() {
        let serviceName = this.props.match.params.service_name;
        return (
            <div>
                <p>We provide: </p>
                <p>{serviceName}</p>
                <Button variant="success">Success</Button>
            </div>
        )
    }
}

export default Services;
