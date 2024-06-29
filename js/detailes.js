export class Game {
    title;
    thumbnail;
    short_description;
    platform;
    genre;
    
    
    async data(cat){
      
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '7d57eae468msh023aaf122f897f2p14effbjsnd7ad65b9cfab',
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
      const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`, options);
        const result = await response.json();
        // this.title=result[1].title
        // console.log(result);
        return result;
  
       
    }
    async details(id){
      
        const options = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '7d57eae468msh023aaf122f897f2p14effbjsnd7ad65b9cfab',
		    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
          }
        };
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
          const result = await response.json();
          // this.title=result[1].title
          // console.log(result);
          return result;
    
         
      }
  }




//   const url = 'https://free-to-play-games-database.p.rapidapi.com/api/game?id=452';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '7d57eae468msh023aaf122f897f2p14effbjsnd7ad65b9cfab',
// 		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }