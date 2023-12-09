const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const imgPath = 'https://image.tmdb.org/t/p/w1280';

const main = document.getElementById('main');

async function getMovies(){
    const response = await fetch(APIURL);
    const resData=await response.json();

    // console.log(resData);

 
    resData.results.forEach(movie=>{
            // const img=document.createElement('img');
            // img.src = imgPath+movie.poster_path;

            // document.body.appendChild(img);

            const movieEl=document.createElement('div');
            movieEl.classList.add("movie");
           
            movieEl.innerHTML=`
            <img
                src="${imgPath+movie.poster_path}"
                alt=${movie.title}
            />
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <span>${movie.vote_average}</span>
            </div>
            `;

            main.appendChild(movieEl);
    });

    return resData;
}

getMovies();