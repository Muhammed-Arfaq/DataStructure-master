class Node{
    constructor(value) {
        this.value = value
        this.isEndOfWord = false
        this.children = {}
    }
}

class Trie {
    constructor() {
        this.root = new Node(null)
    }
    insert(word) {
        let current = this.root
        for(let character of word) {
            if(current.children[character] === undefined) {
                current.children[character] = new Node(character)
            }
            current = current.children[character]
        }
        current.isEndOfWord = true
    }
    Search(word) {
        let current = this.root
        for(let character of word) {
            if(current.children[character] === undefined) {
                return false
            }
            current = current.children[character]
        }
        return true
    }
}

const trie = new Trie()

trie.insert("hello")
trie.insert("how")
trie.insert("food")
trie.insert("arfaq")
trie.insert("qwerty")

console.log(trie.Search("hello"));