import { Octokit } from "@octokit/core";

class api {
    constructor() {
        this.octokit = new Octokit({ auth: process.env.GITHUB_API_TOKEN });
    }

    async getRepositoriesByUser(username) {
        // Request repositories data
        const response = await this.octokit.request('GET /users/{username}/repos', {
            username: username,
            sort: 'updated'
          });

        // Some repositories don't correctly have language value in data object,
        // So just call languages API to get it.
        for (const repo of response.data) {
            if(!repo.language) {
                const language = await this.getLanguageByRepository(repo.owner.login, repo.name);
                // Some repos also are missing data, so check again
                repo.language = language !== undefined ? language : null;
            }
            
        }

          return response;
    };

    async getLanguageByRepository(owner, name){
        // Request languages data
        const language = await this.octokit.request('GET /repos/{owner}/{repo}/languages', {
            owner: owner,
            repo: name })
            .then(response => {
                // If it has languages in data?
                if(response.data){
                    // Get main programming language sort by value.
                    let mainLanguage = Object.fromEntries(
                        Object.entries(response.data).sort(([a,],[b,]) => a-b)
                    );
                    mainLanguage = Object.keys(mainLanguage)[0];
                    return mainLanguage;
                }
            });
            return language;
    }
};

export default new api();