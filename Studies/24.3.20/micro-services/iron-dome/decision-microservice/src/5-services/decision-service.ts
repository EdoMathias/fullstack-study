import { populatedAreas } from '../2-utils/populated-areas';
import { GeolocationModel } from '../3-models/geolocation-model';

class DecisionService {
  public doWeNeedToIntercept(attackLocation: GeolocationModel): boolean {
    for (const populatedArea of populatedAreas) {
      if (this.is100MeterProximity(populatedArea, attackLocation)) {
        return true;
      }
    }
    return false;
  }

  private is100MeterProximity(
    geo1: GeolocationModel,
    geo2: GeolocationModel
  ): boolean {
    return this.arePointsInProximity(geo1, geo2, 100);
  }
  private arePointsInProximity(
    geo1: GeolocationModel,
    geo2: GeolocationModel,
    proximity: number
  ): boolean {
    const distance = this.calculateDistance(geo1, geo2);
    return distance <= proximity;
  }

  private toRadians(degrees: number): number {
    return (degrees * Math.PI) / 180;
  }

  private calculateDistance(
    point1: GeolocationModel,
    point2: GeolocationModel
  ): number {
    const earthRadius = 6371000; // Radius of the Earth in meters
    const lat1 = this.toRadians(point1.latitude);
    const lat2 = this.toRadians(point2.latitude);
    const deltaLat = this.toRadians(point2.latitude - point1.latitude);
    const deltaLon = this.toRadians(point2.longitude - point1.longitude);
    const a =
      Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
      Math.cos(lat1) *
        Math.cos(lat2) *
        Math.sin(deltaLon / 2) *
        Math.sin(deltaLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadius * c;
  }
}

export const decisionService = new DecisionService();
