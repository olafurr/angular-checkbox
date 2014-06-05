angular.module('ngCheckbox', [])

.directive('checkbox', [
	'$rootScope',
	function ($rootScope) {
		return {
			restrict: 'E',
			replace: true,
			template: '<div></div>',
			scope: {
				ngModel: '=',
				size: '='
			},
			link: function ($scope, elem, attrs) {

				$scope.ngModel = false;

				elem.css({
					'position': 'relative',
					'display': 'inline-block',
					'width': scope.size + 'px',
					'height': scope.size + 'px',
					'background-color': '#fff',
					'border-radius': Math.floor(scope.size * 0.2) + 'px',
					'cursor': 'pointer'
				});


				elem.on('click', function () {
					$rootScope.$apply(function () {
						$scope.ngModel = !$scope.ngModel;
					});

					if (scope.ngModel) {
						elem.css({
							'background-image': 'url(./check.png)',
							'background-size': scope.size + 'px'
						});
					} else {
						elem.css({
							'background-image': '',
							'background-size': scope.size + 'px'
						});
					}
				});
			}
		};
	}
]);