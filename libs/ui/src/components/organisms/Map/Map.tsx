'use client'
import React from 'react'
import MapGl, { Map as MapProps, useMap } from 'react-map-gl'

export type ViewState = {
  latitude: number
  longitude: number
  zoom?: number
}

type MapProps = React.ComponentProps<typeof MapGl>

type IMapProps = MapProps & { height?: string }

export const Map = ({ height = 'calc(100vh - 4rem)', ...props }: IMapProps) => {
  return (
    <MapGl
      {...props}
      mapStyle={'mapbox://styles/brayhamcarvalho/clyhbmkyd01jm01qo0j9z8z0h'}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      style={{ height }}
      pitch={22.5}
      scrollZoom={false}
      doubleClickZoom={false}
    >
      <StyleMap />
      {props.children}
    </MapGl>
  )
}

export const StyleMap = () => {
  const { current } = useMap()

  React.useEffect(() => {
    if (current) {
      current.on('style.load', () => {
        const map = current.getMap()
        if (map) {
          map.setFog({
            color: 'rgb(250,250,250)', // Lower atmosphere
            range: [1, 10],
            'high-color': 'rgb(200,200,200)', // Upper atmosphere
            'horizon-blend': 0.05, // Atmosphere thickness (default 0.2 at low zooms)
            'space-color': 'rgb(150, 150, 150)', // Background color
            'star-intensity': 0.5, // Background star brightness (default 0.35 at low zooms)
          })
        }
      })
    }
  }, [current])

  return null
}
