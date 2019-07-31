import React, {Component} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


class ItemCard extends Component {
    renderAvailability = (available) => {
        if (available) return <Card.Text className="available">Vapaa</Card.Text>
        else return <Card.Text className="notavailable">Varattu</Card.Text>
    };
    render() {
        console.log(this.props.item);
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/images/drill.jpg" />
                    <Card.Body>
                        <Card.Title>{this.props.item.name}</Card.Title>

                        <Card.Text>
                            {this.props.item.description}
                        </Card.Text>
                        <Card.Text>{this.props.item.category}</Card.Text>
                        {this.renderAvailability(this.props.item.available)}
                        <Button variant="primary">Haluan lainata</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default ItemCard;