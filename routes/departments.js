var express = require("express");
var fs = require("fs");
var router = express.Router();

const DEPARTMENTS = [
  {
    name: "Sales",
    quantity: 2,
    positions: ["Sales manager"]
  },
  {
    name: "Human resources",
    quantity: 1,
    positions: ["Human resource manager"]
  },
  {
    name: "Project management",
    quantity: 2,
    positions: [
      "Sales project management",
      "Web development project management"
    ]
  },
  {
    name: "Web development",
    quantity: 7,
    positions: [
      "Web development team leader",
      "Senior full stack developer",
      "Senior front end developer",
      "Middle back end engineer",
      "Middle front end engineer",
      "Junior front end engineer",
      "Junior back end engineer"
    ]
  }
];

router.get("/", (req, res) => {
  res.json(DEPARTMENTS);
});

router.post("/add", (req, res) => {
  const item = req.body;

  DEPARTMENTS.push({
    id: item.id,
    name: item.name,
    quantity: item.quantity,
    positions: item.positions
  });

  res.json({
    id: item.id
  });
});

router.post("/delete", (req, res) => {
  let id = req.body.id;

  for (let i = 0; i < DEPARTMENTS.length; i++) {
    if (DEPARTMENTS[i].id == id) {
      DEPARTMENTS.splice(i, 1);
      break;
    }
  }
  res.json({
    id: id
  });
});

module.exports = router;
