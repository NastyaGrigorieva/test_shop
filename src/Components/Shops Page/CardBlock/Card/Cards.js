import React from 'react';
import {Button, Card} from "react-bootstrap";

import css from "./Card.module.css"


const Cards = () => {
    return (
        <div>
            <Card className={css.card} style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://oir.mobi/uploads/posts/2021-06/1623592961_11-oir_mobi-p-more-zakat-volni-priroda-krasivo-foto-11.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card className={css.card} style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://oir.mobi/uploads/posts/2021-06/1623592988_13-oir_mobi-p-more-zakat-volni-priroda-krasivo-foto-13.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card className={css.card} style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://oir.mobi/uploads/posts/2021-06/1623593023_47-oir_mobi-p-more-zakat-volni-priroda-krasivo-foto-53.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card className={css.card} style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://oir.mobi/uploads/posts/2021-06/1623593040_44-oir_mobi-p-more-zakat-volni-priroda-krasivo-foto-49.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cards;
