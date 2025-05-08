const express =require("express");

const app = express();

app.use(express.text());

let notes = [];

/**
 * GET /notes
 * @tag Notes
 * @summary List all notes
 * @response 200 - OK
 */
 

app.get("/notes", (req, res) => {
    res.json(notes);
});


/**
 * POST /notes
 * @tag Notes
 * @summary Create a note
 * @description Create a new **note**.
 * @bodyContent (string) text/plain
 * @bodyRequired
 * @response 200 - OK
 */
app.post("/notes", (req, res) => {
    notes.push(req.body);
    res.sendStatus(200);
})

app.listen(4000, () => {
    console.log("listening on 4000");
});

 