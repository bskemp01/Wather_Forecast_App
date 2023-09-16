export interface GeoCodeLocation {
  city?: string | null | undefined;
  state?: string | null | undefined;
  postalCode?: number | null | undefined;
  country?: string;
}

export interface GeoCodeData {
  place_id?: number;
  licence?: string;
  powered_by?: string;
  osm_type?: string;
  osm_id?: number;
  boundingbox?: string[];
  lat?: string;
  lon?: string;
  display_name?: string;
  class?: string;
  type?: string;
  importance?: number;
}

export interface LatAndLong {
  latitude?: string;
  longitude?: string;
}
