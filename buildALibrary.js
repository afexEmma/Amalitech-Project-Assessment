class Media {
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title(){
      return this._title;
    }
  
    get isCheckedOut(){
      return this._isCheckedOut;
    }
  
    get ratings(){
      return this._ratings;
    }
  
    set isCheckedOut(checkedOut){
      this._isCheckedOut = checkedOut;
    }
  
    toggleCheckOutStatus(){
      this._isCheckedOut = !this.CheckedOut
    }
  
    getAverageRating(){
      const len = this._ratings.length;
      const initialVal = 0;
      const sum = this._ratings.reduce((previousVal, currentVal) => previousVal + currentVal, initialVal);
  
      return sum / len;
    }
  
    addRating(rating){
      this._ratings.push(rating)
    }
  }
  
  //Class Book inheriting from Media Class
  class Book extends Media{
    constructor(author, title, pages){
      super(title)
      this._author = author;
      this._pages = pages;
    }
  
    get author(){
      return this._author;
    }
  
    get pages(){
      return this._pages;
    }
  }
  
  //Class Movie inheriting from the Media class
  class Movie extends Media{
    constructor(director, title, runTime){
      super(title)
      this._director = director;
      this._runTime = runTime;
    }
  
    get director(){
      return this._director;
    }
  
    get runTime(){
      return this._runTime;
    }
  }
  
  //function to check if randomly generated song already exit in the suffle array.
  const found = (arr, searchSong) => {
    return arr.find(elem => elem === searchSong)
  }
  
  //Class CD extends Media
  class CD extends Media{
    constructor(artist, title, songs){
      super(title);
      this._artist = artist;
      this._songs = songs
    }
  
    get artist(){
      return this._artist;
    }
  
    get songs(){
      return this._songs;
    }
  
  //shuffle Method randomly sorted array of all songs in the songs property.
    shuffle(){
      let shuffled = [];
      const songArr = this._songs;
  
      for(let i in songArr){  
        let randomIndex = Math.floor(Math.random() * songArr.length)
        if(found(shuffled, songArr[randomIndex])){
          let randomIndex = Math.floor(Math.random() * songArr.length)
        }else{
          shuffled.push(songArr[randomIndex])
        }
      }
      return shuffled;
    }
  }
  
  //Creating a book instance
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  
  historyOfEverything.toggleCheckOutStatus()
  
  console.log(historyOfEverything.isCheckedOut);
  
  //Call .addRating() three times on historyOfEverything with inputs of 4, 5, and 5.
  historyOfEverything.addRating(4)
  historyOfEverything.addRating(5)
  historyOfEverything.addRating(6)
  
  //Call .getAverageRating() on historyOfEverything. Log the result to the console.
  console.log(historyOfEverything.getAverageRating())
  
  
  
  //Create a Movie instance.
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  
  speed.toggleCheckOutStatus()
  console.log(speed.isCheckedOut)
  
  //Call .addRating() three times on speed with inputs of 1, 1, and 5
  speed.addRating(1)
  speed.addRating(1)
  speed.addRating(5)
  
  //Call .getAverageRating() on speed. Log the result to the console.
  console.log(speed.getAverageRating())
  
  
  //Creat a CD instance
  const favPlaylist = new CD('Chris Brown', 'Loyalty', ['Body on me', 'Guidance', 'Under the Influence', 'Tempo', 'Royalty']);
  
  console.log(favPlaylist.shuffle())
  
  