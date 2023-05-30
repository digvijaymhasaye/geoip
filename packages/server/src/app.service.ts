import { Injectable } from '@nestjs/common';
import { Reader } from 'maxmind';
import { readFileSync } from 'fs';
import * as path from 'path';
import { GEOIP_ASN_DB_LOCATION, GEOIP_CITY_DB_LOCATION } from './app.config';

@Injectable()
export class AppService {
  asn: any;
  city: any;
  constructor() {
    const cityDbBuffer = readFileSync(path.resolve(GEOIP_CITY_DB_LOCATION));
    const asnDbBuffer = readFileSync(path.resolve(GEOIP_ASN_DB_LOCATION));
    this.city = new Reader(cityDbBuffer);
    this.asn = new Reader(asnDbBuffer);
  }

  getHello(): string {
    return 'Hello World!';
  }

  getIPLocation(ip: string): any {
    const cityDetails = this.city.get(ip);
    const asnDetails = this.asn.get(ip);

    return { cityDetails, asnDetails };
  }
}
