/**Write a function that takes in a DNA string (for example 'CTAGGGTA') and returns a new string with any non-canonical DNA base values removed. Canonical base values are single characters: 'C', 'T', 'A', and 'G' only. Make the function case sensitive - meaning 'c' (lower case) should be removed from the string, but 'C' (upper case) is a good value and should remain. If the DNA string is empty, just return an empty string */
const pairElement = (str) => {
    let root  = str.split('');
    const arr = []; 
    for(let i= 0; i<root.length; i++){
      
      let selec =0;
      (root[i]== "C")? (arr.push(root[i])):
      (root[i]== "T")? (arr.push(root[i])):
      (root[i]== "A")? (arr.push(root[i])):
      (root[i]== "G")? (arr.push(root[i])):false;
      
    }
    return arr.join('');
  }
  console.log(pairElement('aACcTtAgGGGTA'));
  console.log(pairElement("ATCGA"));
  console.log(pairElement("TTGAG"));
  console.log(pairElement(""));