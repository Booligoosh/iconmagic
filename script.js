var iconAdd = function() {
//Data grabber:
var iconUrl = document.forms["form"]["icon"].value;
//Head adder script:
document.getElementsByTagName('head')[0].appendChild(iconUrl);
}
