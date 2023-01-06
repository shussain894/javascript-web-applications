class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.client.getRepoInfo(repoName, repoData => {
        this.display(repoData)
        console.log(repoData);
      });
    });
  }

  display(repoData) {
    const name = document.querySelector('#repo-name');
    const description = document.querySelector('#repo-description');
    const info = document.querySelector('#info');

    name.textContent = repoData.name;
    description.textContent = repoData.description;

    const image = document.createElement('img')
    image.setAttribute('src', `${repoData.organization.avatar_url}`);
    info.append(image);
  }
}

module.exports = GithubView;