import React from "react";
import { Cell, Grid, Row } from "@material/react-layout-grid";
import ListingItem from "./ListingItem";
import LinearProgress from "@material/react-linear-progress";

export default ({ listings }) => (
  <Grid style={{ flex: 1, maxWidth: "1080px" }}>
    <Row style={{ flex: 1, height: "100%" }}>
      {listings && listings.length ? (
        listings.map(listing => (
          <Cell key={listing.id} desktopColumns={3} phoneColumns={12} tabletColumns={5}>
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
