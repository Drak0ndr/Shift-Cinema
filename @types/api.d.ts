interface getTodayResponse {
   success: boolean
   reason: string
   films: Film[]
}

interface getFilmResponse {
   success: boolean
   reason: string
   film: Film
}

interface getFilmScheduleResponse {
   success: boolean
   reason: string
   schedules: {
      date: string
      seances: seance[]
   }[]
}

interface postPaymentRequest {
   filmId: string
   person: {
      firstname: string
      lastname: string
      middlename: string
      phone: string
   }
   debitCard: {
      pan: string
      expireDate: string
      cvv: string
   }
   seance: {
      date: string
      time: string
   }
   tickets: {
      row: number
      column: number
   }[]
}

interface Film {
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
}

interface seance {
   time: string
   hall: {
      name: string
      places: {
         price: number
         type: string
      }[][]
   }
}
