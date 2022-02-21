import { Octokit } from "@octokit/rest";

export class GithubApiCreator { 
    private static github: Octokit;

    public static CreateGithubApi(): Octokit {
        if (!GithubApiCreator.github) {
            GithubApiCreator.github = new Octokit({
                protocol: "https",
                host: "api.github.com",
                timeout: 10000,
                headers: {
                    "encoding": "null"
                },
            });
        }
        
        GithubApiCreator.github.auth({
            type: "oauth",
            token: "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"
        });
        return GithubApiCreator.github;
    }
}