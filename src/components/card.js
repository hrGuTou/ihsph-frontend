import React, { Component } from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, Col, Row, MDBContainer, MDBCol, MDBRow, MDBCardHeader, MDBCard } from 'mdbreact';

/*
    接收 <MyCard imgUrl="" title="" content="" linkTo="">
*/


class MyCard extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Card>
                <CardImage
                    className="img-fluid"
                    src={this.props.imgUrl}
                    waves={false}
                    style={{ width: "100%", height: "100%" }}
                />
                <CardBody>
                    <CardTitle>{this.props.title}</CardTitle>
                    <CardText>
                        {this.props.content}
                    </CardText>
                    <Button href={this.props.linkTo}>Learn More</Button>
                </CardBody>
            </Card>

        )
    }

}


export default MyCard;