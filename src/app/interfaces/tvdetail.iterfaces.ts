export interface ITvdetail {
    adult: boolean
    backdrop_path: any
    belongs_to_collection: any
    budget: number
    genres: any
    last_episode_to_air?: Episode
    homepage: string
    id: number
    imdb_id: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: ProductionCompany[]
    production_countries: ProductionCountry[]
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: SpokenLanguage[]
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
    name: string
  }
  
  export interface Episode {
    air_date?: string
    episode_number?: number
    id?: number
    name?: string
    overview?: string
    production_code: string
    runtime: number
    season_number: number
    show_id: number
    still_path: string
    vote_average: number
    vote_count: number
  }

  export interface Genre {
    id: number
    name: string
  }
  
  export interface ProductionCompany {
    id: number
    logo_path?: string
    name: string
    origin_country: string
  }
  
  export interface ProductionCountry {
    iso_3166_1: string
    name: string
  }
  
  export interface SpokenLanguage {
    english_name: string
    iso_639_1: string
    name: string
  }