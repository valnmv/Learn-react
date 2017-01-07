import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const ItemCard = ({ params: { _id } }) => (
  <Card>
    <CardTitle title="Item" subtitle={_id} />
    <CardText />
  </Card>
);

ItemCard.propTypes = {
  params: PropTypes.object.isRequired
};

export default ItemCard;
