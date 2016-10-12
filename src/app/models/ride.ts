import {UrgencyCode} from './enums/urgencyCode';
import {Patient} from './patient';
import {RideStatus} from './enums/rideStatus';
import {Location} from './location';
import {EnumDesc} from './enums/enumDesc';

export class Ride {
    rideNumber: number;
    urgencyCode: EnumDesc<UrgencyCode>;
    origin: Location;
    destination: Location;
    patient: Patient;
    createdAt: Date;
    rideStatus: EnumDesc<RideStatus>;
    
    static fromObject(item: any): Ride {
        const result = new Ride();

        result.rideNumber = item.rideNumber;
        result.urgencyCode = EnumDesc.fromObject<UrgencyCode>(item.urgencyCode);
        result.origin = Location.fromObject(item.origin);
        result.destination = Location.fromObject(item.destination);
        result.patient = Patient.fromObject(item.patient);
        result.createdAt = item.createdAt ? new Date(item.createdAt) : undefined;
        result.rideStatus = EnumDesc.fromObject<RideStatus>(item.rideStatus);

        return result;
    }
}