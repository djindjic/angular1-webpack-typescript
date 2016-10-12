import 'angular';
import rideListHeader from './components/rideListHeader';
import rideListBody from './components/rideListBody';

class RideList implements ng.IComponentOptions {
    public template: string = require('./template.html');
    public bindings: any = {
        rides: '=',
        title: '@'
    };
}

export default angular.module('rideList', [
    rideListHeader.name,
    rideListBody.name
]).component('rideList', new RideList());