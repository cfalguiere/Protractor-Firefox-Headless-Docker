angular.module('BrickInventoryApp.services', [])
  .service("colorsService", function() {
     var self = this;

     var colors = [
       {name:'Undefined',    id: '0'},
       {name:'White',        id: '1'},
       {name:'Beige',        id: '2'},
       {name:'Yellow',       id: '3'},
       {name:'Red',          id: '5'},
       {name:'Green',        id: '6'},
       {name:'Black',        id: '11'},
       {name:'Transparent',  id: '12'},
       {name:'Lime',         id: '34'},
       {name:'DarkGray',     id: '85'},
       {name:'LightGray',    id: '86'},
       {name:'Brown',        id: '88'}
     ];

    this.getColorName = function(id) {
      function match(anId) {
        return anId == id;
      }
      matches = colors.filter( function (element) { return match(element.id); } )

      if (matches.length == 1)
        name = matches[0].name;
      else
        name = id
      return name
    }

    this.getColorById = function(id) {
      function match(anId) {
        return anId == id;
      }
      matches = colors.filter( function (element) { return match(element.id); } )

      if (matches.length == 1)
        color = matches[0];
      else
        color = null
      return color
    }


    function uniqueColorIds(brickList) {
        var seen = {};
        var out = [];
        var len = brickList.length;
        var k = 0;
        for(var i = 0; i < len; i++) {
           var item = brickList[i].item.colorId;
           if (seen[item] !== 1) {
               seen[item] = 1;
               out[k++] = item;
           }
        }
        return out;
    }

    this.selectColorIds = function(brickList) {
      return uniqueColorIds(brickList);
    }

    this.selectColors = function(brickList) {
      var colorList = [];
      var colorIdIndex = uniqueColorIds(brickList);

      function isInIndex(id) {
        return colorIdIndex.indexOf(id) > -1;
      }


      colorList = colors.filter( function (element) { return isInIndex(element.id); } )

      function compareByName(a, b) {
        return a.name.localeCompare( b.name )
      }

      colorList.sort(compareByName)

      return colorList;
    }


})

.service("shapesService", function() {

     function uniqueShapes(brickList) {
        var seen = {};
        var out = [];
        var len = brickList.length;
        var k = 0;
        for(var i = 0; i < len; i++) {
           var item = brickList[i].item.groupName;
           if (seen[item] !== 1) {
               seen[item] = 1;
               out[k++] = item;
           }
        }
        return out;
    }

    this.selectShapes = function(brickList) {
      return uniqueShapes(brickList).sort();
    }

});
