// A simple script return how many experience points are required leveling up from your current experience level to the target level.
// File Path: /plugins/PlaceholderAPI/javascripts/levels_to_points.js

// %javascript_levelstopoints_[x],[y]%
// x = Current Level.
// y = Target Level.
// Formulas from https://minecraft.fandom.com/wiki/Experience#Leveling_up

// By MrMango @ mcdchk.net

var x = Number(args[0]);  // Input of Current Level.
var y = Number(args[1]);  // Input of Target Level.
function leveltopoints() {
    	if (x!==y && x<y && x>=0 && y>=1) {
            if (x <= 16) {
        		var x1 = Math.pow(x, 2) + 6 * x;
    		} else if (x >= 17 && x <= 31) {
        		var x1 = 2.5 * Math.pow(x, 2) - 40.5 * x + 360;
        	} else if (x >= 32) {
        		var x1 = 4.5 * Math.pow(x, 2) - 162.5 * x + 2220;
        	} else {
                return "x1 error..."  // debug msg
            }
          
            if (y <= 16) {
        		var y1 = Math.pow(y, 2) + 6 * y;
    		} else if (y >= 17 && y <= 31) {
        		var y1 = 2.5 * Math.pow(y, 2) - 40.5 * y + 360;
        	} else if (y >= 32) {
        		var y1 = 4.5 * Math.pow(y, 2) - 162.5 * y + 2220;
        	} else {
                return "y1 error..."  // debug msg
            }
            
            return (y1 - x1);  // Output result as number.
            //return "Leveling up from &nlevel " + x + "&f to &nlevel " + y + "&f require total of &n" + (y1 - x1) + " exp points!";  // Output result as chat message.
            
            } else {
                return "Error... Current level can not be a negative nubmer, equal and more than target level.";
        }
    }

leveltopoints();
