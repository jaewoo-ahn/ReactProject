import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {id: 1, author: "Max", text: "learning react is fun"},
  {id: 2, author: "Jax", text: "learning react is great"},
];

function AllQuotes() {
  return <QuoteList quotes={DUMMY_QUOTES} />;
}

export default AllQuotes;
