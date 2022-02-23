import React, {Fragment} from "react";
import {useParams, Route, Link, useRouteMatch} from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import useHttp from "../hooks/use-http";
import {getSingleQuote} from "../lib/api";
import {useEffect} from "react/cjs/react.development";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const DUMMY_QUOTES = [
  {id: "q1", author: "Max", text: "learning react is fun"},
  {id: "q2", author: "Jax", text: "learning react is great"},
];

function QuotesDetail() {
  const params = useParams();
  const match = useRouteMatch();

  const {quoteId} = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!loadedQuote) {
    return <p>No quote Found!!</p>;
  }

  console.log(match.path);
  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
}

export default QuotesDetail;
