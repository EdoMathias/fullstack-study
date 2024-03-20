export class GeolocationModel {
  public latitude: number;
  public longitude: number;

  public constructor(geolocation: GeolocationModel) {
    this.latitude = geolocation.latitude;
    this.longitude = geolocation.longitude;
  }

  // validation
}
