const _ = {
    clamp(number,lower,upper) {
        const lowerClampedValue = Math.max(number,lower);
        const clampedValue = Math.min(lowerClampedValue,upper);  
    return clampedValue;
  },
    inRange(number,start,end) {
      if (end === undefined) {
        end = start
        start = 0;
      } else if (start>end) {
        const temp = end
        end = start
        start = temp
      }
      let isInRange = true;
      if (start <= number && number < end) {
        isInRange = true
      } else {
        isInRange = false;
      } 
      return isInRange
      
  },
    words(string) {
      const words = string.split (' ')
    return words
  },
    pad(string,length) {
      if (length < string.length) {
        return string
      } else {
        const stringDif = (length - string.length)
        const begLength = Math.floor(stringDif/2)
        const endLength = Math.round(stringDif/2)
        const begPad =  ' '.repeat(begLength) 
        const endPad = ' '.repeat(endLength)
    return (begPad + string + endPad)
      }
    },
    has(object,key) {
      return object[key] !== undefined;
  },
    invert(object) {
          let invertedObject = {};
          for (let key in object) {
              let originalValue = object[key];
              invertedObject[originalValue] = key;
          }
          return invertedObject;
      },
    findKey(object, predicate){
      for (let key in object) {
        let value = object[key]
        let predicateReturnValue = predicate(value);
        if (predicateReturnValue) {
          return key;
        }
      }
  return undefined
    },
    drop(arr,num) {
      newArr = [];
      if (num === undefined) {
        return arr.slice(1)
      } else {
      newArr = arr.slice(num)
      return newArr
      }
    },
        dropWhile : function(array, fn){
        let idx = 0;
        while (fn(array[idx], idx)){
               idx+=1;
               }      
        return this.drop(array, idx);
      },
    chunk(arr,size){
      if (size === undefined){
        size = 1
      } 
      let arrayChunks = [];
        for (i = 0; i<arr.length; i+=size) {
          let arrayChunk = arr.slice(i,i+size)
          arrayChunks.push(arrayChunk)
        }
        return arrayChunks
      }
  };
  // Do not write or modify code below this line.
  module.exports = _;
  
  




