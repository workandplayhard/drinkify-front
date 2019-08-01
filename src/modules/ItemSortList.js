import React, {Component} from 'react';
import ItemCard from "./ItemCard";
import CardDeck from 'react-bootstrap/CardDeck';
import Container from "react-bootstrap/Container";

class ItemSortList extends Component {
    render() {
        var sorted = this.props.sorteditems.reverse()
            .map(function(sortedItem) {
                return (<ItemCard item={sortedItem} key={sortedItem.id}/>);
            });
        return(
            <div id="SortedDeck">
                <Container>
                    <CardDeck className="itemsortlist">
                        {sorted}
                    </CardDeck>
                </Container>
            </div>
        );
    }
}

export default ItemSortList;