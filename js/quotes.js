const quotes = [
    {
        quotes: "You get what you pay for",
        author: "Elon Musk"
    },
    {   
        quotes: "Done is better than perfect",
        author: "Mark Zukerberg"
    },
    {
        quotes: "When you have faults, do not fear to abnadon them",
        author: "Confucius"
    },
    {
        quotes: "Age is no guarantee of maturity.",
        author: "Lawana Blackwell"
    },
    {
        quotes: "The greatest glory in living lies not in never falling, but in rising every time we fall. ",
        author: "Nelson Mandela"
    },
    {
        quotes: "This too shall pass.",
        author: "Et hoc transibit"
    },
    {
        quotes: "Only I can change me life, no one can do it for me",
        author: "Carol Burnett"
    },
    {
        quotes: "The die is cast.",
        author: "Julius caesar"
    },
    {
        quotes: "Life is unfair, get used to it.",
        author: " Bill Gates"
    },
    {
        quotes: "Veni Vidi Vici",
        author: "Julius caesar"
    }
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const len = quotes.length;
const todayQuote = quotes[Math.floor(Math.random() * len)];

quote.innerText = todayQuote.quotes;
author.innerText = todayQuote.author; 