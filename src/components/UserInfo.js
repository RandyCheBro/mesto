export class UserInfo {
  
  constructor({ nameSelector, jobSelector, avatarSelector}) {
    this._userName = document.querySelector(nameSelector);
    this._userJob = document.querySelector(jobSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    const userInfo = {
      name: this._userName.textContent,
      description: this._userJob.textContent,
      avatar: this._avatar.src
    };
    return userInfo;
  }

  setUserInfo({name, job, avatar}) {
    this._userName.textContent = name;
    this._userJob.textContent = job;
    this._avatar.src = avatar
  }
}