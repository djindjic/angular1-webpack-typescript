import 'angular';
import 'angular-mocks';
import rideServiceModule, {RideService} from './ride';
import {Ride} from '../models/ride';
import {rides as rideFixtures} from './ride.fixtures';

describe('Component: ambulanceApplication', () => {
    let $httpBackend: angular.IHttpBackendService;
    let baseUri: string;
    let rideService: RideService;

    beforeEach(angular.mock.module(rideServiceModule.name));
    beforeEach(inject(($injector: any) => {
        $httpBackend = $injector.get('$httpBackend');
        baseUri = $injector.get('baseUri');
        rideService = $injector.get('rideService');

        $httpBackend.expectGET(`${baseUri}rides`).respond(rideFixtures);
    }));

    it('getAll() returns all of them', () => {
        rideService.getAll().then((rides: Ride[]) => {
            expect(rides[1].rideNumber).toEqual(2);
        });
        $httpBackend.flush();
    });
});