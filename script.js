function startAssessment() {
    const assessment = document.getElementById("assessment");

    assessment.style.display = "block";

    assessment.scrollIntoView({
        behavior: "smooth"
    });
}


async function generateCareerPath() {

    const education = document.getElementById("education").value;
    const skills = document.getElementById("skills").value;
    const career = document.getElementById("career").value;
    const experience = document.getElementById("experience").value;
    const time = document.getElementById("time").value;

    if (!education || !skills || !career) {
        alert("Please fill in all the required fields.");
        return;
    }

    const result = document.getElementById("result");
    const roadmap = document.getElementById("roadmap");

    roadmap.innerHTML = "<p>🤖 AI is creating your personalized career path...</p>";

    result.style.display = "block";

    result.scrollIntoView({
        behavior: "smooth"
    });

    try {

        const response = await fetch("http://localhost:3000/api/career-path", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                education: education,
                skills: skills,
                career: career,
                experience: experience,
                time: time
            })

        });

        const data = await response.json();

        if (!data.success) {
            throw new Error(data.message);
        }
function resetCareerPath() {

    document.getElementById("education").value = "";
    document.getElementById("skills").value = "";
    document.getElementById("career").value = "";

    document.getElementById("experience").selectedIndex = 0;
    document.getElementById("time").selectedIndex = 0;

    document.getElementById("result").style.display = "none";

    document.getElementById("assessment").scrollIntoView({
        behavior: "smooth"
    });
}
        roadmap.innerHTML = `
    <div class="career-card">

        <h3>✨ Your Personalized Career Roadmap</h3>

        <div class="career-snapshot">

            <div class="snapshot-item">
                <span>🎯 Target Career</span>
                <strong>${career}</strong>
            </div>

            <div class="snapshot-item">
                <span>🎓 Education</span>
                <strong>${education}</strong>
            </div>

            <div class="snapshot-item">
                <span>📊 Experience</span>
                <strong>${experience}</strong>
            </div>

            <div class="snapshot-item">
                <span>⏱️ Study Time</span>
                <strong>${time}/day</strong>
            </div>

        </div>

        <div class="ai-response">
            ${data.roadmap.replace(/\n/g, "<br>")}
        </div>
        <button onclick="resetCareerPath()" class="reset-button">
    🔄 Try Another Career
</button>

    </div>
`;

    } catch (error) {

        console.error(error);

        roadmap.innerHTML = `
            <div class="career-card">
                <h3>⚠️ Something went wrong</h3>
                <p>Please make sure the CareerPath AI backend is running.</p>
            </div>
        `;
    }
}