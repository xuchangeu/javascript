//一个散列表的实现

class HashTable {
    constructor() {
        this.size = 0;
        this._slotSize = 128
        this._slots = Array(this._slotSize)
    }

    _hash(key) {
        key = key.toString()
        let code = 0
        for (let i = 0; i < key.length; i++) {
            code += key.charCodeAt(i);
        }
        return code % this._slotSize
    }

    set(key, value) {
        const hash = this._hash(key);
        if (!this._slots[hash]) {
            this._slots[hash] = [
                [key, value]
            ];
        } else {
            for (let i = 0; i < this._slots[hash].length; i++) {
                if (this._slots[hash][i][0] == key) {
                    this._slots[hash].splice(i, 1, [key, value]);
                    return this;
                }
            }
            this._slots[hash].push([key, value])
        }
        this.size++;
        return this;
    }


    get(key) {
        const hash = this._hash(key);
        if (this._slots[hash]) {
            for (let i = 0; i < this._slots[hash].length; i++) {
                if (this._slots[hash][i][0] == key) {
                    return this._slots[hash][i][1];
                }
            }
            return undefined
        }
        return undefined
    }


    delete(key) {
        const hash = this._hash(key);
        if (this._slots[hash]) {
            for (let i = 0; i < this._slots[hash].length; i++) {
                if (this._slots[hash][i][0] == key) {
                    this._slots[hash].splice(i, 1);
                    this.size--;
                    return true;
                }
            }
            return false;
        }
        return false;
    }
}




// let hashTable = new HashTable()
// console.log(hashTable.set(1, 1)); 
// console.log(hashTable.set(2, 2)); 
// console.log(hashTable.set("apple", 32.23));
// console.log(hashTable.set("banana", 42.12));  
// console.log(hashTable.get(1));
// console.log(hashTable.get("apple"));
// console.log(hashTable.get("orange"));
// console.log(hashTable.delete("orange"));
// console.log(hashTable.delete("apple"));
// console.log(hashTable.get("apple"));


export default HashTable