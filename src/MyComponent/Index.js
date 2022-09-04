import React, { Component } from 'react'

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '', content: '', selectedFont: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log("The changing value : ", event.target.value)
        this.setState({ value: event.target.value });
        this.handleChangeDropdown(this.state.selectedFont)
    }

    handleChangeDropdown = (val) => {
        if (val === "h1") {
            this.setState({ content: <h1> {this.state.value} </h1> });
        } else if (val === "h2") {
            this.setState({ content: <h2> {this.state.value} </h2> });
        } else if (val === "i") {
            this.setState({ content: <i> {this.state.value} </i> });
        } else if (val === "b") {
            this.setState({ content: <b> {this.state.value} </b> });
        } else if (val === "None") {
            this.setState({ content: this.state.value });
        }
        this.setState({ selectedFont: val });
        console.log("dropdown value : ", this.state.content)
    };

    render() {
        return (
            <>
                <Row className="g-3">
                    <Col md>
                    </Col>
                    <Col md>
                        <h4 className="success"> Bonatra-Task </h4>
                        <FloatingLabel
                            controlId="floatingTextarea"
                            label='Type "/" for commands'
                            className="mb-3"
                        >
                            <Form.Control as="textarea" placeholder="Leave a comment here" className="mb-3" type="text" placeholder='Type "/" for commands' value={this.state.value} onChange={this.handleChange} />
                        </FloatingLabel>

                        <Alert key="warning" variant="warning">
                            {this.state.content}
                        </Alert>

                        {this.state.value === "/" &&
                            <select onChange={(val) => this.handleChangeDropdown(val.target.value)}  >
                                <option value="None">None</option>
                                <option value="h1">Heading 1</option>
                                <option value="h2" >Heading 2</option>
                                <option value="i">Text Italic</option>
                                <option value="b">bold Text </option>
                            </select>
                        }
                    </Col>
                    <Col md>
                    </Col>
                </Row>
            </>
        );
    }
}


