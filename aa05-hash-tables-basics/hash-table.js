const sha256 = require("js-sha256");

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(numBuckets = 4) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
  }
  hash(key) {
    const hashIndex = sha256(key);
    return parseInt(hashIndex.slice(0, 8), 16);
  }

  hashMod(key) {
    let val = this.hash(key);
    return val % this.capacity;
  }

  insertNoCollisions(key, value) {
    const hashIndex = this.hashMod(key);

    //retrieve the value based on the hashedIndex. exp null
    const dataCheck = this.data[hashIndex];

    //if index returns value, don't overwrite it
    if (dataCheck !== null) {
      throw new Error("hash collision or same key/value pair already exists!");
    }

    //else, if null, attach value to index
    this.data[hashIndex] = new KeyValuePair(key, value);
    this.count++;
  }

  insertWithHashCollisions(key, value) {
    let hashIndex = this.hashMod(key);
    let existingPair = this.data[hashIndex];

    let newKV = new KeyValuePair(key, value);

    if (!existingPair) {
      this.data[hashIndex] = newKV;
    } else {
      newKV.next = existingPair;
      this.data[hashIndex] = newKV;
    }
    this.count++;
  }

  insert(key, value) {
    let hashIndex = this.hashMod(key);
    let existingPair = this.data[hashIndex];

    let newKV = new KeyValuePair(key, value);

    if (!existingPair) {
      this.data[hashIndex] = newKV; //store key value pair if bucket is empty
    } else {
      let current = existingPair;

      while (current) {
        if (current.key === key) {
          //update value for same key
          current.value = value;
          return;
        }
        if (!current.next) break;
        current = current.next;
      }
      newKV.next = existingPair;
      this.data[hashIndex] = newKV;
    }
    this.count++; //increment with new added key value pair
  }
}

module.exports = HashTable;
