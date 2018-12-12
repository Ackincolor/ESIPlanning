if (!String.prototype.format) {
    String.prototype.format = function() {
        a = this;
        for (k in arguments) {
          a = a.replace("{" + k + "}", arguments[k])
        }
        return a
      }
    }
FEED_URL = "https://ade.u-pec.fr/direct/gwtdirectplanning/rss?data=bd72d825015315feb8cbbaa6aa47605216ab163aac257a3f5be8a9664ca2feae65bb6e14989d5c7cc46535c83d94d2b00c06f73294a028d463398f4ea50c44b7061f7968f1d954af";
template = '<div class="media">'+
'<div class="media-body bg-dark text-white mb-4 p-3">'+
    '<div class="row">'+
    '<div class="col-lg-1 col-md-2 col-sm-4">'+
    '    <h5 class="mt-0"><span class="badge badge-danger mr-4 rounded-0">{0}</span></h5>'+
    '    <div>{1}</div>'+
    '</div>'+
    '<div class="col-lg-7 col-md-6 col-sm-4 pl-5"><h5>{2}</h5><div>{3}</div> </div>'+
    '<h4 class="mt-0 col-lg-4 col-md-4 col-sm-4 text-right my-auto">{4}</h4>'+
    '</div>'+
'</div>'+
'</div>';

$.ajax({
  type: 'GET',
  url: "https://api.rss2json.com/v1/api.json?rss_url=" + FEED_URL,
  dataType: 'jsonp',
  success: function(data) {
    console.log(data.feed.description);    
    //console.log(data);
    data.items.forEach(element => {
        console.log(element);
        heure = $(element.description).find("p").prevObject[0].firstChild.textContent;
        salle = $($(element.description)[2])[0].children[2].nextSibling.textContent;
        classe = $($(element.description)[2])[0].children[1].nextSibling.textContent;
        prof = $($(element.description)[2])[0].children[3].nextSibling.textContent;
        titre = element.title;
        console.log($($(element.description)[2])[0].children[2].nextSibling.textContent);
        document.getElementById("slideshowContainer").innerHTML+=template.format(classe, salle,titre,prof,heure);
    });
  }
});