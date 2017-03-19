(function () {
"use strict";

angular.module('common')
.service('MyInfoService', MyInfoService);


//MyInfo.$inject = ['$http', 'ApiPath'];
function MyInfoService() {
  var service = this;

  service.myInfo = {};
  service.isSaved = false;

}

})();
