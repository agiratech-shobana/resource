
const express = require("express");
const router = express.Router();


router.get("/cal", (req, res) => {
  res.json({
    holidays: 1,
    employeeAvailable: 2,
    upcomingHoliday: "31/03/2025",
    nextAvailableDate: "20/03/2025",
    events: [
      { title: "ATIC Deadline", date: "2025-03-05", color: "purple" },
      { title: "Mohan Joshua Available", date: "2025-03-13", color: "blue" },
      { title: "Birthday", date: "2025-03-18", color: "orange" }
    ]
  });
});

module.exports = router;