
  exports.findBestGreeting = function(language) {
    switch(language) {
      case "Icelandic":
      console.log("Halló");
      break;
      case "Japanese":
      console.log("こんにちは");
      break;
      case "Spanish":
      console.log("Hola");
      break;
      case "English":
      console.log("Hello");
    }
  }


  exports.askFriend = function(language) {
    switch(language) {
      case "Icelandic":
      console.log("Hvernig hefurðu það?");
      break;
      case "Japanese":
      console.log("お元気ですか？");
      break;
      case "Spanish":
      console.log("¿Cómo estás?");
      break;
      case "English":
      console.log("How are you?");
    }
  }
