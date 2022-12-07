export class UserInfo {
  _userName
  _userJob
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

  setUserInfo(inputNameValue, inputJobValue) {
    this._userName.textContent = inputNameValue;
    this._userJob.textContent = inputJobValue;
  }
}