import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
interface InfoCardProps {
  title: string;
  subtitle: string;
  text: string;
  picture: string;
}
const InfoCard = (props: InfoCardProps) => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src={`https://source.unsplash.com/1600x900/?${props.picture}`}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {props.subtitle}
          </CardSubtitle>
          <CardText>{props.text}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default InfoCard;
