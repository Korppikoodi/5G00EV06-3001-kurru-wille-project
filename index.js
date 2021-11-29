const express = require("express")
const axios = require("axios")
const app = express()
const port = process.env.PORT || 3000;
const { json, urlencoded } = require("body-parser");
const cors = require("cors")

app.use(express.static("public"));

var corsOptions = {
  origin: '*',
  methods: 'GET'
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }));
// this endpoint is used to fetch list of games that matches search string
// the maxium return amount is 10 results if i wanted more i would need to use paging
// but i decided that is not needed as user should be searching specific game anyway
app.get("/search", async (req, res) => {
    const raw = `search "${req.query.search}"; fields *;`
    const response = await axios.post(
        "https://api.igdb.com/v4/games",
        raw,
        {headers: {
            'Client-ID': process.env.client,
            'Authorization': `Bearer ${process.env.token}`,
        }}
      )
    res.status(200).send(response.data)
});

// this endpoint is used to fetch all different parts of data based on id
app.get("/specific/:path", async (req, res) => {
  const raw = `fields ${req.query.key}; where id=(${req.query.where});`
    const response = await axios.post(
      `https://api.igdb.com/v4/${req.params.path}`,
        raw,
        {headers: {
            'Client-ID': process.env.client,
            'Authorization': `Bearer ${process.env.token}`,
        }}
      )
    res.status(200).send(response.data)

})

app.listen(port, () => {})