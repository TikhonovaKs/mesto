class UserInfo {
  constructor(jobSelector, nameSelector) {
    this._job = document.querySelector(jobSelector);
    this._name = document.querySelector(nameSelector);
  }

  getUserInfo() {
    const job = this._job.textContent;
    const name = this._name.textContent;

    return { job, name };
  }

  setUserInfo(data) {
    this._job.textContent = data.job;
    this._name.textContent = data.name;
  }
}

export default UserInfo;
