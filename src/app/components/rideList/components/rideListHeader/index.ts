import 'angular';

class RideListHeader implements ng.IComponentOptions {
    public template: string = require('./template.html');
}

export default angular.module('rideListHeader', [])
    .component('rideListHeader', new RideListHeader());