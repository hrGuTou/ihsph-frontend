import React, { Component } from 'react';
import "../styles/Card.css";
import MyCard from '../components/card.js';
import HamMenu from '../components/hamMenu.js';
import {MDBContainer, MDBCol, MDBRow, MDBBreadcrumb, MDBBreadcrumbItem,Animation } from 'mdbreact';




//TODO:
// Add navagation or search function


class Clubs extends Component {
    render() {

       // let clubs = ["African Club","Chess Club","Chinese Club","Drama Club","Hatian Club","Math Club","Science Club"]

    return (
    <MDBContainer style={{marginTop:"7rem"}}>

<MDBBreadcrumb >
          <MDBBreadcrumbItem>Student Life</MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>Clubs</MDBBreadcrumbItem>
        </MDBBreadcrumb>

 <Animation type="zoomIn">
  <MDBRow>
    <MDBCol md="4">
        <MyCard imgUrl="https://lh6.googleusercontent.com/-KZAg0Ar5KZQ/TxCY-UwgxTI/AAAAAAAABVA/tlUR9x9_3ig/s400/100_0966.JPG"
        title="African Club"
        content="African club is directed by Mr. Adam. We meet every Friday at launch time. It is not only for Africans. Anyone can join it. 
        Start making a change in the world and share your culture with others.">
        </MyCard>
    </MDBCol>

    <MDBCol md="4">
    <MyCard imgUrl="https://sites.google.com/a/ihsph.org/ihs-ph/_/rsrc/1536301187664/home/clubs/chess-club/got-chess.jpg"
        title="Chess Club"
        content="Chess Club is directed by Mr. Brian. It meets every Wednesday After school from 3:15 to 5:00.">
        </MyCard>
    </MDBCol>

    <MDBCol md="4">
    <MyCard imgUrl="https://sites.google.com/a/ihsph.org/ihs-ph/_/rsrc/1536301187665/home/clubs/chinese-club/images.jpg"
        title="Chinese Club"
        content="Chinese Club is led by Ms. Yip">
        </MyCard>
    </MDBCol>
  </MDBRow>

  <MDBRow>
  <MDBCol md="4">
  <MyCard imgUrl="https://sites.google.com/a/ihsph.org/ihs-ph/_/rsrc/1536301187665/home/clubs/drama-club/IMG_0038.JPG"
        title="Drama Club"
        content="Drama Club is led by English teacher Vadim Feyder. Drama Club meets every Thursday and Friday after school.">
        </MyCard>
    </MDBCol>

    <MDBCol md="4">
    <MyCard imgUrl="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" 
        title="Hatian Club" 
        content="Haitian club is directed by Ms. Youdelka. It meets every Friday after school from 3:30 to 5:00.">
        </MyCard>
    </MDBCol>

    <MDBCol md="4">
    <MyCard imgUrl="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
        title="Math Club"
        content="Math elective class is directed by Ms. Marcelle. It meets every Monday after school from 3:15 to 4:15. ">
        </MyCard>
    </MDBCol>
  </MDBRow>

<MDBRow>
<MDBCol md="4">
<MyCard imgUrl="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
        title="Science Club"
        content="Science club is directed by Ms. Jenny and Ms. Angela . It meets every Thursday after school from 3:30 to 5:00.">
        </MyCard>
    </MDBCol>
  </MDBRow>
  </Animation>
</MDBContainer>
    )
  }
  }

  export default Clubs; 