import React, { Component } from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";

//接收 <ListGroup title="" location="" description="">

class ListGroup extends Component{
    render(){
        return(
            <MDBRow>
              <MDBCol>
                <MDBJumbotron>
                  <h2>{this.props.title}</h2>
                  <h4>{this.props.location}</h4>
                  <hr className="my-2" />
                  <p>
                    {this.props.description}
                  </p>
                  <p className="lead">
                    <MDBBtn color="primary">Apply</MDBBtn>
                  </p>
                </MDBJumbotron>
              </MDBCol>
            </MDBRow>
        )
    }


}
export default ListGroup;
