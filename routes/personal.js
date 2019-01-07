var express = require("express");
var fs = require("fs");
var router = express.Router();

const PERSONAL = [
  {
    id: 1,
    name: "Milly",
    surname: "Ashford",
    department: "Sales",
    position: "Sales manager"
  },
  {
    id: 2,
    name: "Nina",
    surname: "Fenette",
    department: "Sales",
    position: "Sales manager"
  },
  /* HR */
  {
    id: 3,
    name: "Kate",
    surname: "Higgins",
    department: "Human resources",
    position: "Human resource manager"
  },
  /* Project Managment */
  {
    id: 4,
    name: "Steve",
    surname: "Staley",
    department: "Project management",
    position: "Sales project management"
  },
  {
    id: 5,
    name: "Travis",
    surname: "Willingham",
    department: "Project management",
    position: "Web development project management"
  },
  /* Web development */
  {
    id: 6,
    name: "Crispin",
    surname: "Freeman",
    department: "Web development",
    position: "Web development team leader"
  },
  {
    id: 7,
    name: "Steve",
    surname: "Bulen",
    department: "Web development",
    position: "Senior full stack developer"
  },
  {
    id: 8,
    name: "Doug",
    surname: "Stone",
    department: "Web development",
    position: "Senior front end developer"
  },
  {
    id: 9,
    name: "Troy",
    surname: "Baker",
    department: "Web development",
    position: "Middle back end engineer"
  },
  {
    id: 10,
    name: "Laura",
    surname: "Bailey",
    department: "Web development",
    position: "Middle front end engineer"
  },
  {
    id: 11,
    name: "Sam",
    surname: "Riegel",
    department: "Web development",
    position: "Junior front end engineer"
  },
  {
    id: 12,
    name: "Michelle",
    surname: "Ruff",
    department: "Web development",
    position: "Junior back end engineer"
  }
];

router.get("/", (req, res) => {
  res.json(PERSONAL);
});

router.post("/add", (req, res) => {
  const item = req.body;

  PERSONAL.push({
    id: item.id,
    name: item.name,
    surname: item.surname,
    department: item.department,
    position: item.position
  });

  res.json({
    id: item.id
  });
});

router.post("/delete", (req, res) => {
  let id = req.body.id;

  for (let i = 0; i < PERSONAL.length; i++) {
    if (PERSONAL[i].id == id) {
      PERSONAL.splice(i, 1);
      break;
    }
  }

  res.json({
    id: id
  });
});

module.exports = router;
