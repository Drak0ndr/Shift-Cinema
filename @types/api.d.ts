interface StandartResponse {
   success: boolean
   reason: string
}

interface GetTodayResponse {
   success: boolean
   reason: string
   films: Film[]
}

interface GetFilmResponse {
   success: boolean
   reason: string
   film: Film
}

interface GetFilmScheduleResponse {
   success: boolean
   reason: string
   schedules: {
      date: string
      seances: Seance[]
   }[]
}

interface PostPaymentResponse {
   success: boolean
   reason: string
   order: {
      filmName: string
      orderNumber: number
      tickets: {
         filmId: string
         row: number
         column: number
         seance: {
            date: string
            time: string
         }
         phone: string
         status: string
      }[]
      person: {
         firstname: string
         lastname: string
         middlename: string
         phone: string
      }
      status: string
   }
}

interface PostPaymentRequest {
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

interface PostOtpRespose {
   success: boolean
   reason: string
   retryDelay: number
}

interface PostSigninRespose {
   success: boolean
   reason: string
   user: {
      phone: string
      firstname: string
      middlename: string
      lastname: string
      email: string
      city: string
   }
   token: string
}

interface GetSessionResponse {
   success: boolean
   reason: string
   user: User
}

interface GetOrdersResponse {
   success: boolean
   reason: string
   orders: Order[]
}

interface PatchProfileResponce {
   success: true
   reason: 'string'
   user: User
}

interface User {
   _id: string
   phone: string
   firstname: string
   lastname: string
   middlename: string
   email?: string
   city?: string
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

interface Seance {
   time: string
   hall: {
      name: string
      places: Place[][]
   }
}

interface Order {
   filmName: string
   orderNumber: number
   tickets: {
      filmId: string
      row: number
      column: number
      seance: {
         date: string
         time: string
      }
      phone: string
      status: string
   }[]
   person: {
      firstname: string
      lastname: string
      middlename: string
      phone: string
   }
   status: 'PAYED' | 'CANCELED'
}

interface Place {
   price: number
   type: string
}
