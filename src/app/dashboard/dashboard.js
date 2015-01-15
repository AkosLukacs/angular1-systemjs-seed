import angular from 'angular';
import {modalModule} from 'src/common/components/modal';
import './dashboards.tpl';

export var dashboardModule = angular.module('dashboard', 
	[modalModule.name, 'app/dashboard/dashboards.tpl.html']);

dashboardModule.config(function($stateProvider){
  $stateProvider.state('dashboards', {
    url: '/dashboards',
    templateUrl: 'app/dashboard/dashboards.tpl.html',
    controller: 'DashboardCtrl'
  });
});

dashboardModule.controller('DashboardCtrl', $scope => {
	console.log('dashboard!');
});
