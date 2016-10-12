import 'angular';
import '../styles/screen.scss';
import constants from './constants';
import ambulanceApplication from './components/ambulanceApplication';

angular.bootstrap(document, [
    constants.name,
    ambulanceApplication.name
], {
    strictDi: true
});