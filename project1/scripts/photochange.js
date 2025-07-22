window.onload=choosePic;
var theAd=0;
var myPix =["images/bakery1.jpg", "images/bakery2.jpg", "images/bakery3.jpg", "images/bakery4.jpg", "images/bakery5.jpg" ];
length=myPix.length;
function choosePic(){
	var randomNum = Math.floor(Math.random() * length);
	document.getElementById("myPicture").src=myPix[randomNum];
	rotate();
}
function rotate(){
	theAd++;
	if(theAd==myPix.length){
		theAd=0;
	}
	document.getElementById("myPicture").src = myPix[theAd];
	setTimeout(rotate , 3*1000);
}
