import React from "react";
import { Container, Row } from "react-bootstrap";
import IndividualPerson from "./IndividualPerson";
import "./PeopleRelated.css";

class PeopleRelated extends React.Component {
  state = {
    other: [],
  };
  componentDidMount = () => {
    this.fetchProfiles();
  };
  fetchProfiles = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AUTHORIZATION_CODE}`,
          },
        }
      );
      let parsedResponse = await response.json();
      console.log(parsedResponse);
      this.setState({ other: parsedResponse });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <Container id="relatedGroup" className="my-3">
        <Row>
          <h5
            className="mb-0"
            style={{ paddingLeft: "15px", marginTop: "24px" }}
          >
            People you may know
          </h5>
        </Row>
        {this.state.other &&
          this.state.other.slice(5, 10).map((person, index) => (
            <>
              <IndividualPerson
                name={person.name}
                job={person.title}
                pic={person.image}
                key={person._id}
                divider={index === 4 ? false : true}
              />
            </>
          ))}
        {this.state.other.length === 0 && (
          <>
            <IndividualPerson
              name="Manuel Desole"
              job="Studente presso Accademia di belle arti mario sironi"
              pic="https://media-exp1.licdn.com/dms/image/C4D03AQG2hZXAmmDeXA/profile-displayphoto-shrink_200_200/0/1595170353862?e=1612396800&v=beta&t=5LCM0msit9z7xebYhNIuiF96c0rhx0a5Ny1SV1IjwKk"
            />
            <IndividualPerson
              name="Luis Antonio Canettoli Ordoñez"
              job="MERN Full Stack Developer | Technical Lead @ Clispo | Teaching Assistant @ Strive School"
              pic="https://media-exp1.licdn.com/dms/image/C4D03AQFcEwVHxUGnZA/profile-displayphoto-shrink_200_200/0?e=1612396800&v=beta&t=L_Eos43IkehfE1-Qf7OnRMfFh_b5Kap201EJlE6BTHc"
            />
            <IndividualPerson
              name="Manuel Desole"
              job="Studente presso Accademia di belle arti mario sironi"
              pic="https://media-exp1.licdn.com/dms/image/C4D03AQG2hZXAmmDeXA/profile-displayphoto-shrink_200_200/0/1595170353862?e=1612396800&v=beta&t=5LCM0msit9z7xebYhNIuiF96c0rhx0a5Ny1SV1IjwKk"
            />
            <IndividualPerson
              name="Manuel Desole"
              job="Studente presso Accademia di belle arti mario sironi"
              pic="https://media-exp1.licdn.com/dms/image/C4D03AQG2hZXAmmDeXA/profile-displayphoto-shrink_200_200/0/1595170353862?e=1612396800&v=beta&t=5LCM0msit9z7xebYhNIuiF96c0rhx0a5Ny1SV1IjwKk"
            />
            <IndividualPerson
              name="Manuel Desole"
              job="Studente presso Accademia di belle arti mario sironi"
              pic="https://media-exp1.licdn.com/dms/image/C4D03AQG2hZXAmmDeXA/profile-displayphoto-shrink_200_200/0/1595170353862?e=1612396800&v=beta&t=5LCM0msit9z7xebYhNIuiF96c0rhx0a5Ny1SV1IjwKk"
            />
          </>
        )}
      </Container>
    );
  }
}

export default PeopleRelated;