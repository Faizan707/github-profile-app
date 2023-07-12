const apiUrl = "https://api.github.com/users/";

const getUser = async (username) => {
  const response = await fetch(apiUrl + username.trim());
  const data = await response.json();
  return data;
};

document.getElementById("user-search").addEventListener("click", () => {
  let user = document.getElementById("search").value;

  getUser(user)
    .then((user) => {
      console.log(user);

      let profilePic = document.getElementById("profile-pic");
      profilePic.src = user.avatar_url;

      let profile_name = document.getElementById("profile-name");
      profile_name.innerHTML = user.name;

      let followers = document.getElementById("followers");
      followers.innerHTML = "Followers: " + user.followers;

      let username = document.getElementById("username");
      username.innerHTML = "@" + user.login;

      let following = document.getElementById("following");
      following.innerHTML = "Following: " + user.following;

      let bio = document.getElementById("bio");
      bio.innerHTML = user.bio;

      let repos = document.getElementsByClassName("repos");
      for (let i = 0; i < repos.length; i++) {
        repos[i].innerHTML = "Public Repositories: " + user.public_repos;
      }
    })
    .catch((error) => {
      console.error("Error fetching user:", error);
    });
});
