import React from "react"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function Project({ border, bg, title, text, image, href_app, href_code, stack }) {
    const appLink = () => {
        if (href_app !== null) {
            return <Button variant={border} href={href_app} target="_blank">See the app!</Button>
        } else {
            return null
        }
    }
    return (
        <Card style={{ width: '18rem' }} border={border} bg={bg}>
            <Card.Header as="h5">
                {title}
            </Card.Header>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Text>
                    <div style={{ color: 'grey' }}>{stack}</div><br />
                    {text}
                </Card.Text>
                <div class="card-links">
                    {appLink()}
                    <Button variant={border} href={href_code} target="_blank">See the code!</Button>
                </div>
            </Card.Body>
        </Card>
    );
}