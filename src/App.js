import React, { useState, useEffect, useCallback } from "react";
import Chrome from "./Chrome";
import Listing from "./Listing";
import "./App.scss";

const process = listing => {
  if (listing.kind !== "Listing") {
    throw new Error("Unexpected Reddit response: " + listing.kind);
  }

  let children = listing.data.children.map(child => child.data);
  if (!children || !children.length) {
    throw new Error("Expected post to have children, but it had none.");
  }

  return { results: children.filter(child => child.link_flair_text === "Good News"), lastRef: listing.data.after };
};

const parse = req => req.json();
const DEBOUNCE = 3000;
const initialPageSize = 50;

let listingsCount = 0;


function App() {
  const [lastRef, setLastRef] = useState();
  const [listings, setListings] = useState([]);
  useEffect(() =>  { listingsCount = listings.length; }, [listings]);
  const load = useCallback(
      () =>
        fetch(`https://www.reddit.com/r/coronavirus.json?after=${lastRef}`)
          .then(parse)
          .then(process)
          .then(({ results, lastRef: newLastRef }) => {
            setListings(l => l.concat(results));
            listingsCount < initialPageSize ? setLastRef(newLastRef) : setTimeout(() => setLastRef(newLastRef), DEBOUNCE);
          }),
      [lastRef]
    );

  // useEffect(() => {
  //   load();
  // }, [load]);
  useEffect(() => {
    load();
  }, [load]);

  return (
    <Chrome>
      <Listing listings={listings} />
    </Chrome>
  );
}

export default App;
