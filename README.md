# fe-nc-news

A single page web application serving as the front-end for Northcoders News - a social news aggregation, web content rating, and discussion website along the lines of Reddit.

Northcoders News has articles which are divided into topics. Each article has user curated ratings and can be up or down voted. The API allows users to add (and remove) comments about an article, which can also be up or down voted.

A deployed version can be found at https://djmac19-nc-news.netlify.com.

The back-end repository for this project can be found at https://github.com/djmac19/be-nc-news.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To run the project, you will need to have 'Node.js' (v12 or later) installed.

```
npm i node
```

### Installing

To get a development environment running...

Clone this repository:

```
git clone https://github.com/djmac19/fe-nc-news.git
cd fe-nc-news
```

Install dependencies:

```
npm i
```

Start application:

```
npm start
```

This will host the application locally on port 3000 and automatically open it in the browser (http://localhost:3000/).

## Built With

- [React](https://reactjs.org/docs/getting-started.html) - Javascript library/web framework
- [Reach Router](https://reach.tech/router) - routing
- [Axios](https://github.com/axios/axios) - HTTP client

## Authors

- **Daniel McEntee** - [djmac19](https://github.com/djmac19)

## Acknowledgments

This project was created as part of a portfolio piece on a coding bootcamp, so hat tip to [Northcoders](https://northcoders.com/)!
