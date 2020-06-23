import React from "react"
import { Card, Button } from 'react-bootstrap/';
import "../App.css"


export default function Project({ border, bg, title, text, image, href_app, href_code, stack }) {
    const appLink = () => {
        if (href_app !== null) {
            return <Button variant={border} target="_blank" href={href_app}>App</Button>
        } else {
            return null
        }
    }
    return (
        <Card border={border} bg={bg}>
            <Card.Header as="h5">
                {title}
            </Card.Header>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Text style={{ color: 'grey' }}>{stack}</Card.Text><br />
                <Card.Text>{text}</Card.Text>
                <div className="card-links">
                    {appLink()}
                    <Button variant={border} href={href_code} target="_blank">Code</Button>
                </div>
            </Card.Body>
        </Card>
    );
}