var express = require("express");
var fs = require("fs");
var router = express.Router();

const MEETINGS = [
  {
    id: 1,
    name: "The sales team meeting",
    information:
      "Presentation a new client to the team. Talk about Cornelia Corp deal.",
    personal: ["Steve Staley", "Milly Ashford", "Nina Fenette"],
    date: "Sun Dec 01 2018 15:08:51 GMT+0200 (Eastern European Standard Time)",
    location: "NY",
    isPassed: false,
    isCancel: false,
    display: true
  },
  {
    id: 2,
    name: "The contract negotiation",
    information:
      "Travis sent draft contract to Villetta (Beauty Investigation Corp.), and she’s looking for changes. First, she wants a better price. Second, she wants a change to the website.",
    personal: ["Steve Staley", "Travis Willingham", "Crispin Freeman"],
    date: "Sun Dec 01 2018 15:08:51 GMT+0200 (Eastern European Standard Time)",
    time: "13:00",
    location: "NY",
    isPassed: true,
    isCancel: false,
    display: true
  },
  {
    id: 3,
    name: "Web project planning",
    information:
      "The client has requested a mobile version of the site. The team needs to determine the deadline, technology and responsibilities among the team members.",
    personal: ["Travis Willingham", "Crispin Freeman"],
    date: "Sun Dec 01 2018 15:08:51 GMT+0200 (Eastern European Standard Time)",
    time: "13:00",
    location: "NY",
    isPassed: false,
    isCancel: false,
    display: true
  },
  {
    id: 4,
    name: "Presentation of new web project",
    information:
      "Travis wants to introduce a new project to his team. Responsibilities will be distributed at the meeting and deadlines set.",
    personal: ["Travis Willingham", "Doug Stone", "Steve Bulen"],
    date: "Sun Dec 01 2018 15:08:51 GMT+0200 (Eastern European Standard Time)",
    time: "13:00",
    location: "NY",
    isPassed: false,
    isCancel: false,
    display: true
  },
  {
    id: 5,
    name: "New project kickoff",
    information:
      "Web development team finished the project plan and now it’s time to get started. For junior developers and middle developers will be provided an action plan and an excursion into the new project.",
    personal: [
      "Travis Willingham",
      "Troy Baker",
      "Laura Bailey",
      "Sam Riegel",
      "Michelle Ruff"
    ],
    date: "Sun Dec 01 2018 15:08:51 GMT+0200 (Eastern European Standard Time)",
    time: "13:00",
    location: "NY",
    isPassed: true,
    isCancel: false,
    display: true
  },
  {
    id: 6,
    name: "The monthly decision making meeting",
    information:
      "The main task is to determine the plan and responsibility of working with a new client.",
    personal: ["Steve Staley", "Travis Willingham"],
    date: "Sun Dec 01 2018 15:08:51 GMT+0200 (Eastern European Standard Time)",
    time: "13:00",
    location: "NY",
    isPassed: false,
    isCancel: true,
    display: true
  },
  {
    id: 7,
    name: "Sales Demo Walk-Through",
    information:
      "Sales teem meet to prepare for the demo for a potential client.",
    personal: ["Steve Staley", "Milly Ashford", "Nina Fenette"],
    date: "Sun Dec 01 2018 15:08:51 GMT+0200 (Eastern European Standard Time)",
    location: "NY",
    isPassed: false,
    isCancel: false,
    display: true
  }
];

router.get("/", (req, res) => {
  res.json(MEETINGS);
});

router.post("/add", (req, res) => {
  const item = req.body;

  MEETINGS.push({
    id: item.id,
    name: item.name,
    information: item.information,
    personal: item.personal,
    date: item.date,
    isCancel: false,
    display: true
  });

  res.json({
    id: item.id
  });
});

router.post("/delete", (req, res) => {
  let id = req.body.id;

  for (let i = 0; i < MEETINGS.length; i++) {
    if (MEETINGS[i].id == id) {
      MEETINGS.splice(i, 1);
      break;
    }
  }

  res.json({
    id: id
  });
});

router.post("/toggleComplete", (req, res) => {
  let id = req.body.id;

  for (let i = 0; i < MEETINGS.length; i++) {
    if (MEETINGS[i].id == id) {
      MEETINGS[i].isCancel = !MEETINGS[i].isCancel;
      break;
    }
  }

  res.json({
    id: id
  });
});

module.exports = router;
