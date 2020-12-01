import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoBagRemove } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { GrSchedulePlay } from "react-icons/gr";
import { AiOutlineSearch } from "react-icons/ai";
import abdul from "../components/abdul.jpeg";
import "./styles/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WorkAlert from "./WorkAlert";
import {
  Container,
  DropdownButton,
  Col,
  Dropdown,
  Button,
  Image,
  Row,
} from "react-bootstrap";

// fetch("https://striveschool-api.herokuapp.com/api/product/", {
//   headers: {
//     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiYzY1ODRiY2RlMTAwMTc2MTZhOTEiLCJpYXQiOjE2MDUwOTI5NTIsImV4cCI6MTYwNjMwMjU1Mn0.167moYNgptnQpkntwtLaEyr3cDG3_2 - rg9gOnjJ4syQ"
//   }
// }

class Navbar extends React.Component {
  state = {
    user: "",
  };

  componentDidMount = () => {
    this.fetchProfile();
  };

  fetchProfile = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_BE_URL}`,
          },
        }
      );
      const parsedResponse = await response.json();
      console.log(parsedResponse, "parsedResponse");
      this.setState({ user: parsedResponse });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container fluid className="main-container">
        <div className="header container-lg">
          <div className="navbar-left">
            <AiFillLinkedin className="Linkedin-icon" />

            <div className="search-input">
              <AiOutlineSearch />
              <input type="text" placeholder="search" />
            </div>
          </div>

          <div className="navbar-right">
            <div className="navbar-home mx-3 text-center">
              <AiFillHome className="icon" />
              <h5
                style={{
                  fontSize: 12,
                  letterSpacing: 1,
                  marginTop: 4,
                  fontWeight: 400,
                }}
              >
                Home
              </h5>
            </div>
            <WorkAlert />
            <div className="navbar-network mx-3 text-center">
              <BsFillPeopleFill className="icon" />
              <h5
                style={{
                  fontSize: 12,
                  letterSpacing: 1,
                  marginTop: 4,
                  fontWeight: 400,
                }}
              >
                Network
              </h5>
            </div>
            <div className="navbar-work mx-3 text-center">
              <IoBagRemove className="icon" />
              <h5
                style={{
                  fontSize: 12,
                  letterSpacing: 1,
                  marginTop: 4,
                  fontWeight: 400,
                }}
              >
                Work
              </h5>
            </div>
            <div className="navbar-msg mx-3 text-center">
              <AiFillMessage className="icon" />
              <h5
                style={{
                  fontSize: 12,
                  letterSpacing: 1,
                  marginTop: 4,
                  fontWeight: 400,
                }}
              >
                Messagges
              </h5>
            </div>
            <div className="navbar-notifications mx-3 text-center">
              <IoMdNotifications className="icon" />
              <h5
                style={{
                  fontSize: 12,
                  letterSpacing: 1,
                  marginTop: 4,
                  fontWeight: 400,
                }}
              >
                Notifications
              </h5>
            </div>
            <div className="navbar-profile-menu mx-3 text-center">
              {/* <CgProfile className="icon" /> */}
              <img src={abdul} alt="" />
              <Dropdown alignRight>
                <Dropdown.Toggle id="dropdown-menu-align-right" title="Me">
                  Me
                </Dropdown.Toggle>
                <Dropdown.Menu id="meMenu" style={{ minWidth: "300px" }}>
                  {this.state.user ? (
                    <>
                      <Dropdown.Item
                        eventKey="1"
                        style={{ padding: "4px 12px" }}
                      >
                        <div className="d-flex">
                          <img
                            src={this.state.user.image}
                            alt=""
                            width="56px"
                          />

                          <div className="pl-1 d-flex flex-column justify-content-center">
                            <h6>
                              {this.state.user.name +
                                " " +
                                this.state.user.surname}
                            </h6>
                            <h6>{this.state.user.title}</h6>
                          </div>
                        </div>
                      </Dropdown.Item>
                    </>
                  ) : (
                    <>
                      <Dropdown.Item eventKey="1">Image</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Full Name</Dropdown.Item>
                      <Dropdown.Item eventKey="3">Job Title</Dropdown.Item>
                    </>
                  )}

                  <Dropdown.Item eventKey="4">
                    <Button id="profileButton">View Profile</Button>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Account</Dropdown.Header>
                  <Dropdown.Item eventKey="5">Access My Premium</Dropdown.Item>
                  <Dropdown.Item eventKey="6">Settings & Privacy</Dropdown.Item>
                  <Dropdown.Item eventKey="7">Help</Dropdown.Item>
                  <Dropdown.Item eventKey="8">Language</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Manage</Dropdown.Header>
                  <Dropdown.Item eventKey="9">Posts & Activity</Dropdown.Item>
                  <Dropdown.Item eventKey="10">
                    Job Posting Account
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="11">Sign Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="side-menu mx-4">
              <div className="products-menu text-center">
                <CgMenuGridR className="icon mx-4" />
                <h5
                  style={{
                    fontSize: 10,
                    letterSpacing: 1,
                    marginTop: 4,
                    fontWeight: 400,
                  }}
                >
                  Products
                </h5>
              </div>
              <div className="courses-menu text-center">
                <GrSchedulePlay className="icon" />
                <h5
                  style={{
                    fontSize: 10,
                    letterSpacing: 1,
                    marginTop: 4,
                    fontWeight: 400,
                  }}
                >
                  Courses
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Navbar;
