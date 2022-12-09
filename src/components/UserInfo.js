export class UserInfo {
  
  constructor({ nameSelector, jobSelector }) {
    this._userName = document.querySelector(nameSelector);
    this._userJob = document.querySelector(jobSelector);
  }

  getUserInfo() {
    const userInfo = {
      name: this._userName.textContent,
      description: this._userJob.textContent
    };
    return userInfo;
  }

  setUserInfo({name, job}) {
    this._userName.textContent = name;
    this._userJob.textContent = job;
  }
}