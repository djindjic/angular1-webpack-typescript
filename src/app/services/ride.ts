import {Ride} from '../models/ride';
import {map, prop} from 'ramda';
import constants from '../constants';

export class RideService {
    static $inject = ['$http', 'baseUri'];

    constructor(private $http: ng.IHttpService,
                private baseUri: string) {
    }

    getAll(): ng.IPromise<Ride[]> {
        return this.$http
            .get(`${this.baseUri}rides`)
            .then(prop('data'))
            .then(map(Ride.fromObject));
    }
}

export default angular.module('rideService', [
    constants.name
]).service('rideService', RideService);
