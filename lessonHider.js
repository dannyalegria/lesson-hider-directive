angular.module('lessonApp')
.directive('lessonHider', function() {

  return {
    templateUrl: 'lessonHider.html',
    restrict: 'E',
    scope: {
      lesson: '='
    },
    controller: function( $scope, lessonService ) {
      $scope.getSchedule = lessonService.getSchedule();
    },
    link: function( scope, element, attributes ) {

      scope.getSchedule.then(function( response ) {
        scope.schedule = response.data;

        scope.schedule.forEach(function(scheduleDay, lessonService ) {
          if (scheduleDay.lesson === scope.lesson) {
            scope.lessonDay = lessonService.weekday;
            element.css('text-decoration', 'line-through');
            return;
          }
        });
      });

    }
  }

});
