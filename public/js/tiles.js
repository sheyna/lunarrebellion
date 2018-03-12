function Tile(title, id) {
  this.title = title;
  this.id = id;
}

class OuterSector extends Tile {
  constructor(title, id, type, abbre, friendly) {
    super(title, id, friendly);
    this.type = type;
    this.abbre = abbre;
    this.friendly = friendly;
  }
}

class MaglevPlatform extends Tile {
  constructor(title, id) {
    super(title, id);
  }
}

class LavaTube extends Tile {
  constructor(title, id) {
    super(title, id);
  }
}

var lavanaThroneRoom = new Tile("Lavana's Throne Room", "lavanaThroneRoom");
var centralDais = new Tile("Central Dais", "centralDais");
var jacinsQuarters = new Tile("Jacin's Private Quarters", "jacinsQuarters");
var wintersRoom = new Tile("Winter's room", "wintersRoom");
var royalPortOfArtemisia = new Tile("Royal Port of Artemisia", "royalPortOfArtemisia");
var queensSolar = new Tile("Queen's Solar", "queensSolar");
var atrium = new Tile("Atrium", "atrium");
var menagerie = new Tile("Menagerie", "menagerie");
var tvStudio = new Tile("TV Studio", "tvStudio");
// var = new Tile("");
// var = new Tile("");
// var = new Tile("");
// var = new Tile("");

var lavaTube1 = new LavaTube("Lava Tube 1", "lavaTube1");
var lavaTube2 = new LavaTube("Lava Tube 2", "lavaTube2");
var lavaTube3 = new LavaTube("Lava Tube 3", "lavaTube3");
var lavaTube4 = new LavaTube("Lava Tube 4", "lavaTube4");
var lavaTube5 = new LavaTube("Lava Tube 5", "lavaTube5");
var lavaTube6 = new LavaTube("Lava Tube 6", "lavaTube6");

var maglevPlatform1 = new MaglevPlatform("Maglev Platform 1", "maglevPlatform1");
var maglevPlatform2 = new MaglevPlatform("Maglev Platform 2", "maglevPlatform2");
var maglevPlatform3 = new MaglevPlatform("Maglev Platform 3", "maglevPlatform3");
var maglevPlatform4 = new MaglevPlatform("Maglev Platform 4", "maglevPlatform4");
var maglevPlatform5 = new MaglevPlatform("Maglev Platform 5", "maglevPlatform5");
var maglevPlatform6 = new MaglevPlatform("Maglev Platform 6", "maglevPlatform6");

var outerSectorGC6 = new OuterSector("Outer Sector", "outerSectorGC6", "General Construction", "GC-6", true);
var outerSectorLW12 = new OuterSector("Outer Sector", "outerSectorLW12", "Lumber and Wood Production", "LW-12", true);
var outerSectorRM9 = new OuterSector("Outer Sector", "outerSectorRM9", "Regolith Mining", "RM-9", true);
var outerSectorRD1 = new OuterSector("Outer Sector", "outerSectorRD1", "Research and Development", "RD-1", false);
var outerSectorRD4 = new OuterSector("Outer Sector", "outerSectorRD4", "Research and Development", "RD-4", false);
var outerSectorTS1 = new OuterSector("Outer Sector", "outerSectorTS1", "Technical Services", "TS-1", false);
var outerSectorTS2 = new OuterSector("Outer Sector", "outerSectorTS2", "Technical Services", "TS-2", false);
var outerSectorTS76 = new OuterSector("Outer Sector", "outerSectorTS76", "Technical Services", "TS-76", false);
var outerSectorWS1 = new OuterSector("Outer Sector", "outerSectorWS1", "Waste Salvage", "WS-1", true);

var tileObjects = [
  lavanaThroneRoom,
  centralDais,
  jacinsQuarters,
  wintersRoom,
  royalPortOfArtemisia,
  queensSolar,
  atrium,
  menagerie,
  tvStudio,
  lavaTube1,
  lavaTube2,
  lavaTube3,
  lavaTube4,
  lavaTube5,
  lavaTube6,
  maglevPlatform1,
  maglevPlatform2,
  maglevPlatform3,
  maglevPlatform4,
  maglevPlatform5,
  maglevPlatform6,
  outerSectorGC6,
  outerSectorLW12,
  outerSectorRM9,
  outerSectorRD1,
  outerSectorRD4,
  outerSectorTS1,
  outerSectorTS2,
  outerSectorTS76,
  outerSectorWS1
];

// gametiles = shuffle(tiles);

// $(function() {
//   var tileTemplate = document.getElementById("tile-template")
//   var source = $("#tile-template").html();
//   var template = Handlebars.compile(source);
//   var html = template(tiles);
//   $('#DocumentResults').html(html);
// });
