import { MapMode } from '../constants'

const SF_LOCATION = {
  latitude: 37.751537058389985,
  longitude: -122.42694203247012,
}

const NY_LOCATION = {
  latitude: 40.70237278,
  longitude: -74.01143532,
}

const INITIAL_STATE = {
  mapViewState: {
    latitude: NY_LOCATION.latitude,
    longitude: NY_LOCATION.longitude,
    zoom: 11.5,
    pitch: 0,
    bearing: 0
  },
  flightArcs: null,
  airports: null,
  trees: null,
  mapMode: MapMode.NONE,
};


// ---- Reducer ---- //
export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'UPDATE_MAP':
    return {...state, mapViewState: action.mapViewState}

  case 'SELECT_MODE':
  const mapViewState = state.mapViewState

    // Move to NY
    if (action.mode === MapMode.TREES || action.mode === MapMode.TREES_HEATMAP) {
      mapViewState.latitude = NY_LOCATION.latitude
      mapViewState.longitude = NY_LOCATION.longitude
    }

    // Move to SF
    if (action.mode === MapMode.FLIGHT || action.mode === MapMode.FLIGHT_GLSL) {
      mapViewState.latitude = SF_LOCATION.latitude
      mapViewState.longitude = SF_LOCATION.longitude
    }

    return {...state, mapViewState, mapMode: action.mode}

  case 'LOAD_FLIGHT_POINT': {
    const flightArcs = []
    return {...state, flightArcs}
  }

  case 'LOAD_AIRPORT': {
    let airports = {}
    return {...state, airports}
  }

  case 'LOAD_TREES': {
    let trees = []
    return {...state, trees}
  }

  default:
    return state;
  }
}
