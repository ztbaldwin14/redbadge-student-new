import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
  Container,
} from "reactstrap";
const Store = (props) => {
  return (
    <Container>
      <h2>This is our online store</h2>
      <CardGroup>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://source.unsplash.com/1600x900/?shoes"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">Shoes</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://source.unsplash.com/1600x900/?slippers"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">Slippers</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://source.unsplash.com/1600x900/?sandels"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">Sandals</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default Store;
