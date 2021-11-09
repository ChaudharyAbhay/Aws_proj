setScreen("Home");
hideElement("calc_out");
hideElement("Eroor_acess");
hideElement("cost_fence");
hideElement("cost_level");
hideElement("cost_seeds");
hideElement("out_cfence");
hideElement("out_cleveling");
hideElement("out_cseeds");
hideElement("rate_f");
hideElement("rate_l");
hideElement("rate_s");
hideElement("hide_log");
onEvent("register_reg", "click", function( ) {
  playSpeech("Thanks!For regestering", "female", "English");
  var UserData={};
  UserData.name = getText("user_reg");
  UserData.nname = getText("name_reg");
  UserData.mail = getText("emai_reg");
  UserData.main = getText("pass_reg");
  createRecord("data_user", UserData, function(record) {
    console.log("Record created with id:" + record.id);
    console.log("User Name:" + UserData.name + " Name:" + UserData.nname + " Email:" + UserData.mail + "Password:" + UserData.main);
    
  });
});
onEvent("login_b_login", "click", function( ) {
 readRecords("data_user", {}, function(records) {
   for (var i =0; i < records.length; i++) {
     if ((records[i]).name == getText("user_name_log")) {
       if ((records[i]).main == getText("pass_log")) {
         setScreen("Home_main");
       } else {
         showElement("hide_log");
       }
     } else {
       showElement("hide_log");
     }
   }
 });
});
onEvent("return_login", "click", function( ) {
  setScreen("Home");
});
onEvent("return_register", "click", function( ) {
  setScreen("Home");
});
onEvent("login", "click", function( ) {
  setScreen("Login");
  playSpeech("welcome back", "female", "English");
});
onEvent("register", "click", function( ) {
  setScreen("Register");
  playSpeech("welcome", "female", "English");
});
onEvent("dropdown1", "change", function( ) {
  if (getText("dropdown1") == "Home") {
    setScreen("Home_main");
  }
});
onEvent("dropdown2", "change", function( ) {
  if (getText("dropdown2") == "Home") {
    setScreen("Home_main");
  }
});
onEvent("dropdown3", "change", function( ) {
  if (getText("dropdown3") == "Home") {
    setScreen("Home_main");
  }
});
onEvent("dropdown4", "change", function( ) {
  if (getText("dropdown4") == "Home") {
    setScreen("Home_main");
  }
});
onEvent("dropdown5", "change", function( ) {
  if (getText("dropdown5") == "Home") {
    setScreen("Home_main");
  }
});
onEvent("dropdown6", "change", function( ) {
  if (getText("dropdown6") == "Home") {
    setScreen("Home_main");
  }
});
onEvent("dropdown1", "change", function( ) {
  if (getText("dropdown1") == "Buy") {
    setScreen("Buy");
  }
});
onEvent("dropdown2", "change", function( ) {
  if (getText("dropdown2") == "Buy") {
    setScreen("Buy");
  }
});
onEvent("dropdown3", "change", function( ) {
  if (getText("dropdown3") == "Buy") {
    setScreen("Buy");
  }
});
onEvent("dropdown4", "change", function( ) {
  if (getText("dropdown4") == "Buy") {
    setScreen("Buy");
  }
});
onEvent("dropdown5", "change", function( ) {
  if (getText("dropdown5") == "Buy") {
    setScreen("Buy");
  }
});
onEvent("dropdown6", "change", function( ) {
  if (getText("dropdown6") == "Buy") {
    setScreen("Buy");
  }
});
onEvent("dropdown1", "change", function( ) {
  if (getText("dropdown1") == "News") {
    setScreen("News");
  }
});
onEvent("dropdown2", "change", function( ) {
  if (getText("dropdown2") == "News") {
    setScreen("News");
  }
});
onEvent("dropdown3", "change", function( ) {
  if (getText("dropdown3") == "News") {
    setScreen("News");
  }
});
onEvent("dropdown4", "change", function( ) {
  if (getText("dropdown4") == "News") {
    setScreen("News");
  }
});
onEvent("dropdown5", "change", function( ) {
  if (getText("dropdown5") == "News") {
    setScreen("News");
  }
});
onEvent("dropdown6", "change", function( ) {
  if (getText("dropdown6") == "News") {
    setScreen("News");
  }
});
onEvent("dropdown1", "change", function( ) {
  if (getText("dropdown1") == "Sell") {
    setScreen("Sell");
  }
});
onEvent("dropdown2", "change", function( ) {
  if (getText("dropdown2") == "Sell") {
    setScreen("Sell");
  }
});
onEvent("dropdown3", "change", function( ) {
  if (getText("dropdown3") == "Sell") {
    setScreen("Sell");
  }
});
onEvent("dropdown4", "change", function( ) {
  if (getText("dropdown4") == "Sell") {
    setScreen("Sell");
  }
});
onEvent("dropdown5", "change", function( ) {
  if (getText("dropdown5") == "Sell") {
    setScreen("Sell");
  }
});
onEvent("dropdown6", "change", function( ) {
  if (getText("dropdown6") == "Sell") {
    setScreen("Sell");
  }
});
onEvent("dropdown1", "change", function( ) {
  if (getText("dropdown1") == "Tips") {
    setScreen("Tips");
  }
});
onEvent("dropdown2", "change", function( ) {
  if (getText("dropdown2") == "Tips") {
    setScreen("Tips");
  }
});
onEvent("dropdown3", "change", function( ) {
  if (getText("dropdown3") == "Tips") {
    setScreen("Tips");
  }
});
onEvent("dropdown4", "change", function( ) {
  if (getText("dropdown4") == "Tips") {
    setScreen("Tips");
  }
});
onEvent("dropdown5", "change", function( ) {
  if (getText("dropdown5") == "Tips") {
    setScreen("Tips");
  }
});
onEvent("dropdown6", "change", function( ) {
  if (getText("dropdown6") == "Tips") {
    setScreen("Tips");
  }
});
onEvent("dropdown1", "change", function( ) {
  if (getText("dropdown1") == "Tools") {
    setScreen("Tools");
  }
});
onEvent("dropdown2", "change", function( ) {
  if (getText("dropdown2") == "Tools") {
    setScreen("Tools");
  }
});
onEvent("dropdown3", "change", function( ) {
  if (getText("dropdown3") == "Tools") {
    setScreen("Tools");
  }
});
onEvent("dropdown4", "change", function( ) {
  if (getText("dropdown4") == "Tools") {
    setScreen("Tools");
  }
});
onEvent("dropdown5", "change", function( ) {
  if (getText("dropdown5") == "Tools") {
    setScreen("Tools");
  }
});
onEvent("dropdown6", "change", function( ) {
  if (getText("dropdown6") == "Tools") {
    setScreen("Tools");
  }
});
onEvent("dropdown1", "change", function( ) {
  if (getText("dropdown1") == "Calculate") {
    setScreen("Calculate");
  }
});
onEvent("dropdown2", "change", function( ) {
  if (getText("dropdown2") == "Calculate") {
    setScreen("Calculate");
  }
});
onEvent("dropdown3", "change", function( ) {
  if (getText("dropdown3") == "Calculate") {
    setScreen("Calculate");
  }
});
onEvent("dropdown4", "change", function( ) {
  if (getText("dropdown4") == "Calculate") {
    setScreen("Calculate");
  }
});
onEvent("dropdown5", "change", function( ) {
  if (getText("dropdown5") == "Calculate") {
    setScreen("Calculate");
  }
});
onEvent("dropdown6", "change", function( ) {
  if (getText("dropdown6") == "Calculate") {
    setScreen("Calculate");
  }
});
onEvent("dropdown7", "change", function( ) {
  if (getText("dropdown7") == "Calculate") {
    setScreen("Calculate");
  }
});
onEvent("dropdown7", "change", function( ) {
  if (getText("dropdown7") == "Home") {
    setScreen("Home");
  }
});
onEvent("dropdown7", "change", function( ) {
  if (getText("dropdown7") == "Sell") {
    setScreen("Sell");
  }
});
onEvent("dropdown7", "change", function( ) {
  if (getText("dropdown7") == "Buy") {
    setScreen("Buy");
  }
});
onEvent("dropdown7", "change", function( ) {
  if (getText("dropdown7") == "Tips") {
    setScreen("Tips");
  }
});
onEvent("dropdown7", "change", function( ) {
  if (getText("dropdown7") == "Tools") {
    setScreen("Tools");
  }
});
onEvent("dropdown7", "change", function( ) {
  if (getText("dropdown7") == "News") {
    setScreen("News");
  }
});
onEvent("getsource", "click", function( ) {
  setScreen("source");
});
onEvent("source_button", "click", function( ) {
  if (getText("user_int") == "aws_proj") {
    if (getText("pass_int") == "proj_agriculture") {
      open("https://github.com/Stensith/Aws_proj.git");
    }
  } else {
    playSound("sound://category_alerts/vibrant_game_correct_answer_hit.mp3", false);
    showElement("Eroor_acess");
  }
});
onEvent("Return_s", "click", function( ) {
  setScreen("Tools");
  playSound("sound://category_alerts/retro_game_health_pickup_6.mp3", false);
});
onEvent("equals_calculate", "click", function( ) {
  showElement("calc_out");
  setText("calc_out", getText("height_calc") * getText("width_calc"));
  showElement("cost_fence");
  showElement("cost_level");
  showElement("cost_seeds");
  showElement("rate_l");
  showElement("rate_f");
  showElement("rate_s");
});
onEvent("cost_fence", "click", function( ) {
  showElement("out_cfence");
  setText("out_cfence", ((getText("height_calc") + getText("width_calc")) * "2") * getText("rate_f"));
});
onEvent("cost_level", "click", function( ) {
  showElement("out_cleveling");
  setText("out_cleveling", getText("calc_out") * getText("rate_l"));
});
onEvent("cost_seeds", "click", function( ) {
  showElement("out_cseeds");
  setText("out_cseeds", getText("calc_out") * getText("rate_s"));
});
onEvent("wheat1_buy", "click", function( ) {
  playSound("sound://category_whoosh/animation_whoosh10deep.mp3", false);
  open("https://www.amazon.in/s?k=Best+1kg+of+wheat+seeds&ref=nb_sb_noss");
});
onEvent("wheat1_buy_b", "click", function( ) {
  playSound("sound://category_whoosh/animation_whoosh10deep.mp3", false);
  open("https://www.amazon.in/s?k=Best+1kg+of+wheat+seeds&ref=nb_sb_noss");
});
onEvent("rice_buy", "click", function( ) {
  playSound("sound://category_whoosh/animation_whoosh10deep.mp3", false);
  open("https://www.amazon.in/s?k=best+rice+seeds&adgrpid=66369839430&ext_vrnc=hi&gclid=CjwKCAjwiY6MBhBqEiwARFSCPiOfrEP8PQ3uvyUxog7mFDSVCjWPKNESTIfG2sczHHJprdwHRRwT5xoC1dQQAvD_BwE&hvadid=398059830388&hvdev=c&hvlocphy=1007825&hvnetw=g&hvqmt=e&hvrand=14800052695484305710&hvtargid=kwd-833491980676&hydadcr=24568_1971427&tag=googinhydr1-21&ref=pd_sl_c98ju3aa4_e");
});
onEvent("rice_buy_b", "click", function( ) {
  playSound("sound://category_whoosh/animation_whoosh10deep.mp3", false);
  open("https://www.amazon.in/s?k=best+rice+seeds&adgrpid=66369839430&ext_vrnc=hi&gclid=CjwKCAjwiY6MBhBqEiwARFSCPiOfrEP8PQ3uvyUxog7mFDSVCjWPKNESTIfG2sczHHJprdwHRRwT5xoC1dQQAvD_BwE&hvadid=398059830388&hvdev=c&hvlocphy=1007825&hvnetw=g&hvqmt=e&hvrand=14800052695484305710&hvtargid=kwd-833491980676&hydadcr=24568_1971427&tag=googinhydr1-21&ref=pd_sl_c98ju3aa4_e");
});
onEvent("gram_buy", "click", function( ) {
  playSound("sound://category_whoosh/animation_whoosh10deep.mp3", false);
  open("https://www.amazon.in/s?k=best+gram+seeds&crid=3R43AD4XANWDV&sprefix=best+gram+seeds%2Caps%2C372&ref=nb_sb_noss");
});
onEvent("gram_buy_b", "click", function( ) {
  playSound("sound://category_whoosh/animation_whoosh10deep.mp3", false);
  open("https://www.amazon.in/s?k=best+gram+seeds&crid=3R43AD4XANWDV&sprefix=best+gram+seeds%2Caps%2C372&ref=nb_sb_noss");
});
onEvent("tip_1", "click", function( ) {
  open("https://www.growveg.com/plants/us-and-canada/how-to-grow-wheat/");
});
onEvent("tip_2", "click", function( ) {
  open("https://www.gardeningknowhow.com/edible/grains/rice/how-to-grow-rice.htm");
});
onEvent("tip_3", "click", function( ) {
  open("https://www.gardeners.com/how-to/building-healthy-soil/5060.html");
});
onEvent("tip_4", "click", function( ) {
  open("https://www.cseindia.org/removing-pesticides-from-fruits-and-vegetables-2681#:~:text=Washing%20with%202%25%20of%20salt,removed%20by%20cold%20water%20washing.");
});
onEvent("hint", "click", function( ) {
  playSpeech("Welcome!", "female", "English");
  setScreen("hint");
});
onEvent("return_buy", "click", function( ) {
  setScreen("Home_main");
});
onEvent("return_calculate", "click", function( ) {
  setScreen("Home_main");
});
onEvent("return_hints", "click", function( ) {
  setScreen("Home_main");
});
onEvent("return_sell", "click", function( ) {
  setScreen("Home_main");
});
onEvent("return_news", "click", function( ) {
  setScreen("Home_main");
});
onEvent("return_tools", "click", function( ) {
  setScreen("Home_main");
});
onEvent("return_tips", "click", function( ) {
  setScreen("Home_main");
});
onEvent("login_info", "click", function( ) {
  setScreen("login_info_s");
});
onEvent("home_info", "click", function( ) {
  setScreen("home_info_s");
});
onEvent("buy_info", "click", function( ) {
  setScreen("buy_info_s");
});
onEvent("sell_info", "click", function( ) {
  setScreen("sell_info_s");
});
onEvent("news_info", "click", function( ) {
  setScreen("news_info_s");
});
onEvent("calculate_info", "click", function( ) {
  setScreen("calculate_info_s");
});
onEvent("tools_info", "click", function( ) {
  setScreen("tools_info_s");
});
onEvent("tips_info", "click", function( ) {
  setScreen("tips_info_s");
});
onEvent("safe_info", "click", function( ) {
  setScreen("safe_info_s");
});
onEvent("feedback_buton", "click", function( ) {
  setScreen("feedback_s");
});
onEvent("hint", "click", function( ) {
  setScreen("hints");
});
