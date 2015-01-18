angular.module('BrickInventoryApp.loaders', [])
  .service("wedoLoaderService", function() {

    var TYPE = 0
    var ID = 1
    var NAME = 2
    var QTY = 3
    var COLOR_ID = 4

    var GRP_MISC = "Misc"
    var GRP_BRICK = "Brick"
    var GRP_ROBOTICS = "Robotics"
    var GRP_GEAR = "Gear"
    var GRP_BELT = "Belt"
    var GRP_AXLE = "Axle"
    var GRP_MINIFIG = "Minifig"
    var GRP_SLOPE = "Slope"


    function guessGroup(name) {
      var groupName = GRP_MISC

      if (name.indexOf(GRP_BRICK) == 0) {
          groupName = GRP_BRICK
      } else if (name.indexOf("WeDo Robotics") == 0) {
          groupName = GRP_ROBOTICS
      } else if (name.indexOf("Power Functions") == 0) {
          groupName = GRP_ROBOTICS
      } else if (name.indexOf(GRP_GEAR) > -1 ) {
          groupName = GRP_GEAR
      } else if (name.indexOf(" Cam") > -1 ) {
          groupName = GRP_GEAR
      } else if (name.indexOf(GRP_BELT) > -1 ) {
          groupName = GRP_BELT
      } else if (name.indexOf(GRP_AXLE) > -1 ) {
          groupName = GRP_AXLE
      } else if (name.indexOf(GRP_MINIFIG) == 0 ) {
          groupName = GRP_MINIFIG
      } else if (name.indexOf("Torso") == 0 ) {
          groupName = GRP_MINIFIG
      } else if (name.indexOf("Hips and Legs") == 0 ) {
          groupName = GRP_MINIFIG
      } else if (name.indexOf(GRP_SLOPE) == 0 ) {
          groupName = GRP_SLOPE
      }

      return groupName
    }

    function parseLine(line) {
      var fields = line.split('\t')
      var groupName = guessGroup(fields[NAME])
      return {  itemType: fields[TYPE],
                itemId: fields[ID],
                itemName: fields[NAME],
                quantity: parseInt(fields[QTY]),
                colorId: fields[COLOR_ID],
                groupName : groupName}

    }

    this.load = function() {
      var itemList = [ ]

      angular.forEach( kit, function( line ) {
          itemList.push(parseLine( line ))
      })

      return itemList
    }


    var kit = [
      "S	9581-1	WeDo Robotics USB Hub	1	0	N	N	0	N",
      "S	9583-1	WeDo Robotics Motion Sensor	1	0	N	N	0	N",
      "S	9584-1	WeDo Robotics Tilt Sensor	1	0	N	N	0	N",
      "S	8883-1	Power Functions M-Motor	1	0	N	N	0	N",
      "P	x127c41	String with End Studs 41L Overall	1	11	N	N	0	N",
      "P	6588	Technic, Gearbox 2 x 4 x 3 1/3	1	12	N	N	0	N",
      "P	x90	Rubber Belt Extra Large &#40;Round Cross Section&#41; - Approx. 5 x 5	2	3	N	N	0	N",
      "P	4185	Technic Wedge Belt Wheel (Pulley)	2	34	N	N	0	N",
      "P	70162	Technic Wedge Belt Wheel Tire	2	11	N	N	0	N",
      "P	3743	Technic, Gear Rack 1 x 4	2	1	N	N	0	N",
      "P	4519	Technic, Axle 3	2	86	N	N	0	N",
      "P	3706	Technic, Axle 6	2	11	N	N	0	N",
      "P	3707	Technic, Axle 8	2	11	N	N	0	N",
      "P	3650b	Technic, Gear 24 Tooth Crown with Reinforcements (New Style)	2	86	N	N	0	N",
      "P	3648	Technic, Gear 24 Tooth (New Style with Single Axle Hole)	2	85	N	N	0	N",
      "P	3647	Technic, Gear 8 Tooth Type 1	2	85	N	N	0	N",
      "P	4716	Technic, Gear Worm Screw	1	86	N	N	0	N",
      "P	6575	Technic Cam	4	85	N	N	0	N",
      "P	2780	Technic, Pin with Friction Ridges Lengthwise WITH Center Slots	6	11	N	N	0	N",
      "P	3749	Technic, Axle Pin without Friction Ridges Lengthwise	4	2	N	N	0	N",
      "P	3005pe1	Brick 1 x 1 with Eye Simple Black and White Pattern	4	1	N	N	0	N",
      "P	4485	Minifig, Headgear Cap - Long Flat Bill	1	34	N	N	0	N",
      "P	53982	Minifig, Headgear Hair Angular Swept Back	1	5	N	N	0	N",
      "P	3626bpb0271	Minifig, Head Dual Sided Female Brown Eyebrows Scared / Smiling Pattern	1	3	N	N	0	N",
      "P	3626bpb0272	Minifig, Head Dual Sided Black Eyebrows, Pupils / Mouth Open Scared Pattern	1	3	N	N	0	N",
      "P	973px126c01	Torso Paradisa Sailboat with Sunset Pattern / Yellow Arms / Yellow Hands	1	1	N	N	0	N",
      "P	970c00	Hips and Legs	1	88	N	N	0	N",
      "P	3010	Brick 1 x 4	2	5	N	N	0	N",
      "P	3003	Brick 2 x 2	2	5	N	N	0	N",
      "P	3001	Brick 2 x 4	2	5	N	N	0	N",
      "P	2456	Brick 2 x 6	2	5	N	N	0	N",
      "P	2456	Brick 2 x 6	2	3	N	N	0	N",
      "P	3001	Brick 2 x 4	2	3	N	N	0	N",
      "P	3003	Brick 2 x 2	2	3	N	N	0	N",
      "P	3009	Brick 1 x 6	2	3	N	N	0	N",
      "P	3010	Brick 1 x 4	2	3	N	N	0	N",
      "P	3004	Brick 1 x 2	2	3	N	N	0	N",
      "P	42022	Slope, Curved 6 x 1	2	3	N	N	0	N",
      "P	42022	Slope, Curved 6 x 1	2	5	N	N	0	N",
      "P	30364	Hinge Brick 1 x 2 Locking with 1 Finger Vertical End	2	3	N	N	0	N",
      "P	30365	Hinge Brick 1 x 2 Locking with 2 Fingers Vertical End	2	5	N	N	0	N",
      "P	3040	Slope 45 2 x 1	2	5	N	N	0	N",
      "P	3039	Slope 45 2 x 2	2	5	N	N	0	N",
      "P	3298	Slope 33 3 x 2	2	3	N	N	0	N",
      "P	3039	Slope 45 2 x 2	2	3	N	N	0	N",
      "P	4286	Slope 33 3 x 1	2	3	N	N	0	N",
      "P	3665	Slope, Inverted 45 2 x 1	2	5	N	N	0	N",
      "P	3660	Slope, Inverted 45 2 x 2	2	5	N	N	0	N",
      "P	3660	Slope, Inverted 45 2 x 2	2	3	N	N	0	N",
      "P	4287	Slope, Inverted 33 3 x 1	2	3	N	N	0	N",
      "P	3747b	Slope, Inverted 33 3 x 2 with Connections between Studs	2	3	N	N	0	N",
      "P	4204	Brick 8 x 16	1	85	N	N	0	N",
      "P	3665	Slope, Inverted 45 2 x 1	2	5	N	N	0	N",
      "P	3660	Slope, Inverted 45 2 x 2	2	5	N	N	0	N",
      "P	3660	Slope, Inverted 45 2 x 2	2	3	N	N	0	N",
      "P	4287	Slope, Inverted 33 3 x 1	2	3	N	N	0	N",
      "P	3747b	Slope, Inverted 33 3 x 2 with Connections between Studs	2	3	N	N	0	N",
      "P	4204	Brick 8 x 16	1	85	N	N	0	N",
      "P	3700	Technic, Brick 1 x 2 with Hole	6	5	N	N	0	N",
      "P	3703	Technic, Brick 1 x 16 with Holes	2	5	N	N	0	N",
      "P	3894	Technic, Brick 1 x 6 with Holes	2	5	N	N	0	N",
      "P	3702	Technic, Brick 1 x 8 with Holes	2	5	N	N	0	N",
      "P	32064	Technic, Brick 1 x 2 with Axle Hole	4	85	N	N	0	N",
      "P	2458	Brick, Modified 1 x 2 with Pin	4	85	N	N	0	N",
      "P	3738	Technic, Plate 2 x 8 with 7 Holes	4	1	N	N	0	N",
      "P	32001	Technic, Plate 2 x 6 with 5 Holes	4	1	N	N	0	N",
      "P	32530	Technic, Pin Connector Plate 1 x 2 x 1 2/3 with 2 Holes (Double on Top)	2	5	N	N	0	N",
      "P	2654	Plate, Round 2 x 2 with Rounded Bottom (Boat Stud)	2	5	N	N	0	N",
      "P	3680	Turntable 2 x 2 Plate, Base	1	5	N	N	0	N",
      "P	3679	Turntable 2 x 2 Plate, Top	1	86	N	N	0	N",
      "P	3941	Brick, Round 2 x 2	4	34	N	N	0	N",
      "P	2431	Tile 1 x 4	2	34	N	N	0	N",
      "P	3020	Plate 2 x 4	4	6	N	N	0	N",
      "P	3710	Plate 1 x 4	4	1	N	N	0	N",
      "P	3460	Plate 1 x 8	4	1	N	N	0	N",
      "P	3713	Technic Bush	6	86	N	N	0	N"

    ]


})
