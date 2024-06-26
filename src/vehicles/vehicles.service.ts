import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class VehicleService {
  private readonly vehicles: any[];
  constructor() {
    this.vehicles = JSON.parse(
      readFileSync(
        join(process.cwd(), 'src/vehicles/vehicles.data.json'),
        'utf8',
      ),
    );
  }

  getVehicles(): any[] {
    return this.vehicles;
  }

  generateRandomVehicleData(): any {
    const randomIndex = Math.floor(Math.random() * this.vehicles.length);
    // generate a random latitude, longitude and speed
    // lat between -20.24571953578169 and -20.265185577202995
    // long between -40.27327454373077 and -40.25906248156139
    // speed between 0 and 100
    const vehicle = this.vehicles[randomIndex];

    vehicle.lat =
      -20.24571953578169 +
      Math.random() * (-20.265185577202995 + 20.24571953578169);

    vehicle.lng =
      -40.27327454373077 +
      Math.random() * (-40.25906248156139 + 40.27327454373077);

    vehicle.speed = Math.floor(Math.random() * 100);

    vehicle.status = 'moving';

    return vehicle;
  }
}
