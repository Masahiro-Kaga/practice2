import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";


const NewQuotes = () => {
    const history = useHistory();
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    history.push('/quote')
  };
  return <QuoteForm onAddQuote={addQuoteHandler}></QuoteForm>;
};

export default NewQuotes;
