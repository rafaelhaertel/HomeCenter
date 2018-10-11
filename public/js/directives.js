'use strict';

/* Directives */

angular.module('myApp.directives', [])
  .directive('numbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9+\,]/g, '');

                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }            
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
  })
  .directive('birthdateValidator', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {      
      element.on('keydown', function(e){
        var k = e.keyCode;

        if(
          k != 8 &&
          k != 9 &&
          k != 13 &&
          (( k < 48 || k > 105 ) || (k > 57 && k < 96))
        ){
          e.preventDefault();
        }
      });
      element.on('keyup', function(e){
        var v = element.val();
        var k = e.keyCode;

        if(k == 8 && (v.length == 3 || v.length == 6)){
          scope.$apply(function () {
            element.val( v.slice(0,-1) );
          });
        }
        else if(v.length == 2 || v.length == 5){
          scope.$apply(function () {
            element.val( v + "/");
          });
        }
      });
    }
  }
});