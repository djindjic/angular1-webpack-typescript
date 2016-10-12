import 'angular';
import {Ride} from '../../models/ride';
import rideList from '../rideList';
import rideService from '../../services/ride';
import {RideService} from '../../services/ride';

export class AmbulanceApplicationController {
    static $inject = ['rideService'];

    rides: Ride[];

    constructor(private rideService: RideService) {
        rideService.getAll().then((rides: Ride[]) => {
           this.rides = rides;
        });
    }
}

class AmbulanceApplication implements ng.IComponentOptions {
    public template = require('./template.html');
    public controller = AmbulanceApplicationController;
}

export default angular.module('ambulanceApplication', [
    rideList.name,
    rideService.name
]).component('ambulanceApplication', new AmbulanceApplication());