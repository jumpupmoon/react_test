const app = require("express").Router();
const Doctor = require("../models/doctor");

// 모든 의사 데이터 조회
app.get("/", function (req, res) {
  Doctor.find(function (err, doctors) {
    if (err) return res.status(500).send({ error: "의사 없음" });
    res.json(doctors);
  });
});

// 의사 데이터 생성
app.post("/", function (req, res) {
  var doctor = new Doctor();
  doctor.hospital_id = req.body.hospital_id;
  doctor.name = req.body.name;
  doctor.password = req.body.password;
  doctor.license = req.body.license;
  doctor.major = req.body.major;

  doctor.save(function (err) {
    if (err) {
      console.error(err);
      res.json({ result: "생성 실패" });
      return;
    }

    res.json({ result: "생성 성공" });
  });
});

module.exports = app;
