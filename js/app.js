// variables
const userProfile = document.querySelector('.user-profile');
const userName = document.querySelector('#user_name');

// User Class
class User {
  async getUser() {
    try {
      let response = await fetch(
        `https://api.github.com/users/${userName.value}`,
        {
          method: 'GET',
          headers: {
            Authorization: `8c203da63af09d197a52 170b9b9fc30d39e0289267aa0dc2cad5dbc4dfab`,
          },
        }
      );
      let userData = await response.json();
      return userData;
    } catch (error) {
      console.log(error);
    }
  }

  showUserProfile(userData) {
    userProfile.innerHTML = `<div class="card mt-3">
    <div class="card-header">${userData.name}</div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-3">
          <img
            src=${userData.avatar_url}
            class="card-img-top"
            alt="profil-img"
          />
          <div class="mt-3">
            <a href=${userData.html_url} class="btn btn-info col-md-12">Profile Info</a>
          </div>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary">Public Repos: ${userData.public_repos}</span>
          <span class="badge badge-secondary">Public Gists: ${userData.public_gists}</span>
          <span class="badge badge-success">Followers: ${userData.followers}</span>
          <span class="badge badge-danger">Following: ${userData.following}</span>
          <div class="mt-3">
            <ul class="list-group">
              <li class="list-group-item">Company: ${userData.company}</li>
              <li class="list-group-item">Website/blog: <a href=${userData.blog}>${userData.blog}</a></li>
              <li class="list-group-item">Location: ${userData.location}</li>
              <li class="list-group-item">Member Since: ${userData.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">Latest Repos</div>

    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <div class="row">
          <div class="col-md-6">
            <strong>An item</strong>:short description
          </div>
          <div class="col-md-3">
            <span class="badge badge-secondary">Secondary</span>
            <span class="badge badge-success">Success</span>
            <span class="badge badge-danger">Danger</span>
          </div>
          <div class="col-md-3">
            <a href="" class="btn btn-dark">Repo Page</a>
          </div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row">
          <div class="col-md-6">
            <strong>An item</strong>:short description
          </div>
          <div class="col-md-3">
            <span class="badge badge-secondary">Secondary</span>
            <span class="badge badge-success">Success</span>
            <span class="badge badge-danger">Danger</span>
          </div>
          <div class="col-md-3">
            <a href="" class="btn btn-dark">Repo Page</a>
          </div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row">
          <div class="col-md-6">
            <strong>An item</strong>:short description
          </div>
          <div class="col-md-3">
            <span class="badge badge-secondary">Secondary</span>
            <span class="badge badge-success">Success</span>
            <span class="badge badge-danger">Danger</span>
          </div>
          <div class="col-md-3">
            <a href="" class="btn btn-dark">Repo Page</a>
          </div>
        </div>
      </li>
    </ul>
  </div>`;
  }
}

// event listner
const user = new User();
userName.addEventListener('keyup', () => {
  user.getUser().then((data) => {
    console.log(data);
    user.showUserProfile(data);
  });
});
