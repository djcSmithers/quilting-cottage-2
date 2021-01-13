import { Component, OnInit } from '@angular/core';
import { Instafeed } from '../../assets/JS/instafeed.min';

declare var Instafeed: any;


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {


  constructor() { }

  ngOnInit() {

    //JSON response version
this.getToken('https://ig.instant-tokens.com/users/386d2239-721c-46c4-a2ee-ee8dbfc7181d/instagram/17841439937546638/token?userSecret=pjvjn5ybd0hfniy7sxua0l', function(responseText) {
  if (responseText){
    var response = responseText;
    let json = JSON.parse(response);
    let token = json.Token;

  let feed = new Instafeed({
        accessToken: token,
        resolution: 'standard_resolution',
        template: '<a href="{{link}}"><img src="{{image}}"style="margin: 0 10px 0 0; width: 173px; height: 173x;"/></a>'
      });
      feed.run();
  }
});


// template: '<a href="https://www.instagram.com/XXXXXXX/"><img src="{{image}}"style="margin: 0 10px 0 0; width: 173px; height: 173x;"/></a>'

//'<div class="bg" style="background-image:url({{image}})"></div>'

//'<img src="{{image}}" style="height: 200px;" >'

// DEFAULT:
//'<a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a>'

//"<div class='imgClass' style='background: url('{{image}}');' > <a href='{{link}}' ></a> </div>"
//template: '<div class="imgClass" style="background: url("{{image}})""><a href="{{link}}"></a></div>'
//'<a href="{{link}}" > <img src="{{image}}" />  </a>'
//template: '<a class="{{id}}" href="{{link}}"><img src="{{image}}" /></a>'


    //Dummy Instagram Account
    //https://ig.instant-tokens.com/users/dccfcbc1-1d0c-4e0f-a6c4-7286cc2dd589/instagram/17841442262209700/token.js?userSecret=oaognyupgxbh88cclbck4v

/*
    //JS file response version
    this.getToken('https://ig.instant-tokens.com/users/386d2239-721c-46c4-a2ee-ee8dbfc7181d/instagram/17841439937546638/token.js?userSecret=pjvjn5ybd0hfniy7sxua0l', function(responseText) {
      if (responseText){
        var response = responseText;
        var json = JSON.stringify(response);
        let token = json.slice((json.indexOf("\'") + 1), json.lastIndexOf("\'"));

      let feed = new Instafeed({
            accessToken: token
          });
          feed.run();
      }
  });
*/  
}
  

getToken(myurl, cb) {

  var req = new XMLHttpRequest();

  req.onreadystatechange = function() {
    if (req.readyState == 4 && req.status == 200) {
      if (typeof cb === 'function') cb(req.responseText);
    }
  }

  req.open("GET", myurl, true);
  req.send();
  
}


}

/*

  var req = new XMLHttpRequest();
  req.onreadystatechange = function() {
      if (req.readyState === 4) {
        var response = req.responseText;
        var json = JSON.stringify(response);
        let token = json.slice((json.indexOf("\'") + 1), json.lastIndexOf("\'"));
        return token;
    }
};

req.open('GET', 'https://ig.instant-tokens.com/users/dccfcbc1-1d0c-4e0f-a6c4-7286cc2dd589/instagram/17841442262209700/token.js?userSecret=oaognyupgxbh88cclbck4v');
req.send(null);

let feed = new Instafeed({
      accessToken: this.token
    });
    feed.run();

*/