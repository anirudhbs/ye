class HashTable {
  constructor() {
    this.memory = {};
  }

  hashKey(key) {
    let hash = 0;
    for (let index = 0; index < key.length; index += 1) {
      const code = key.charCodeAt(index);
      hash = ((hash << 5) - hash + code) | 0;
    }
    return hash;
  }

  set(key, value) {
    const address = this.hashKey(key);
    this.memory[address] = value;
  }

  get(key) {
    const address = this.hashKey(key);
    return this.memory[address];
  }

  remove(key) {
    const address = this.hashKey(key);
    if (address in this.memory) {
      delete this.memory[address];
    }
  }
}

const t = new HashTable();
t.set("hello", "world");
t.set("that", "way");
t.set("drake", "ovo");
console.log(t.get("that"));
