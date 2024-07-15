export const MAX_AGE = 1 * 24 * 60 * 60

export const initialViewState = {
  longitude: -40.30706,
  latitude: -20.29812,
  zoom: 8,
}

export type Location = {
  latitude: number
  longitude: number
}

type LngLatLike = {
  lng: number
  lat: number
}

export const initialBoundsArray = [
  { lat: -20.419, lng: -40.514 },
  { lat: -20.177, lng: -40.1 },
] as [LngLatLike, LngLatLike]
