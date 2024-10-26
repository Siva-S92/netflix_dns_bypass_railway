// export async function resolveDNS(hostname) {
//   try {
//     const response1 = await fetch(
//       `https://dns.google/resolve?name=${hostname}`
//     );
//     const response = await response1.json();

//     if (response.Answer) {
//       // Extract the first IP address (A record)
//       let ip = response.Answer.find((record) => record.type === 1).data;
//       return ip;
//     }
//   } catch (error) {
//     console.log("No valid IP found for the domain.");
//   }
// }

// **************************************************************************************

// export const API_ENDPOINT = "https://netflix-dns-bypass-render.onrender.com/api/user";
// export const BACKEND_MOVIE_API = "https://netflix-dns-bypass-render.onrender.com/proxy/tmdb";
// export const BACKEND_SERVER = "https://netflix-dns-bypass-render.onrender.com"




export const API_ENDPOINT = "http://localhost:8000/api/user";
export const BACKEND_MOVIE_API = "http://localhost:8000/proxy/tmdb";
export const BACKEND_SERVER = "http://localhost:8000"



// export const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmQzY2ZiNTE4NmIzMzVkM2M2ZjBlNGZlMDFlMDEzYSIsInN1YiI6IjY1ZjJkNjQxNWE3ODg0MDE2M2Q3NzIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LsyHrSN_DV6Wmop08mTLDe77izXI26W4Xe6S7oSCC-4",
//   },
// };

// export const nowPlayingMoviesUrl = async () => {
//   const ip = await resolveDNS("api.themoviedb.org");
//   return `https://${ip}/3/movie/now_playing?language=en-US&page=1`;
// };

// export const popularMoviesUrl = async () => {
//   const ip = await resolveDNS("api.themoviedb.org");
//   return `https://${ip}/3/movie/popular?language=en-US&page=1`;
// };

// export const topRatedMoviesUrl = async () => {
//   const ip = await resolveDNS("api.themoviedb.org");
//   return `https://${ip}/3/movie/top_rated?language=en-US&page=1`;
// };

// export const upcomingMoviesUrl = async () => {
//   const ip = await resolveDNS("api.themoviedb.org");
//   return `https://${ip}/3/movie/upcoming?language=en-US&page=1`;
// };

// export const Search_Movie_URL = async () => {
//   const ip = await resolveDNS("api.themoviedb.org");
//   return `https://${ip}/3/search/movie?query=`;
// };

// export const tmdbImgPath = async () => {
//   const ip = await resolveDNS("image.tmdb.org");
//   return `https://${ip}/t/p/w500`;
// };
