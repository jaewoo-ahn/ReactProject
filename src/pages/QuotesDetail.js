import React, {Fragment} from "react";
import {useParams, Route} from "react-router-dom";

import Comments from "../components/comments/Comments";

function QuotesDetail() {
  const params = useParams();
  return (
    <Fragment>
      <h1>QuotesDetail</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
}

export default QuotesDetail;
