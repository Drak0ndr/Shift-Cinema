interface getTodayResponse {
   success: boolean
   reason: string
   films: {
      id: string
      name: string
      originalName: string
      description: string
      releaseDate: string
      actors: {
         id: string
         professions: string
         fullName: string
      }[]
      directors: {
         id: string
         professions: string
         fullName: string
      }[]
      runtime: number
      ageRating: string
      genres: string[]
      userRatings: {
         kinopoisk: string
         imdb: string
      }
      img: string
      country: {
         name: string
         code: string
         code2: string
         id: number
      }
   }[]
}
