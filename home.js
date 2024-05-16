let studyFinalValues = [];
let studyFinalHours = [];
let subjectNames = [];
let subjectGrades = [];
let subjectDays = [];
let studyTime = 0;
let scheduleHTML = "";

function createStudySchedule(subject, time) {
  let tempTotal = subject[0] + subject[1] + subject[2] + subject[3];
  scheduleHTML = "";
  for (let i = 0; i < 4; i++) {
    let tempval = time * (subject[i] / tempTotal);
    let tempval2 = tempval - Math.trunc(tempval);
    if (Math.round(tempval) == 0 && tempval2 < 0.25) {
      studyFinalHours[i] = 0;
      scheduleHTML += '<div class = "subject"> You dont need to study ' + subjectNames[i] + '</div>';
    }
    else if (tempval2 > 0.25 && tempval2 < 0.75) {
        studyFinalHours[i] = Math.floor(tempval) + 0.5;
        scheduleHTML += '<div class = "subject"> Study ' + subjectNames[i] + ' for ' + studyFinalHours[i] + ' hours </div>';
      }
      else {
        studyFinalHours[i] = Math.round(tempval);
        scheduleHTML += '<div class = "subject"> Study ' + subjectNames[i] + ' for ' + studyFinalHours[i] + ' hours </div>';
      }
  }
  return scheduleHTML;
}

function scheduleInit() {
  studyFinalValues = [];
  studyFinalHours = [];
  subjectNames = [];
  subjectGrades = [];
  subjectDays = [];
  studyTime = 0;
  scheduleHTML = "";
  studyTime = Math.round(1 * document.getElementById("hrs").value);
  for (let i = 0; i < 4; i++) { subjectNames[i] = document.getElementById("subject" + (i + 1) + "Name").value; }
  for (let i = 0; i < 4; i++) { subjectGrades[i] = Math.abs(document.getElementById("subject" + (i + 1) + "Grade").value) + 1; }
  for (let i = 0; i < 4; i++) { subjectDays[i] = Math.abs(document.getElementById("subject" + (i + 1) + "Time").value) + 1; }
  for (let i = 0; i < 4; i++) {
    studyFinalValues[i] = 1 / (subjectGrades[i] * subjectDays[i]);
  }
  document.cookie = createStudySchedule(studyFinalValues, studyTime);
  window.location.href = "SchedulePage.html";
  document.getElementById("schedule").innerHTML = document.cookie;
}

function show() {
  document.getElementById("schedule").innerHTML = "";
  let x =document.cookie.split(";")[2];
  document.getElementById("schedule").innerHTML = x;
}