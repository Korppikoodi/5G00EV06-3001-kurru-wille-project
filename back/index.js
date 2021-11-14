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

app.get("/search", async (req, res) => {
    const raw = `search "${req.query.search}"; fields *;`
    const response = await axios.post(
        "https://api.igdb.com/v4/games",
        raw,
        {headers: {
            'Client-ID': process.env.client,
            'Authorization': `Bearer ${process.end.token}`,
        }}
      )
    res.status(200).send(response.data)
});

app.get("/specific/:path", async (req, res) => {
  const raw = `fields ${req.query.key}; where id=(${req.query.where});`
    const response = await axios.post(
      `https://api.igdb.com/v4/${req.params.path}`,
        raw,
        {headers: {
            'Client-ID': process.env.client,
            'Authorization': `Bearer ${process.end.token}`,
        }}
      )
    res.status(200).send(response.data)

})

app.listen(port, () => {})