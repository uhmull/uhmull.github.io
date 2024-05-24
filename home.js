let studyFinalValues = [];
let studyFinalHours = [];
let subjectNames = [];
let subjectGrades = [];
let subjectDays = [];
let studyTime = 0;
let scheduleHTML = "";
let j = 0;

function createStudySchedule(subject, time) {
  let k = 0
  let tempTotal = 0;
  while(k<subject.length){
    tempTotal += subject[k]
    k++
  }
  scheduleHTML = "";
  for (let i = 0; i < subjectNames.length; i++) {
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

function addSubject(){
  subjectNames.push(document.getElementById("subjectName").value);
  subjectGrades.push(document.getElementById("subjectGrade").value);
  subjectDays.push(document.getElementById("subjectTime").value);
  studyFinalValues[j] = (1 / (subjectGrades[j] * 1 * 1 * subjectDays[j]));
  document.getElementById("subjectName").value = '';
  document.getElementById("subjectGrade").value = '';
  document.getElementById("subjectTime").value = '';
  j++;
}


function scheduleInit() {
  studyTime = Math.round(1 * document.getElementById("hrs").value);
  document.cookie = createStudySchedule(studyFinalValues, studyTime);
  window.location.href = "SchedulePage.html";
  document.getElementById("schedule").innerHTML = document.cookie;
}

function show() {
  document.getElementById("schedule").innerHTML = "";
  let x =document.cookie.split(";")[2];
  document.getElementById("schedule").innerHTML = x;
}
