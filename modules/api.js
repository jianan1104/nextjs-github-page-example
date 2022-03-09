import { Octokit } from "@octokit/core";
import base64 from "base-64";
import utf8 from 'utf8';
class api {
    constructor() {
        this.octokit = new Octokit({ auth: process.env.GITHUB_API_TOKEN});
    }

    async getRepositoriesByUser(username, pageNumber = 1) {
        // Request repositories data
        let response;
        await this.octokit.request('GET /users/{username}/repos', {
            username: username,
            sort: 'updated',
            per_page: 10,
            page: pageNumber
          }).then(res => {
              if(res.status === 200) {
                  response = res.data
              } else {
                logger.error(`Http status is ${res.status}. ${res.data.message}`);
                  throw `GET /users/{username}/repos FAILED. Http status is ${res.status}`;
              }
          }).catch(err => {
              const msg = `HTTP[${err.status}] ${err.response.data.message}`;
              throw msg;
          });

        // Some repositories don't correctly have language value in data object,
        // So just call languages API to get it.
        if(response !== undefined) {
            for (const repo of response) {
                if(!repo.language) {
                    const language = await this.getLanguageByRepository(repo.owner.login, repo.name);
                    // Some repos also are missing data, so check again
                    repo.language = language !== undefined ? language : null;
                }
            }
    
            return response;
        } else {
            const msg = `Response is ${response}`;
            throw msg;
            
        }
    };

    async getLanguageByRepository(owner, name){
        // Request languages data
        let language;
        await this.octokit.request('GET /repos/{owner}/{repo}/languages', {
            owner: owner,
            repo: name 
            }).then(res => {
                if(res.status === 200) {
                    // If it has languages in data?
                    if(res.data){
                        // Get main programming language sort by value.
                        let mainLanguage = Object.fromEntries(
                            Object.entries(res.data).sort(([a,],[b,]) => a-b)
                        );
                        mainLanguage = Object.keys(mainLanguage)[0];
                        language = mainLanguage;
                    }
                }
            }).catch(err => {
                const msg = `HTTP[${err.status}] ${err.response.data.message}`;
              throw msg;
            });
            return language;
    };

    async getSingleRepository(owner, repo) {
        console.log(owner, repo)
        let response;
        await this.octokit.request('GET /repos/{owner}/{repo}', {
            owner: owner,
            repo: repo
          }).then(res => {
              if(res.status === 200) {
                  response = res.data;
              }
          }).catch(err => {
              const msg = `HTTP[${err.status}] ${err.response.data.message}`;
              throw msg;
        });

        return response;
    };

    async getUserDetail(name) {
        let user;
        await this.octokit.request('GET /users/{username}', {
            username: name
          }).then(res => {
            if(res.status === 200) {
                user = res.data;
            }
          }).catch(err => {
            const msg = `HTTP[${err.status}] ${err.response.data.message}`;
            throw msg;
      });

      return user;
    };

    async getReadme(owner, repo) {
        let doc;
        await this.octokit.request('GET /repos/{owner}/{repo}/readme', {
            owner: owner,
            repo: repo
          }).then(res => {
            if(res.status === 200) {
                doc = utf8.decode(base64.decode(res.data.content));
            }
          }).catch(err => {
            // const msg = `HTTP[${err.status}] ${err.response.data.message}`;
            // throw msg;
            doc = 'Sorry, there is no readme.md. :)'
      });
      return doc;
    }
};

export default new api();