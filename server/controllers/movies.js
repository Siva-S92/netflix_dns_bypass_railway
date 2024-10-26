import axios from "axios";

export async function resolveDNS(hostname) {
  try {
    const response1 = await fetch(
      `https://dns.google/resolve?name=${hostname}`
    );
    const response = await response1.json();

    if (response.Answer) {
      // Extract the first IP address (A record)
      let ip = response.Answer.find((record) => record.type === 1).data;
      return ip;
    }
  } catch (error) {
    console.log("No valid IP found for the domain.");
  }
}

export const MovieById = async (req, res) => {
  try {
    // Manually resolve the IP address if necessary
    const ip = await resolveDNS("api.themoviedb.org"); // Resolve this using DoH or similar
    const { movieId } = req.body;

    // Make the request to the TMDB API using the resolved IP
    const response = await axios.get(
      `https://${ip}/3/movie/${movieId}/videos?language=en-US`,
      {
        headers: {
          Host: "api.themoviedb.org", // Override Host header
          "User-Agent": "Axios", // Custom User-Agent if necessary
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmQzY2ZiNTE4NmIzMzVkM2M2ZjBlNGZlMDFlMDEzYSIsInN1YiI6IjY1ZjJkNjQxNWE3ODg0MDE2M2Q3NzIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LsyHrSN_DV6Wmop08mTLDe77izXI26W4Xe6S7oSCC-4",
        },
      }
    );

    // Send the response back to the React client
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const nowPlayingMoviesUrl = async (req, res) => {
  try {
    // Manually resolve the IP address if necessary
    const ip = await resolveDNS("api.themoviedb.org"); // Resolve this using DoH or similar

    // Make the request to the TMDB API using the resolved IP
    const response = await axios.get(
      `https://${ip}/3/movie/now_playing?language=en-US&page=1`,
      {
        headers: {
          Host: "api.themoviedb.org", // Override Host header
          "User-Agent": "Axios", // Custom User-Agent if necessary
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmQzY2ZiNTE4NmIzMzVkM2M2ZjBlNGZlMDFlMDEzYSIsInN1YiI6IjY1ZjJkNjQxNWE3ODg0MDE2M2Q3NzIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LsyHrSN_DV6Wmop08mTLDe77izXI26W4Xe6S7oSCC-4",
        },
      }
    );

    // Send the response back to the React client
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const popularMoviesUrl = async (req, res) => {
  try {
    // Manually resolve the IP address if necessary
    const ip = await resolveDNS("api.themoviedb.org"); // Resolve this using DoH or similar

    // Make the request to the TMDB API using the resolved IP
    const response = await axios.get(
      `https://${ip}/3/movie/popular?language=en-US&page=1`,
      {
        headers: {
          Host: "api.themoviedb.org", // Override Host header
          "User-Agent": "Axios", // Custom User-Agent if necessary
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmQzY2ZiNTE4NmIzMzVkM2M2ZjBlNGZlMDFlMDEzYSIsInN1YiI6IjY1ZjJkNjQxNWE3ODg0MDE2M2Q3NzIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LsyHrSN_DV6Wmop08mTLDe77izXI26W4Xe6S7oSCC-4",
        },
      }
    );

    // Send the response back to the React client
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const topRatedMoviesUrl = async (req, res) => {
  try {
    // Manually resolve the IP address if necessary
    const ip = await resolveDNS("api.themoviedb.org"); // Resolve this using DoH or similar

    // Make the request to the TMDB API using the resolved IP
    const response = await axios.get(
      `https://${ip}/3/movie/top_rated?language=en-US&page=1`,
      {
        headers: {
          Host: "api.themoviedb.org", // Override Host header
          "User-Agent": "Axios", // Custom User-Agent if necessary
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmQzY2ZiNTE4NmIzMzVkM2M2ZjBlNGZlMDFlMDEzYSIsInN1YiI6IjY1ZjJkNjQxNWE3ODg0MDE2M2Q3NzIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LsyHrSN_DV6Wmop08mTLDe77izXI26W4Xe6S7oSCC-4",
        },
      }
    );

    // Send the response back to the React client
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const upcomingMoviesUrl = async (req, res) => {
  try {
    // Manually resolve the IP address if necessary
    const ip = await resolveDNS("api.themoviedb.org"); // Resolve this using DoH or similar

    // Make the request to the TMDB API using the resolved IP
    const response = await axios.get(
      `https://${ip}/3/movie/upcoming?language=en-US&page=1`,
      {
        headers: {
          Host: "api.themoviedb.org", // Override Host header
          "User-Agent": "Axios", // Custom User-Agent if necessary
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmQzY2ZiNTE4NmIzMzVkM2M2ZjBlNGZlMDFlMDEzYSIsInN1YiI6IjY1ZjJkNjQxNWE3ODg0MDE2M2Q3NzIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LsyHrSN_DV6Wmop08mTLDe77izXI26W4Xe6S7oSCC-4",
        },
      }
    );

    // Send the response back to the React client
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const Search_Movie_URL = async (req, res) => {
  try {
    // Manually resolve the IP address if necessary
    const ip = await resolveDNS("api.themoviedb.org"); // Resolve this using DoH or similar
    const { searchMovie } = req.body;

    const url = `https://${ip}/3/search/movie?query=`;

    const response = await axios.get(
      `${url}${searchMovie}&include_adult=false&language=en-US&page=1`,
      {
        headers: {
          Host: "api.themoviedb.org", // Override Host header
          "User-Agent": "Axios", // Custom User-Agent if necessary
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmQzY2ZiNTE4NmIzMzVkM2M2ZjBlNGZlMDFlMDEzYSIsInN1YiI6IjY1ZjJkNjQxNWE3ODg0MDE2M2Q3NzIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LsyHrSN_DV6Wmop08mTLDe77izXI26W4Xe6S7oSCC-4",
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


