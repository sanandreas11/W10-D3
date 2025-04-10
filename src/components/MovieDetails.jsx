import { useEffect } from "react"
import { useParams } from "react-router-dom"

const MovieDetails = function () {
  const params = useParams()

  useEffect(() => {
    fetch("http://www.omdbapi.com/?apikey=9322ca3e&i=" + params.movieId)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error()
        }
      })
      .then((data) => {
        console.log("data", data)
      })
      .catch()
  }, [])

  console.log("params", params)
  return <div></div>
}

export default MovieDetails
