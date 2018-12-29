
import React, { Component } from 'react';
import { Animation, MDBContainer, MDBAlert, MDBBreadcrumb, MDBBreadcrumbItem } from 'mdbreact';

class Activities extends Component {
  render() {
    return (


      <MDBContainer>



        <MDBBreadcrumb >
          <MDBBreadcrumbItem>Student Life</MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>Activities</MDBBreadcrumbItem>
        </MDBBreadcrumb>
        <Animation type="zoomIn">
          <MDBAlert color="success" >
            <h4 className="alert-heading">Nothing Here!</h4>
            <p>This is activities page.</p>
            <hr />
            <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
          </MDBAlert>
        </Animation>
      </MDBContainer>

    );
  }
}

export default Activities; 