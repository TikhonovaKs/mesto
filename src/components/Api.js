class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  getAllPlaces() {
    return fetch(this._url, {
      method: 'GET',
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject('Произошла ошибка');
    });
  }

  addPlace(data) {
    return fetch(this._url, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject('Произошла ошибка');
    });
  }

  deletePlace(id) {
    return fetch(`${this._url}/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject('Произошла ошибка');
    });
  }

  likeCard(id) {
    return fetch(`${this._url}/${id}/likes`, {
      method: 'PUT',
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject('Произошла ошибка');
    });
  }

  disLikeCard(id) {
    return fetch(`${this._url}/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject('Произошла ошибка');
    });
  }

  changeAvatar(link) {
    return fetch(`${this._url}/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ avatar: link.link }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject('Произошла ошибка');
    });
  }

  editProfileInfo(data) {
    return fetch(this._url, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ about: data.job, name: data.name }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject('Произошла ошибка');
    });
  }

  getUserInfo() {
    return fetch(this._url, {
      method: 'GET',
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject('Произошла ошибка');
    });
  }
}

export default Api;
