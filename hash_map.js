function hashMap() {
  let bucket = [];
  function hash(key) {
    let hashCode = 0;
        
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % 16;
    }

    return hashCode;
  }

  function set(key, value) {
    let index = hash(key);

    if (bucket[index]) {
      bucket[index] = value;
    } else {
      bucket[index] = value;
    }
  }

  function get(key) {
    let index = hash(key);

    if (bucket[index]) {
      return bucket[index];
    } else {
      return null;
    }
  }

  function has(key) {
    let index = hash(key);

    if (bucket[index]) {
      return true;
    } else {
      return false;
    }
  }


  function remove(key) {
    let index = hash(key);

    if (bucket[index]) {
      bucket.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  function length() {
    let len = bucket.length;
    return len;
  }

  function clear () {
    for (let i = 0; i < bucket.length; i++){
      bucket.pop();

    }
  }

  function keys() {
    let keysArr = [];

    for (let i = 0; i < bucket.length; i++) {

      if (bucket[i]) {
        keysArr.push(i);
      }
    }

    return keysArr;
  }

    function values () {
    let valsArr = [];

    for (let i = 0; i < bucket.length; i++) {

      if (bucket[i]) {
        valsArr.push(bucket[i]);
      }
    }

    return valsArr;
    }
  
    function entries () {
    let keyValArr = [];

    for (let i = 0; i < bucket.length; i++) {

      if (bucket[i]) {
        keyValArr.push([i, bucket[i]]);
      }
    }

    return keyValArr;
  }


  return {bucket, set, get, has, remove, length, clear, keys, values, entries};
}
let newHash = hashMap();

newHash.set('amy', 'tyo');
console.log(newHash.get('amy')
)
console.log(newHash.has('amy')
)
//console.log(newHash.remove('amy'))
console.log(newHash.length())
console.log(newHash.bucket + 'before')

//newHash.clear()


console.log(newHash.bucket)
console.log(newHash.keys())
console.log(newHash.values())
console.log(newHash.entries())


