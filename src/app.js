const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./db/conn");
const Student = require("./models/student");

app.get("/", (req, res) => {
  res.send("WE are at the /");
});

app.use(express.json());

//create new student

/*
app.post("/students", (req, res) => {
  console.log(req.body);

  const user = new Student(req.body);

  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
  // res.send("hello from me from /student"+req.body);
});
*/

app.post("/students", async (req, res) => {
  console.log(req.body);
  try {
    const user = new Student(req.body);
    const createuser = await user.save();
    res.status(202).send(createuser);
  } catch (e) {
    res.status(400).send(e);
  }
});
//all data of login information
app.get("/students", async (req, res) => {
  try {
    const studentsDB = await Student.find();
    res.status(200).send(studentsDB);
  } catch (e) {
    res.status(404).send(e);
  }
});

//individual data of a person 
app.get("/students/:id", async (req, res) => {
  try {
   const _id = req.params.id;
  //  console.log(_id);
  // Student.findById({_id:_id});
  const sDB=await Student.findById(_id);

  if(!sDB){

    return res.status(404).send(`DB is not present`);
  }else{
    res.send(sDB);
  }
  } catch (e) {
    res.status(404).send(e);
  }
});

app.listen(port, () => {
  console.log(`connection is setup ${port}`);
});
