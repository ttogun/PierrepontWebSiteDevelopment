// UDMv3.8.6
//* DO NOT EDIT THIS BIT *
if (!exclude) { //********
//************************



///////////////////////////////////////////////////////////////////////////
//
//  ULTIMATE DROP DOWN MENU VERSION 3.8.6 by Brothercake
//  http://www.udm4.com/udm3/ 
//
//  Link-wrapping routine by Brendan Armstrong
//  Original KDE modifications by David Joham
//  Opera reload/resize based on a routine by Michael Wallner
//  Select-element hiding routine by Huy Do
//
///////////////////////////////////////////////////////////////////////////





// *** POSITIONING AND STYLES *********************************************



var menuALIGN = "free";		// alignment mode
var absLEFT = 	0;		// absolute left or right position (if menu is left or right aligned)
var absTOP = 	0; 		// absolute top position

var staticMENU = false;		// static positioning mode (win/ie5,ie6 and ns4 only)

var stretchMENU = false;	// show empty cells
var showBORDERS = false;	// show empty cell borders

var baseHREF = "resources/";	// base path
var zORDER = 	1000;		// base z-order of nav structure

var mCOLOR = 	"#FFFFFF";	// main nav cell color
var rCOLOR = 	"#FFFFFF";	// main nav cell rollover color
var bSIZE = 	1;		// main nav border size
var bCOLOR = 	"#FFFFFF";	// main nav border color
var aLINK = 	"#000000";	// main nav link color
var aHOVER = 	"006600";		// main nav link hover-color (dual purpose)
var aDEC = 	    "none";		// main nav link decoration
var fFONT = 	"Trebuchet MS";	// main nav font face
var fSIZE = 	13;		// main nav font size (pixels)
var fWEIGHT = 	"normal";		// main nav font weight
var tINDENT = 	7;		// main nav text indent (if text is left or right aligned)
var vPADDING = 	5;		// main nav vertical cell padding
var vtOFFSET = 	0;		// main nav vertical text offset (+/- pixels from middle)

var keepLIT =	true;		// keep rollover color when browsing menu
var vOFFSET = 	5;		// shift the submenus vertically
var hOFFSET = 	4;		// shift the submenus horizontally

var smCOLOR = 	"#FFFFFF";	// submenu cell color
var srCOLOR = 	"#FFFFFF";	// submenu cell rollover color
var sbSIZE = 	1;		// submenu border size
var sbCOLOR = 	"#FFFFFF";	// submenu border color
var saLINK = 	"#000000";	// submenu link color
var saHOVER = 	"#006600";	// submenu link hover-color (dual purpose)
var saDEC = 	"none";		// submenu link decoration
var sfFONT = 	"Trebuchet MS";	// submenu font face
var sfSIZE = 	13;		// submenu font size (pixels)
var sfWEIGHT = 	"normal";	// submenu font weight
var stINDENT = 	5;		// submenu text indent (if text is left or right aligned)
var svPADDING = 1;		// submenu vertical cell padding
var svtOFFSET = 0;		// submenu vertical text offset (+/- pixels from middle)

var shSIZE =	2;		// submenu dropshadow size
var shCOLOR =	"#bcbcbc";	// submenu dropshadow color
var shOPACITY = 75;		// submenu dropshadow opacity (not ie4,ns4 or opera)

var keepSubLIT = true;		// keep submenu rollover color when browsing child menu
var chvOFFSET = -12;		// shift the child menus vertically
var chhOFFSET = 7;		// shift the child menus horizontally

var openTIMER = 100;		// menu opening delay time (not ns4/op5/op6)
var openChildTIMER = 200;	// child-menu opening delay time (not ns4/op5/op6)
var closeTIMER = 400;		// menu closing delay time

var aCURSOR = "hand";		// cursor for active links (not ns4, op5 or op6)
var altDISPLAY = "";		// where to display alt text
var allowRESIZE = mu;		// allow resize/reload

var redGRID = false;		// show a red grid
var gridWIDTH = 760;		// override grid width
var gridHEIGHT = 500;		// override grid height
var documentWIDTH = 0;		// override document width

var hideSELECT = false;		// auto-hide select boxes when menus open (ie only)
var allowForSCALING = false;	// allow for text scaling in gecko browsers
var allowPRINTING = false;	// allow the navbar and menus to print (not ns4)

var arrWIDTH = 13;		//arrow width (not ns4/op5/op6)
var arrHEIGHT = 13;		//arrow height (not ns4/op5/op6)

var arrHOFFSET = -1;		//arrow horizontal offset (not ns4/op5/op6)
var arrVOFFSET = -3;		//arrow vertical offset (not ns4/op5/op6)
var arrVALIGN = "middle";	//arrow vertical align (not ns4/op5/op6)

var arrLEFT = "<";		//left arrow (not ns4/op5/op6)
var arrLEFT_ROLL = "";		//left rollover arrow (not ns4/op5/op6)
var arrRIGHT = ">";		//right arrow (not ns4/op5/op6)
var arrRIGHT_ROLL = "";		//right rollover arrow (not ns4/op5/op6)





//** LINKS ***********************************************************



// add main link item ("url","Link name",width,"text-alignment","_target","alt text",top position,left position,"key trigger","mCOLOR","rCOLOR","aLINK","aHOVER")
MI("index.html","Home",200,"Left","","",10,0,"","","","","");

MI("overview.html","About Pierrepont",200,"Left","","",30,0,"","","","","");

	SP(184,"left","left",-20,220,"","","","","","","");

	SI("overview.html","Overview","","");
	SI("founders_statement.html","Founder's Statement","","");
	SI("mission_statement.html","Mission Statement","","");
	SI("from_the_head_school.html","From the Head of the School","","");
	SI("college_acceptances.html","College Acceptances","",""); 


MI("curriculum_faculty.html","Curriculum & Faculty",200,"Left","","",50,0,"","","","","");

	// define submenu properties (width,"align to edge","text-alignment",v offset,h   offset,"filter","smCOLOR","srCOLOR","sbCOLOR","shCOLOR","saLINK","saHOVER")
	SP(184,"left","left",-20,220,"","","","","","","");

	SI("CF_administration.html","Administration","","");
	SI("CF_art.html","Studio Art","","");
	SI("CF_english.html","English","",""); 
	SI("CF_humanities.html","History","","");
	SI("CF_languages.html","Languages","","");
	SI("lower school.html","Lower School","","");
	SI("CF_mathematics.html","Mathematics","","");
	SI("CF_music_and_music_theory.html","Music & Music Theory","","");
	SI("CF_science.html","Science","","");
	SI("CF_theatre_and_dance.html","Theater & Dance","","");

MI("pierrepont_admissions.html","Admissions",200,"Left","","",70,0,"","","","","");

MI("http://www.pierrepontschool.org/calendar.html","Calendar",200,"Left","","",90,0,"","","","","");



MI("community.html","Community",200,"Left","","",110,0,"","","","","");
	SP(184,"left","left",-20,220,"","","","","","","");
	

    SI("chess.html","Chess","","");
	SI("mathcounts.html","MATHCOUNTS","","");
	SI("docsandforms.html","Documents and Forms","","");
	


MI("contact_pierrepont_school.html","Contact",200,"Left","","",130,0,"","","","","");






//* DO NOT EDIT THIS BIT *
}//***********************
//************************

//
	//SI("announcements.html","Announcements","","");