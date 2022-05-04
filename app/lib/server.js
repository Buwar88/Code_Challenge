const ExplorerController = require("./../controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});
app.get("/v1/students/students", (request, response) => {
    const listStudents = ExplorerController.allStudents();
    response.json({Lista:listStudents});
});
app.get("/v1/students/certification/email", (request, response) => {
    const listEmail = ExplorerController.emailWithCertification(true);
    response.json({Lista: listEmail});
});
app.get("/v1/students/credits/above500", (request, response) =>{
    const listAbove500 = ExplorerController.above500Students(500);
    response.json({Lista: listAbove500});
});