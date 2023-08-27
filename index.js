import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }));



//-----------------------------------------------------
// Array of month names
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Array of day names
const dayNames = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

// Create a new Date object
const currentDate = new Date();

// Get day of the week (0 - 6)
const dayOfWeek = currentDate.getDay();

// Get month (0 - 11)
const month = currentDate.getMonth();

// Get day of the month
const dayOfMonth = currentDate.getDate();

// Construct the formatted date string
const formattedDate = `${dayNames[dayOfWeek]}, ${monthNames[month]} ${dayOfMonth}, ${currentDate.getFullYear()}`;

//------------------------------------------------


const taskArray = [];

app.get("/", (req, res) => {
  res.render("index.ejs", { formattedDate, taskArray });
});


app.post("/", (req, res) => {
  const newItem = req.body["item"].trim();
    taskArray.push(newItem);
  res.redirect("/");
}
)

app.listen(port, () => {
  console.log(`Listening at port ${port}`)
})