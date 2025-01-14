$(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});

function DisplayPortfolioPage() {
    const projectData = [
        { title: 'Portfolio Website', description: 'The portfolio comes with the small summary of who I am and what I like to do..', image: "./Pictures&Videos/Project_1.png", link: ".\Portfolio\project_1\index.html" },
        { title: 'Harmony Hub', description: 'This website is a group project done as the part of my web development course in Durham College', image: "./Pictures&Videos/groupProject.png", link: "https://github.com/merryviji/Full-stack-Developemnt" },
        { title: 'Dicee Game', description: 'A mini-game that runs when the webpage is reloaded. The player with the highest number wins.', image: "./Pictures&Videos/Project_2.png", link: "Portfolio/project_2/index.html" },
        { title: 'Drum Kit', description: 'The webpage allows you to click or hit the correct keys to play music.', image: "./Pictures&Videos/Project_3.png", link: "Portfolio/project_3/index.html" },
        { title: 'Simon Game', description: 'A mini-version of the Simon game.', image: "./Pictures&Videos/Project_4.png", link: "Portfolio/project_4/index.html" }
    ];

    const projectContainer = document.getElementById("projects-container");
    const toggleButton=document.getElementById("load-more-btn");
    let currentIndex=0;
    const ProjectsPerPg=4;

    function createCard(project) {
        const projectCard = document.createElement("div");
        projectCard.classList.add('project-card');

        const projectImg = document.createElement("img");
        projectImg.src = project.image;
        projectImg.alt = project.title;
        projectImg.classList.add("project-img");

        const title = document.createElement("h3");
        title.innerText = project.title;

        const description = document.createElement("p");
        description.innerText = project.description;

        projectCard.appendChild(projectImg);
        projectCard.appendChild(title);
        projectCard.appendChild(description);

        projectCard.addEventListener("click", function () {
            window.open(project.link, "_blank");
        });

        return projectCard;
    }

    function loadProjects(startIndex) {
        projectContainer.innerHTML = "";

        for (let i = startIndex ;i < startIndex + ProjectsPerPg && i < projectData.length; i++) {
            const card = createCard(projectData[i]);
            projectContainer.appendChild(card);
        }
    }
    function toggleProjects() {
        if (toggleButton.innerText === "Load More") {
            currentIndex += ProjectsPerPg;
            if (currentIndex >= projectData.length) {
                currentIndex -= ProjectsPerPg; 
                return;
            }
            toggleButton.innerText = "Show Previous";
        } else {
            currentIndex -= ProjectsPerPg;
            if (currentIndex < 0) {
                currentIndex = 0; 
                return;
            }
            toggleButton.innerText = "Load More";
        }
        loadProjects(currentIndex);
    }
    loadProjects(currentIndex);
    toggleButton.addEventListener("click", toggleProjects);
}


document.addEventListener("DOMContentLoaded", DisplayPortfolioPage);

