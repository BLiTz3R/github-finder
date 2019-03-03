class Github {
    constructor() {
        // Enter id and secret if registered with GitHub oauth
        // this.client_id = '';
        // this.client_secret = '';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        // For registered app only
        // const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${client_secret}`);
        const profileResponse = await fetch(`https://api.github.com/users/${user}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos           
        }
    }
}