FEED_URL = "https://cors-anywhere.herokuapp.com/https://ade.u-pec.fr/direct/gwtdirectplanning/rss?data=bd72d825015315feb8cbbaa6aa476052100da3b09ab2cbe65e52054f7c46ced7494b77e816454fc2720360c428aacfcc8d964e9df5a0b3482149ccda9220c7109ef5e799eaa34c26";
$.ajax({
    url: FEED_URL,
    type: 'GET',
    headers: {"origin":"http://maximum.blog"},
    dataType: "xml",
    success: function (data) {
        console.log(data);
        /*$(data).find("entry").each(function () {
            var el = $(this);
            console.log(el);
        });*/
    }
  });