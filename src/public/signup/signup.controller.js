(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['$http', 'ApiPath', 'MyInfoService'];
function SignupController($http, ApiPath, MyInfoService) {

  var signupCtrl = this;
  signupCtrl.found = true;
  signupCtrl.myInfo = {};
  signupCtrl.saved = false;

  signupCtrl.submit = function () {

    signupCtrl.saved = false;
    MyInfoService.isSaved = false;

    $http.get(ApiPath + '/menu_items/' + signupCtrl.favorite + '.json')
    .then(function (response) {

       signupCtrl.found = true;
       signupCtrl.myInfo.favorite = response.data
       MyInfoService.myInfo = signupCtrl.myInfo
       MyInfoService.isSaved = true;
       signupCtrl.saved = true;

     }).catch(function (error) {

       signupCtrl.found = false;
       MyInfoService.myInfo = {}

     });
  };

}


})();
