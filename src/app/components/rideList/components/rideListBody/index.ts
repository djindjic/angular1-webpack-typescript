import 'angular';

class RideListBody implements ng.IComponentOptions {
    public template: string = require('./template.html');
    public bindings: any = {
        rides: '='
    };
}

export default angular.module('rideListBody', [])
    .component('rideListBody', new RideListBody());