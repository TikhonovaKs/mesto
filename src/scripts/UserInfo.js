class UserInfo {
//   constructor(description, name) {
//     this._description = description;
//     this._name = name;
//}
  getUserInfo() {
    const job = document.querySelector('.profile__job').textContent;
    const name = document.querySelector('.profile__name').textContent;

    return { job, name };
  }

  setUserInfo(data) {
    document.querySelector('.profile__job').textContent = data.job;
    document.querySelector('.profile__name').textContent = data.name;
  }
}

export default UserInfo;
