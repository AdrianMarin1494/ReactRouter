import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    {id: "q1", author: "Adrian", text: "Learning react"},
    {id: "q2", author: "Marin", text: "Learning angular"},
]

const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES}/>
    );
};

export default AllQuotes;