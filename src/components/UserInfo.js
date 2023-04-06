class UserInfo {
  constructor(jobSelector, nameSelector, avatarSelector) {
    this._job = document.querySelector(jobSelector);
    this._name = document.querySelector(nameSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    const job = this._job.textContent;
    const name = this._name.textContent;
    const avatar = this._avatar.src;

    return { job, name, avatar };
  }

  setUserInfo(data) {
    this._job.textContent = data.about;
    this._name.textContent = data.name;
    this._avatar.src = data.avatar;
  }
}

export default UserInfo;
