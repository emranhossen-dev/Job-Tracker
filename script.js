const interviewbtns = document.getElementsByClassName("interview-action");
for (const btn of interviewbtns) {
    btn.addEventListener("click", function () {
        const card = btn.closest(".job-card");
        const status = card.querySelector(".status-btn");
        
        status.innerText = "Interview";
        status.classList.remove("btn-soft", "btn-warning", "rejected-done");
        status.classList.add("btn-success", "interview-done");
        
        updateInterviewCount();
        updateRejectCount();
    })
}

function updateInterviewCount() {
    const completedInterviews = document.getElementsByClassName("interview-done").length;
    document.getElementById("interview-count").innerText = completedInterviews;
}

const rejectbtns = document.getElementsByClassName("rejected-action");
for (const btn of rejectbtns) {
    btn.addEventListener("click", function () {
        const card = btn.closest(".job-card");
        const status = card.querySelector(".status-btn");
        
        status.innerText = "Rejected";
        status.classList.remove("btn-soft", "btn-success", "interview-done");
        status.classList.add("btn-warning", "rejected-done")
        
        updateInterviewCount();
        updateRejectCount();
    })
}

function updateRejectCount() {
    const rejected = document.getElementsByClassName("rejected-done").length;
    document.getElementById("reject-count").innerText = rejected;
}

const allBtn = document.getElementById("all-job");
const interviewBtn = document.getElementById("interview-job");
const rejectedBtn = document.getElementById("rejected-job");

allBtn.addEventListener("click", function () {
    const cards = document.querySelectorAll(".job-card");
    for (const card of cards) {
        card.style.display = "block";
    }
});

interviewBtn.addEventListener("click", function () {
    const cards = document.querySelectorAll(".job-card");
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
    const cards = document.querySelectorAll(".job-card");
    for (const card of cards) {
        const status = card.querySelector(".status-btn").innerText;
        if (status === "Rejected") {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
});