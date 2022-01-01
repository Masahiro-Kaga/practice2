import React, { Fragment } from "react";
import { Route,useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [{
    id:'q1',
    author:'Max',
    text:'learning react is fun!'
},
{
    id:'q2',
    author:'Maximilian',
    text:'well well well'

}]

const QuoteDetails = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if(!quote){
      return <p>No quote found!</p>
  }

  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
      <HighlightedQuote text={quote.text} author={quote.author}></HighlightedQuote>
      <Route path={`/quotes/${params.quoteId}/comments`}>
      {/* <Route path='/quotes/:quoteId/comments'> */}
        <Comments></Comments>
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;
