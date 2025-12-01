const express = require("express");
const app = express();

const path = require("path");

const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("index", { title: "hello from index page", messages });
});
app.get("/new", (req, res) => {
    res.render("new", { title: "hello from new message page" });
});
app.get("/new/:id", (req, res) => {
    res.render("message", { title: "hello from details message page", messages, id: req.params.id });
});



app.post("/new", (req, res) => {
    console.log(req.body);
    messages.push({ text: req.body.message, user: req.body.user, added: new Date() });
    res.redirect("/");
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});