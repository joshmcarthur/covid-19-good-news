import React from "react";
import { Cell, Grid, Row } from "@material/react-layout-grid";
import ListingItem from "./ListingItem";
import LinearProgress from "@material/react-linear-progress";

export default ({ listings }) => (
  <Grid style={{ flex: 1 }}>
    <Row style={{ flex: 1, height: "100%" }}>
      {listings && listings.length ? (
        listings.map(listing => (
          <Cell key={listing.id} desktopColumns={2} phoneColumns={12} tabletColumns={6}>
            <ListingItem listing={listing} />
          </Cell>
        ))
      ) : (
        <>
          <Cell columns={4} />
          <Cell align="middle" columns={4}>
            <LinearProgress indeterminate={true} />
          </Cell>
          <Cell columns={4} />
        </>
      )}
    </Row>
  </Grid>
);
