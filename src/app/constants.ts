import 'angular';

export default angular.module('constants', [])
    .constant('version', '1.0.0.0')
    .constant('buildDate', '2016-01-01T12:00')
    .constant('baseUri', 'http://localhost:9091/api/');
