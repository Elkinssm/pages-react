import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

export default class CustomAccordion extends React.Component {
  constructor(props) {
    super(props);
    console.log("asdasf",this.props.tabs);
    
  }

  render() {
    return (
      <div>
        <Accordion>
          {
            this.props.tabs.map((item, i) => (
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={i}>
                  {item.title}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={i}>
                <Card.Body>{item.text} </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))
          }
        </Accordion>
      </div>
    );
  }
}
