function pickRandomProperty() {
    var obj = [
  {
    Navn: "Svensk pølseret",
    Vegetar: false
  },
  {
    Navn: "Pasta med kødsauce",
    Vegetar: false
  },
  {
    Navn: "Hakkebøffer med blød løg",
    Vegetar: false
  },
  {
    Navn: "Moussaka",
    Vegetar: false
  },
  {
    Navn: "Helstegt kylling",
    Vegetar: false
  },
  {
    Navn: "Tærte",
    Vegetar: false
  },
  {
    Navn: "Lasagne",
    Vegetar: false
  },
  {
    Navn: "Vegetarlasagne",
    Vegetar: true
  },
  {
    Navn: "Vegetarpasta",
    Vegetar: true
  },
  {
    Navn: "Kammerkoteletter",
    Vegetar: false
  },
  {
    Navn: "Chili con carne",
    Vegetar: false
  },
  {
    Navn: "Svampepasta",
    Vegetar: true
  },
  {
    Navn: "Risotto",
    Vegetar: false
  },
  {
    Navn: "Pizza",
    Vegetar: false
  },
  {
    Navn: "Burger",
    Vegetar: false
  },
  {
    Navn: "Tortilla",
    Vegetar: false
  },
  {
    Navn: "Vegetarburger",
    Vegetar: true
  },
  {
    Navn: "Tynde omeletter",
    Vegetar: false
  },
  {
    Navn: "Boller i karry",
    Vegetar: false
  },
  {
    Navn: "Frikadeller",
    Vegetar: false
  },
  {
    Navn: "Pastasalat",
    Vegetar: false
  },
  {
    Navn: "Salater med kylling og avokado",
    Vegetar: false
  },
  {
    Navn: "Ovnbagte rodfrugtsalat",
    Vegetar: false
  },
  {
    Navn: "Sesamkylling",
    Vegetar: false
  },
  {
    Navn: "Pörkölt med galuska",
    Vegetar: false
  },
  {
    Navn: "Tojásos galuska",
    Vegetar: false
  },
  {
    Navn: "Bableves",
    Vegetar: false
  },
  {
    Navn: "Rakott krumpli",
    Vegetar: false
  },
  {
    Navn: "Grízes tészta",
    Vegetar: false
  },
  {
    Navn: "Hortobágyi húsos palacsinta",
    Vegetar: false
  },
  {
    Navn: "Thai kikærteret med kokus",
    Vegetar: false
  },
  {
    Navn: "Thai-ret med køde kokus ",
    Vegetar: false
  },
  {
    Navn: "Paprikagryde",
    Vegetar: false
  },
  {
    Navn: "Kalvefrikasse",
    Vegetar: false
  }
];
  var result;
    result = obj[Math.floor(Math.random() * obj.length)];
    console.log(result.Navn);
  $("#mad").html(
      "Vi skal have " +
      "<a href='https://www.bing.com/images/search?q="+ result.Navn + "' target='opskrifter'>" +
      result.Navn +
      "</a>" + 
      "."
      );
}