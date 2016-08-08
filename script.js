$(document).ready(function(){
  
  var hero = {
    spiderman: {
        codename:"Hero Name: Spider-Man", 
        identity:"Real Name: Peter Parker",
        power: "Power(s): Super Human athleticism, Spider skills, Spidey Sense",
        enemy: "Villain: Venom",
      },
      ironman: {
        codename:"Hero Name: Iron Man",
        identity:"Real Name: Tony Stark",
        power: "Power(s): Supersuit",
        enemy: "Villain: Anyone",
      },
      deadpool: {
        codename:"Hero Name: Deadpool",
        identity:"Real Name: Wade Wilson",
        power: "Power(s): Regeneration, Superhuman athleticism",
        enemy:"Villain: Whomever he feels like killing",
      },
      hulk: {
        codename: "Hero Name: Hulk",
        identity:"Real Name: Bruce Banner",
        power:"Power(s): Nearly unlimited physical abilities",
        enemy:"Villain: General Ross",
      }
      
       };

  $('button').on('click', function(){
     $('body').append(hero);
    // This variable stores the value of your input field
    var input = $('input').val();
   $(".results").text(hero[input].identity)
      $(".power").text(hero[input].power)
        $(".enemy").text(hero[input].enemy)
    // for (key in hero) { 
    //   if (input === hero[key].codename){
        
    //   }
    // }
    
  });
  
  
  /*
  /for (key in hero) { 
  console.log(key)
  var superhero = hero[key]
    for (superhero_key in superhero) {
      console.log(superhero_key)
      console.log(superhero[superhero_key])
    }
}
*/
for (key in hero) { 
  // if (hero =)
}
  // for (key in hero) {
  //   console.log(key)
  //   var who = hero[key]
  //   console.log(who.identity)
  // }
  
  // for (key in hero) {
  //   console.log(key)
  //   var quirk = hero[key]
  //   console.log(quirk.power)
  // }
  // for (key in hero) {
  //   console.log(key)
  //   var villain = hero[key]
  //   console.log(villain.enemy)
  // }
  

   
  // ***************************** 
  // NOTES
  // *****************************
  // Remember append()?
  //$('body').append('<header><h2></h2></header>');
  
  // Meet text()!
  // This will add text to HTML elements; it will replace any text that's already there
  $('h2').text("Find your hero!");
  $('h6').text("Only Use Lowercase: spiderman, deadpool, hulk, ironman");
  // Hint: Use .append() and/or .text() in your on('click') function!
  
    // *****************************
  // Getting values from objects
  /*
  var car = {make:"Volkswagen", model:"Beetle", color:"red"};
  console.log(car.color);
  */
  
  // ***************************** 
  // For..in loops
  /*
  for (var name in object) {
    console.log(object[name]);
  }
  */


})
