import 'angular';
import 'angular-mocks';
import ambulanceApplicationModule from './index';

describe('Component: ambulanceApplication', () => {
    let componentController;

    beforeEach(angular.mock.module(ambulanceApplicationModule.name));
    beforeEach(angular.mock.inject(($injector: any) => {
        componentController = $injector.get('$componentController');
    }));

    it('should call rideService.getAll() on initialization', () => {
        const rideServiceMock = {
            getAll(): any { return false; }
        };

        spyOn(rideServiceMock, 'getAll').and.returnValue({
            then: angular.noop
        });

        componentController('ambulanceApplication', {
            rideService: rideServiceMock
        });

        expect(rideServiceMock.getAll).toHaveBeenCalled();
    });
});