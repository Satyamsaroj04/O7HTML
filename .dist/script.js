// TYPING EFFECT
new Typed("#typing", {
    strings: [
        "Frontend Web Developer",
        "Java Programmer",
        "DSA Enthusiast",
        "Aspiring Software Engineer"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
});

// GSAP ANIMATIONS
gsap.from(".hero-title", {
    y: -50,
    opacity: 0,
    duration: 1
});

gsap.from(".skill-card", {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: ".skill-card"
});

// FETCH GITHUB PROJECTS
fetch("https://api.github.com/users/YOUR_GITHUB_USERNAME/repos")
    .then(res => res.json())
    .then(data => {
        let repoList = document.getElementById("repo-list");
        data.slice(0, 6).forEach(repo => {
            repoList.innerHTML += `
            <div class="col-md-4">
                <div class="repo-card">
                    <h5>${repo.name}</h5>
                    <p>${repo.description || "No description"}</p>
                    <a href="${repo.html_url}" target="_blank" class="btn btn-sm btn-primary">
                        View Repo
                    </a>
                </div>
            </div>`;
        });
    });
