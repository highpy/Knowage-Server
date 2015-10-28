/**
 * @authors Giovanni Luca Ulivo (GiovanniLuca.Ulivo@eng.it)
 *
 */

angular.module('geo_module')
.directive('geoLegend',function(){
	return{
		 restrict: "E",
		 templateUrl: '/athena/js/src/angular_1.4/tools/commons/geo/geoBottom/geoLegend/templates/geoLegendTemplate.jspf',
		 controller: geoLegendControllerFunction,
		require: "^geoMap",
		scope: {
			id:"@"
		},
		link: function(scope,elm,attrs){
			console.log("inizializzo geo-legend con id= "+scope.id);
			
		}
	}
})

function geoLegendControllerFunction($scope,$mdDialog){	
	$scope.showLegend=false;
	$scope.legendItem=[{color:"#F50F3C",min:"1",max:"10",number:"5"},
	                   {color:"#840FF5",min:"10",max:"100",number:"4"},
	                   {color:"#0F63F5",min:"100",max:"1000",number:"3"},
	                   {color:"#0FF5A8",min:"1000",max:"10000",number:"6"},
	                   {color:"#4AF50F",min:"10000",max:"1000000",number:"9"}]
	$scope.toggleLegend=function(ev){
		$scope.showLegend=!$scope.showLegend;
	}
	
	
	$scope.changeLegendStyle=function(ev){
		$mdDialog.show({
  	      controller: $scope.IndicatorFromCatalogueController,
  	      templateUrl: 'changeLegendTemplate.html',
  	      parent: angular.element(document.body),
  	      targetEvent: ev,
  	      clickOutsideToClose:true,
  	      openFrom: '.changeStyleButton',
  	      closeTo: '.changeStyleButton'
  	    })
  	    .then(function(answer) {
  	    	console.log("then ok")
  	    }, function() {
  	    	console.log("then cancel")
  	    });
  	
	}
	
}