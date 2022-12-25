export class UserInfo {

  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this._userName = document.querySelector(nameSelector);
    this._userJob = document.querySelector(jobSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    const userInfo = {
      name: this._userName.textContent,
      about: this._userJob.textContent,
      avatar: this._avatar.src
    };
    return userInfo;
  }

  setUserInfo({ name, about, avatar, _id }) {
    this._userName.textContent = name;
    this._userJob.textContent = about;
    this._avatar.src = avatar;
    this._id = _id
  }

  getUserId() {
    return this._id;
  }
}