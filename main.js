document.addEventListener("DOMContentLoaded", function () {
  const profilePic = document.getElementById("photo");
  const profileName = document.getElementById("name");
  const profileUsername = document.getElementById("username");
  const profileBio = document.getElementById("bio");
  const profileRepos = document.getElementById("repos");
  const profileFollowers = document.getElementById("followers");
  const profileFollowing = document.getElementById("following");

  const username = "jrampo";
  const apiUrl = `https://api.github.com/users/${username}`;

<<<<<<< HEAD
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao recuperar os dados do GitHub.');
            }
            return response.json();

        })
        .then(data => {
            profilePic.src = data.avatar_url;
            profileName.textContent = data.name;
            profileUsername.textContent = `@${data.login}`;
            profileRepos.textContent = data.public_repos;
            profileFollowers.textContent = data.followers;
            profileFollowing.textContent = data.following;

        })
        .catch(error => {
            console.log('Erro:', error);
        });
=======
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao recuperar os dados do GitHub.");
      }
      return response.json();
    })
    .then((data) => {
      profilePic.src = data.avatar_url;
      profileName.textContent = data.name;
      profileUsername.textContent = `@${data.login}`;
      profileBio.textContent = data.bio;
      profileRepos.textContent = data.public_repos;
      profileFollowers.textContent = data.followers;
      profileFollowing.textContent = data.following;
>>>>>>> c215489b472bcc39525ea7a9979c2b47dd60f5dc

      console.log(data);
    })
    .catch((error) => {
      console.log("Erro:", error);
    });
});
