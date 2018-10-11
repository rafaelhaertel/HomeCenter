'use strict';

/* Filters */

angular.module('myApp.filters', []).
filter('interpolate', ['version', function(version) {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, version);
  }
}])
.filter('range', [function() {
  return function(input, min, max) {
    min = parseInt(min); //Make string input int
    max = parseInt(max);
    for (var i=min; i<max; i++)
      if (i < 10) {
        input.push("0" + i.toString());
      }
      else {
        input.push(i.toString());
      }
      return input;
    };
  }])
.filter('timeSplitter', [function() {
 return function(input, time) {
  var delimiter = delimiter || ':';
  var index = null;
  var string = input.split(delimiter);

  if (time == 'hours') {
    index = 0;
  }

  if (time == 'minutes') {
    index = 1;
  }

  if (time == 'seconds') {
    index = 2;
  }

  return string[index];
}
}])
.filter("localeOrderBy", [function () {
    return function (array, sortPredicate, reverseOrder) {
        if (!Array.isArray(array)) return array;
        if (!sortPredicate) return array;

        var isString = function (value) {
            return (typeof value === "string");
        };

        var isNumber = function (value) {
            return (typeof value === "number");
        };

        var isBoolean = function (value) {
            return (typeof value === "boolean");
        };
        var isDate = function (value) {
            return (toString.call(value) === '[object Date]');
        };

        var arrayCopy = [];
        angular.forEach(array, function (item) {
            arrayCopy.push(item);
        });

        arrayCopy.sort(function (a, b) {
            var valueA = a[sortPredicate];
            var valueB = b[sortPredicate];

            if (isString(valueA))
                return !reverseOrder ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);

            if (isNumber(valueA) || isBoolean(valueA) || isDate(valueA))
                return !reverseOrder ? valueA - valueB : valueB - valueA;

            return 0;
        });

        return arrayCopy;
    }
}]);
    