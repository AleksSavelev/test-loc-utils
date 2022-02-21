import { Octokit } from "@octokit/rest";

export class GithubApiCreator { 
    private static github: Octokit;

    public static CreateGithubApi(): Octokit {
        if (!GithubApiCreator.github) {
            GithubApiCreator.github = new Octokit({
                auth: "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",
                protocol: "https",
                host: "api.github.com",
                timeout: 10000,
                headers: {
                    "encoding": "null"
                },
            });

        }
        
        return GithubApiCreator.github;
    }
}