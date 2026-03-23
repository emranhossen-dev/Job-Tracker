// lets play with the dom 
// interview button
const interviewbtns = document.getElementsByClassName("interview-action");
for(const btn of interviewbtns){
    btn.addEventListener("click", function(){
        const card = btn.closest(".job-card");
        const status = card.querySelector(".status-btn");
        status.innerText = "Interview";
        status.classList.remove("btn-soft", "btn-warning");
        status.classList.add("btn-success", "interview-done");
        updateInterviewCount();
    })
}

// update count
function updateInterviewCount() {
    const completedInterviews = document.getElementsByClassName("interview-done").length;
    document.getElementById("interview-count").innerText = completedInterviews;
}

// reject button
const rejectbtns = document.getElementsByClassName("rejected-action");
for (const btn of rejectbtns){
    btn.addEventListener("click", function(){
        const card = btn.closest(".job-card");
        const status = card.querySelector(".status-btn");
        status.innerText="Rejected";
        status.classList.remove("btn-soft", "btn-success");
        status.classList.add("btn-warning", "rejected-done")
        updateRejectCount();
    })
}

// update count
function updateRejectCount() {
    const rejected = document.getElementsByClassName("rejected-done").length;
    document.getElementById("reject-count").innerText = rejected;
}


// filter button
const allBtn = document.getElementById("all-job");
const interviewBtn = document.getElementById("interview-job");
const rejectedBtn = document.getElementById("rejected-job");
const cards = document.querySelectorAll(".job-card");

// all button
allBtn.addEventListener("click", function () {
  for (const card of cards) {
    card.style.display = "block";
  }
});

// interview button
interviewBtn.addEventListener("click", function () {
  for (const card of cards) {
    const status = card.querySelector(".status-btn").innerText;

    if (status === "Interview") {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
});

// reject button
rejectedBtn.addEventListener("click", function () {
  for (const card of cards) {
    const status = card.querySelector(".status-btn").innerText;

    if (status === "Rejected") {
      card.style.display = "block";
      
    } else {
      card.style.display = "none";
    }
  }
});