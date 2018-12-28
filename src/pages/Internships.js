import React, { Component } from 'react';
import {
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBCol,
  MDBContainer,
  Animation,
  MDBBreadcrumb,
  MDBBreadcrumbItem
} from "mdbreact";
import ListGroup from '../components/listGroup.js';


class Internships extends Component {
    constructor(props){
      super(props);
      this.state ={
        activeItem:"1"
      }

    }



toggle = (tab) => {
  if (this.state.activeItem !== tab) {
    this.setState({
      activeItem: tab
    });
  }
}

    render(){
      let display;

      if (this.state.activeItem==1){
        display = <ListGroup  title="Software Engineer Intern - Vertica Ecosystem" location="New York, NY" description="
        Vertica is seeking Software Engineer Intern - Ecosystem for Summer2019 based in Cambridge, MA to join the Vertica development team. As an ecosystem software engineer, you work at the intersection of the applications and systems software realms, designing in-database features, new APIs, and integration software to connect Vertica with other data processing systems like apache Spark and Kafka. The products and features you create enable all users of Vertica - developers, DBA's and end users alike - to leverage the full power of the industry-leading Vertica Analytic database.
        "/>    
        } else if( this.state.activeItem==2){
        display =  <ListGroup title="Summer 2019 Marketing Internship" location="Guardian Life Insurance Company - New York, NY" description="Our Internship Program is a paid 10-week learning experience where you will be immersed in the daily environment of a thriving Fortune 250 global financial services company.
        You will gain invaluable industry and organizational knowledge through daily business interactions and job assignments, in addition to engaging in projects that directly affect our business, interact with senior leaders in conversational settings, and network with employees and interns across our regional offices.
        Role Description" />
        } else if(this.state.activeItem==3){
          display =  <ListGroup title="Summer Internship" location="CareerUp - New York, NY" description="Would you like to gain international business skills while having an amazing travel experience? Consider Interning Abroad in one of the world's fastest-growing regions.
          Tesla, EY, Amazon and many others are looking for summer interns to fill positions in their international offices. These companies have partnered with CareerUp to help them recruit talented college students and young professionals." />
        }




      return(
        
        
        <MDBContainer style={{marginTop:"7rem" }}>

<MDBBreadcrumb >
          <MDBBreadcrumbItem>Student Life</MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>Internships</MDBBreadcrumbItem>
        </MDBBreadcrumb>


          <MDBRow>
        <MDBCol md="3" >
        <MDBContainer>
            <MDBListGroup>
              <MDBListGroupItem href="#"  onClick={()=> {
                  this.toggle("1");
                  }} >Computer Science</MDBListGroupItem>
              <MDBListGroupItem href="#" onClick={()=> {
                  this.toggle("2");
                  }} >Business</MDBListGroupItem>
              <MDBListGroupItem href="#" onClick={()=> {
                  this.toggle("3");
                  }} >Accounting</MDBListGroupItem>
            </MDBListGroup>
      </MDBContainer>
      </MDBCol>

      <MDBCol  md="9" >
     
     <Animation  type="zoomIn">
        {display}
        </Animation>


       </MDBCol>
      </MDBRow>
      </MDBContainer>
      );
    }
}

export default Internships;