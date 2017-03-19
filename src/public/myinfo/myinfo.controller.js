(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MyInfoService', 'ApiPath'];
function MyInfoController(MyInfoService, ApiPath) {

  var myInfoCtrl = this;
  myInfoCtrl.myInfo = MyInfoService.myInfo;
  myInfoCtrl.isSaved = MyInfoService.isSaved;
  myInfoCtrl.basePath = ApiPath;

}

})();
