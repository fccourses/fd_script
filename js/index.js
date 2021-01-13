class Squirrel {
  constructor(name, isMale) {
    this.name = name;
    this.isMale = isMale;
  }

  eat() {
    return `${this.name} is eating`;
  }

  climb() {
    return `${this.name} is climbing`;
  }
}

const chip = new Squirrel('Chip', true);

class FlyingSqurrel extends Squirrel {
  constructor(name, isMale, distance) {
    super(name, isMale);
    this.distance = distance;
  }
  fly() {
    return `${this.name} is flying`;
  }
}

const tip = new FlyingSqurrel('Tip', true, 120);

/* 
  Сказочная белка
  танцевать() - возвращает строку
  петь() - все песни из репертуара белки

  песни: string[] - репертуар белки
*/

class FableSquirrel extends FlyingSqurrel {
  constructor(name, isMale, distance, songs) {
    super(name, isMale, distance);
    this.songs = songs;
  }

  dance() {
    return `${this.name} is dancing`;
  }

  sing() {
    return `Белка ${this.name} поет такие песни: ${this.songs.join(', ')}`;
  }
}

const tail = new FableSquirrel('Tail', false, 600, ['song1', 'song2', 'song3']);
