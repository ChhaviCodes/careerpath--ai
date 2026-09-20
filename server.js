const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.post("/api/career-path", (req, res) => {

    const {
        education,
        skills,
        career,
        experience,
        time
    } = req.body;

    const skillText = skills.toLowerCase();
    const careerText = career.toLowerCase();

    let skillGaps = [
        "Programming fundamentals",
        "Data Structures and Algorithms",
        "SQL and databases",
        "Git and GitHub"
    ];

    let roadmap = [
        "Strengthen programming fundamentals",
        "Learn Data Structures and Algorithms",
        "Learn SQL and database fundamentals",
        "Build practical projects",
        "Build a professional GitHub portfolio",
        "Apply for internships and entry-level opportunities"
    ];

    let projects = [
        "Personal portfolio website",
        "Student productivity application",
        "Career recommendation web application"
    ];

    // AI / Machine Learning pathway
    if (
        careerText.includes("ai") ||
        careerText.includes("machine learning") ||
        careerText.includes("data science") ||
        careerText.includes("ml")
    ) {

        skillGaps = [
            "Python programming",
            "Data Structures and Algorithms",
            "Mathematics for AI and Data Science",
            "NumPy and Pandas",
            "Machine Learning",
            "Deep Learning",
            "Generative AI and APIs"
        ];

        roadmap = [
            "Strengthen Python programming",
            "Learn Data Structures and Algorithms",
            "Learn Mathematics for AI and Data Science",
            "Learn NumPy, Pandas and data visualization",
            "Learn Machine Learning fundamentals",
            "Learn Deep Learning",
            "Learn Generative AI and LLM APIs",
            "Build and deploy AI projects"
        ];

        projects = [
            "Student Performance Prediction",
            "PDF RAG Chatbot",
            "AI Career Recommendation Assistant"
        ];
    }

    // Web development pathway
    else if (
        careerText.includes("web") ||
        careerText.includes("frontend") ||
        careerText.includes("backend") ||
        careerText.includes("software")
    ) {

        skillGaps = [
            "JavaScript",
            "Git and GitHub",
            "Responsive Web Development",
            "APIs",
            "Backend Development",
            "Databases"
        ];

        roadmap = [
            "Strengthen HTML and CSS",
            "Learn JavaScript",
            "Learn Git and GitHub",
            "Build responsive websites",
            "Learn APIs and backend development",
            "Learn databases",
            "Build full-stack projects",
            "Apply for internships"
        ];

        projects = [
            "Personal Portfolio",
            "Task Management App",
            "Full-Stack Student Management System"
        ];
    }

    // Data Analyst pathway
    else if (
        careerText.includes("data analyst") ||
        careerText.includes("analyst")
    ) {

        skillGaps = [
            "Excel",
            "SQL",
            "Python",
            "Pandas",
            "Data Visualization",
            "Statistics"
        ];

        roadmap = [
            "Learn Excel",
            "Learn SQL",
            "Learn Python",
            "Learn Pandas and NumPy",
            "Learn Statistics",
            "Learn Data Visualization",
            "Build analytics projects",
            "Create a data portfolio"
        ];

        projects = [
            "Sales Dashboard",
            "Student Performance Analysis",
            "Customer Data Analysis"
        ];
    }

    const weeklyPlan = [
        `Monday: Learn a new concept for ${time} per day`,
        "Tuesday: Practice coding exercises",
        "Wednesday: Study the next roadmap topic",
        "Thursday: Solve practical problems",
        "Friday: Work on your project",
        "Saturday: Review what you learned",
        "Sunday: Build, document and publish your progress"
    ];

    const response = {
        success: true,

        roadmap: `
PROFILE ANALYSIS

You are a ${experience} learner studying ${education} and targeting a career as a ${career}.

CURRENT SKILLS

${skills}

SKILL GAPS

${skillGaps.map((skill, index) => `${index + 1}. ${skill}`).join("\n")}

LEARNING ROADMAP

${roadmap.map((step, index) => `${index + 1}. ${step}`).join("\n")}

WEEKLY STUDY PLAN

${weeklyPlan.join("\n")}

PROJECT RECOMMENDATIONS

${projects.map((project, index) => `${index + 1}. ${project}`).join("\n")}

RECOMMENDED NEXT STEP

Start with the first skill gap and build one small project while learning. Gradually increase project complexity as your skills improve.
`
    };

    res.json(response);
});

app.listen(PORT, () => {
    console.log(`CareerPath AI server running at http://localhost:${PORT}`);
});