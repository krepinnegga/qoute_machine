import React, {useState, useEffect, useRef} from 'react';
import { FaTwitter, FaTumblr } from 'react-icons/fa';

const Quotes = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const textRef = useRef();
    let colors = ["#ffff00", "#90ee90", "#ffa500", "ff68ff", "#a9a9e7", "#FFFFFF", "#0000FF", "#FF0000", "#808080","#FFFF00","#00FF00"];

    
    useEffect(() => {
        getQuote()
      }, []);

      useEffect(() => {
        textRef.current.style.color = colors[Math.floor(Math.random() * colors.length)]
      }, [quote])
   
      const getQuote = () => {
        let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
        fetch(url)
          .then(res => res.json())
          .then(data => {
            let dataQuotes = data.quotes;
            let randomNum = Math.floor(Math.random() * dataQuotes.length);
            let randomQuote = dataQuotes[randomNum];
        
            setQuote(randomQuote.quote);
            setAuthor(randomQuote.author);
          })
      }
    
      const handleClick = () =>{
        getQuote();
      }

    return(
      <div id='quote-box'>
        <div id='text'>
            <p ref={textRef}>
             {quote}
            </p>
            </div>
        <div id='author'>
            <p>{author}</p>
        </div>     

        <div id='buttons'>
            <div id='social-media'>
                <a href = {`https://twitter.com/intent/tweet?text=${quote}`} target="_blank" rel='noopener noreferrer' id='tweet-quote' >
                    <span style={{color:"#fff", fontSize:"1.5rem"}}><FaTwitter/></span>
                </a>

                <a href = {`https://tumblr.com/new/quote=${quote}`} id='tweet-quote' >
                    <span style={{color:"#fff", fontSize:"1.5rem" }}><FaTumblr /></span>
                </a>
            </div>
            <button onClick={handleClick} id='new-quote'>
                New Quote
            </button>
            </div>  
      </div>

    )
}

export default Quotes;