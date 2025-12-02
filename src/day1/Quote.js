import quoteData from '../data/quoteData.json'
const Quote = () => {
    //숫자를 random처리 : Math.random
    const index = Math.floor(Math.random()*quoteData.length);
    const data = quoteData[index];
  return (
    <div id="qoute-page">
        <p>{data.text}</p>
        <small>-{data.author}</small>
    </div>
  )
}

export default Quote