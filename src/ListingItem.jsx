import React from "react";
import Card, {
  CardPrimaryContent,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionIcons,
} from "@material/react-card";

import {
  Body2,
} from '@material/react-typography';
import Button from '@material/react-button';


export default ({ listing }) => (
  <Card>
    <CardPrimaryContent>
      {listing.thumbnail && <CardMedia square imageUrl={listing.thumbnail} />}
      <Body2 style={{padding: '0.67rem'}}>{listing.title}</Body2>
    </CardPrimaryContent>

    <CardActions>
      <CardActionButtons>
        <Button href={`https://reddit.com${listing.permalink}`}>Source</Button>
      </CardActionButtons>

      <CardActionIcons>
        <Button outlined href={listing.url}>Read more</Button>

      </CardActionIcons>
    </CardActions>
  </Card>
);
