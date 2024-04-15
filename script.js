
    // JavaScript code goes here
    document.getElementById('searchButton').addEventListener('click', searchMovie);
    document.getElementById('randomButton').addEventListener('click', getRandomMovie);

    function searchMovie() {
        const searchTerm = document.getElementById('searchInput').value;
        const apiKey = 'eUVo5V1T7AOpgluKSnPiHVLvzwZI99vJdtsAe6GI'; // Replace 'YOUR_API_KEY' with your actual API key
        const apiUrl = `https://api.watchmode.com/v1/search?api_key=${apiKey}&query=${searchTerm}`; // Replace 'https://api.example.com' with your actual API endpoint
      
        fetch(apiUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            displayMovies(data.results);
          })
          .catch(error => console.error('Error fetching data:', error));
      }
      
      function getRandomMovie() {
        const apiKey = 'eUVo5V1T7AOpgluKSnPiHVLvzwZI99vJdtsAe6GI'; // Replace 'YOUR_API_KEY' with your actual API key
        const apiUrl = `https://api.watchmode.com/v1/random?api_key=${apiKey}`; // Replace 'https://api.example.com' with your actual API endpoint
      
        fetch(apiUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            displayMovie(data);
          })
          .catch(error => console.error('Error fetching data:', error));
      }
      

    function displayMovies(movies) {
      const mainContent = document.getElementById('mainContent');
      mainContent.innerHTML = ''; // Clear previous content
      movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.innerHTML = `
          <h2>${movie.title}</h2>
          <img src="${movie.poster}" alt="${movie.title}">
          <p>${movie.synopsis}</p>
          <p>Release Date: ${movie.release_date}</p>
          <p>Genre: ${movie.genre}</p>
        `;
        mainContent.appendChild(movieElement);
      });
    }

    function displayMovie(movie) {
      const mainContent = document.getElementById('mainContent');
      mainContent.innerHTML = ''; // Clear previous content
      const movieElement = document.createElement('div');
      movieElement.innerHTML = `
        <h2>${movie.title}</h2>
        <img src="${movie.poster}" alt="${movie.title}">
        <p>${movie.synopsis}</p>
        <p>Release Date: ${movie.release_date}</p>
        <p>Genre: ${movie.genre}</p>
      `;
      mainContent.appendChild(movieElement);
    }