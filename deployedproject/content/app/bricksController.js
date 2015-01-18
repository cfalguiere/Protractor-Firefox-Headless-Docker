
angular.module('BrickInventoryApp.controllers', [])
  .controller('bricksController', function($scope, bricksFactory, colorsService, shapesService) {
    var self = this;

    $scope.bricksList = bricksFactory;

    $scope.colorsList = colorsService.selectColors($scope.bricksList);
    $scope.selectedColor = null;

    $scope.shapesList = shapesService.selectShapes($scope.bricksList);
    $scope.selectedShape = null;

    $scope.totalCount = bricksFactory.reduce( function (acc, currenItem) { return acc += currenItem.item.quantity }  , 0)
    $scope.currentCount = 0
    $scope.progressBar = 0
    $scope.progressStatus = ""

    function incrementCount(brick, qty) {
        brick.count += qty
        brick.show = brick.count < brick.item.quantity
        $scope.currentCount += qty
        $scope.progressBar = Math.round(100 * $scope.currentCount / $scope.totalCount)
        if ( $scope.progressBar == 100) $scope.progressStatus = "Done!"
    }

    $scope.found = function(brick) {
	      //alert("Found " + brick.itemName);
        incrementCount(brick, 1)
    };

    $scope.foundAll = function(brick) {
        var rest =  brick.item.quantity - brick.count
        incrementCount(brick, rest)
    };


    function applyColorFilter(aColor) {
        angular.forEach($scope.bricksList, function(brick) {
          brick.colorFilter = (brick.item.colorId == aColor);
        })
    }

    function resetColorFilter() {
          angular.forEach($scope.bricksList, function(brick) {
            brick.colorFilter = true;
          })
    }

    $scope.filterByColor = function(selectedColor) {
      if (selectedColor == null) {
          resetColorFilter()
      } else {
          applyColorFilter(selectedColor.id)
      }
    };

    $scope.filterByColorId = function(aColorId) {
      if (aColorId == null) {
          resetColorFilter()
          $scope.selectedColor = null
      } else {
         applyColorFilter(aColorId)
         $scope.selectedColor = colorsService.getColorById(aColorId)
      }
    };

    $scope.filterByShape = function(aShape) {
      //alert("filterByShape " + aShape)
      $scope.selectedShape = aShape
      if (aShape == null) {
        angular.forEach($scope.bricksList, function(brick) {
          brick.shapeFilter = true;
        } )
      } else {
        angular.forEach($scope.bricksList, function(brick) {
          brick.shapeFilter = (brick.item.groupName == aShape);
        } )
      }
    };

    $scope.resetFilters = function() {
	    // reset all count to 0 and all show to true
	    angular.forEach($scope.bricksList, function(brick) {
        brick.colorFilter = true;
        brick.shapeFilter = true;
      } )
      $scope.selectedColor = null;
      $scope.selectedShape = null;
    };

    $scope.resetCount = function() {
	    // reset all count to 0 and all show to true
	    angular.forEach($scope.bricksList, function(brick) {
        brick.count = 0;
        brick.show = true;
      })
      //this.resetFilters(); // fait planter le test
      $scope.resetFilters();
      $scope.currentCount = 0
      $scope.progressBar = 0
    };
});




