const url = "https://api.quotable.io/random";

const newQuoteBtn = document.querySelector(".newQuote");
const dailyQuote = document.querySelector(".dailyQuote");
const authorName = document.querySelector(".authorName");
const tweetQuote = document.querySelector(".tweetQuote");
let quote;

async function getQuote() {
  const res = await fetch(url);
  const data = await res.json();
  quote = data.content;
  const author = data.author;
  dailyQuote.innerText = quote;
  authorName.innerText = author;
}
getQuote();

newQuoteBtn.addEventListener("click", getQuote);

tweetQuote.addEventListener("click", () => {
  if (quote === undefined || quote === "") {
    alert("Quote is not found");
  } else {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote}`,
      "Tweet Window",
      "width=400,height=400"
    );
  }
});
