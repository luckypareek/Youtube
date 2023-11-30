import {faker} from "@faker-js/faker"

    
       
        
export   function generate() {
    return faker.person.firstName()
}          

export function makeRandomMessage(length) {
    let sentence = faker.lorem.sentence();

    // Split the sentence into an array of words
    const words = sentence.split(' ');
    
    // If the sentence has more than 5 words, join the first 5 words
    if (words.length > 5) {
      sentence = words.slice(0, 5).join(' ');
    }
    return sentence
    }



      

    
export function formatCount(count) {
  if (count < 1000) {
      return count.toString();
  } else if (count < 1000000) {
      return (count / 1000).toFixed(1) + 'K';
  } else if (count < 1000000000) {
      return (count / 1000000).toFixed(1) + 'M';
  } else {
      return (count / 1000000000).toFixed(1) + 'B';
  }
}