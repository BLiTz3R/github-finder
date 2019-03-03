class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    // Display profile in UI
    showProfile(user) {
        // Prevent "null" from displaying, instead display nothing
        if (user.company === null) { user.company = '' };
        if (user.blog === null) { user.blog = '' };
        if (user.location === null) { user.location = '' };
        // Display profile
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary mb-2">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary mb-2">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success mb-2">Followers: ${user.followers}</span>
                        <span class="badge badge-info mb-2">Following: ${user.following}</span>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website: <a href="${user.blog}"  target="_blank">${user.blog}</a></li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }

    // Show user repos
    showRepos(repos) {
        let output = '';

        repos.forEach(function(repo) {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        // Output repos
        document.getElementById('repos').innerHTML = output;
    }

    // Clear profile when no input
    clearProfile() {
        this.profile.innerHTML = '';
    }

    // Clear alert message
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }
    
    // Show "profile not found" alert
    showAlert(message, className) {
        // Clear any remaining alerts
        this.clearAlert();
        // Create div
        const div = document.createElement('div');
        // Add classes
        div.className = className;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('.searchContainer');
        // Get search box
        const search = document.querySelector('.search');
        // Insert alert
        container.insertBefore(div, search);

        // Timeout after 3 secs
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }
}