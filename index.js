let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const letters = {
        "a": 10,
        "b": 100,
        "c": 1000
}

function isLetter(char){
    if(char in letters){
      return letters[char]
    } else {
      return parseInt(char)
    }
  }
  
function convertTamil(string){
  let sum =0
  let digit=0
  let multiplier=1
  let power = 1
  
  if(string.length === 1) return isLetter(string[0])

  string = string.toString()
  string = string.split("").reverse()

  for (let i =0; i < string.length;i++ ){
    let current = string[i]
    
   if(string[i]===string[i+1]) {
       return undefined
      }
    
    if(parseInt(current)){
      if(i===0){
        sum+=parseInt(current)
      } else {
        multiplier = +current
        sum+=(multiplier*power)
        multiplier=1
      }
    } else if(letters[current] >0) {
      
      if(alphabet.indexOf(current)>-1){
        power = letters[current]
        alphabet.splice(0, alphabet.indexOf(current)+1)
      } 
     
    }else {
        console.log("undefined")
        return undefined
    }
  }
  if(multiplier===1 && letters[string[string.length-1]] ){
    sum += (letters[string[string.length-1]] * multiplier)
  }
  return sum
}
function testIt(input, expected){
    const actual = convertTamil(input)
    if(expected === actual){
        console.log(`Input: ${input}-- pass, expected ${expected} and received ${actual}`);
    }
    if(expected !== actual){
        console.log(`Input: ${input}-- fail, expected ${expected} but received ${actual}`);
    }
}
testIt(2, 2) // accept an integer
testIt("2", 2) // accept one digit
testIt("b", 100) //accept single letter
testIt("2a1", 21)
testIt("c5", 1005) // accepts numbers that start with 1
testIt("ba5", 115) // bug now shows up here
testIt("a2", 12)
testIt("cba", 1110) // not passing. I introduced a bug where it's only multiplying by 1 at the end
testIt("ab", undefined) // now failing
testIt("aa", undefined)
testIt("2aa", undefined)

/*
Edge cases:
- no multiplier
- redo broader flow: 
  - if number, 
  - if letter: 
      letter in alphabet
      letter not in alphabet (wrong order, duplicate letter)
- should be reccursive?
  */