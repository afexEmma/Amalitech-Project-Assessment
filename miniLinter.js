let story = 'Last weekend, I took literally the most beautiful bike ride of my life.\
 The route is called "The 9W to Nyack" and it actually stretches all the way from \
 Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure \
 from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//convert story to an array and store in storyWords
let storyWords = story.split(" ");
console.log(storyWords.length)

//filter the unnecessary words out of the storyWords Array and store  result in betterWords.
const betterWords = storyWords.filter(word => 
  !unnecessaryWords.includes(word)
)
console.log(betterWords.length)

// filter overused words out of the betterWords array and store in overUseBool.
let overUseBool = betterWords.filter(word => 
  overusedWords.includes(word)
);

console.log(`You've over used ${overUseBool.length} overused words`)

//count store the number of sentences.
let count = 0;

//increase count by 1 whenever there is '.' or '!'
betterWords.forEach(word => {
  if(word[word.length -1] === '.' || word[word.length -1] === '!'  ){
    count++;
  }
})

console.log(`Number of Sentence: ${count}`)

console.log(betterWords.join(" "))


