class User {
  constructor(login, email, age, isBanned = false) {
    this.login = login;
    this.email = email;
    this.age = age;
    this._isBanned = isBanned;
  }

  set isBanned(v) {
    this._isBanned = v;
  }

  get isBanned() {
    return this._isBanned;
  }

  getFullInfo() {
    return `${this.login}:${this.email}`;
  }
}

class Admin extends User {
  constructor(email, age) {
    super('AdminLogin', email, age, false);
  }
  ban(user) {
    if (user instanceof User) {
      user.isBanned = true;
      return;
    }
    throw new TypeError();
  }
  unBan(user) {
    if (user instanceof User) {
      user.isBanned = false;
      return;
    }
    throw new TypeError();
  }
  toggleBan(user) {
    if (user instanceof User) {
      user.isBanned = !user.isBanned;
      return;
    }
    throw new TypeError();
  }
}
