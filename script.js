// lets play with the dom 
// 1. get the interview buttons by classSelector
const interviewbtns = document.getElementsByClassName("interview-action");
// 2. loop through each job card
for(const btn of interviewbtns){
    btn.addEventListener("click", function(){
        const card = btn.closest(".job-card");
        const status = card.querySelector(".status-btn");
        status.innerText = "Interview";
        status.classList.remove("btn-soft", "btn-warning");
        status.classList.add("btn-success");
    })
}



const rejectbtns = document.getElementsByClassName("rejected-action");
for (const btn of rejectbtns){
    btn.addEventListener("click", function(){
        const card = btn.closest(".job-card");
        const status = card.querySelector(".status-btn");
        status.innerText="Rejected";
        status.classList.remove("btn-soft", "btn-success");
        status.classList.add("btn-warning")
    })
}




const allBtn = document.getElementById("all-job");
const interviewBtn = document.getElementById("interview-job");
const rejectedBtn = document.getElementById("rejected-job");

const cards = document.querySelectorAll(".job-card");


allBtn.addEventListener("click", function () {
  for (const card of cards) {
    card.style.display = "block";
  }
});


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
























