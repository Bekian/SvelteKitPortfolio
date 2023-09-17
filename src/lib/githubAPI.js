export async function getRepos(username) {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const data = await response.json();
    return data.map(repo => ({
    name: repo.name,
    description: repo.description,
    language: repo.language,
    commits: repo.commits_url,
    tags: repo.tags_url
    }));
    }