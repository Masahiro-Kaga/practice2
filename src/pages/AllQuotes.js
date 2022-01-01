import QuoteList from '../components/quotes/QuoteList'

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

const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES}></QuoteList>
    )
}

export default AllQuotes
