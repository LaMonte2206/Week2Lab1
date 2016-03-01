var library = (function() {
  return {
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){},
		UnixMillisecond: function(){}
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){},
	   	    WithOutSeconds: function() {}
		  }
		})(),
		MDY: (function(){
	  	  return {
		    Numeral: function(){},
			Name: function(){}
		  }
		  })(),
		}
	})(),
	Second: (function(){
		return{
			Second: function(){},
			DblDigit: function(){}
		}
	})(),
	Minute: (function(){
		return{
			Minute: function(){},
			DblDigit: function(){}
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {},
			TwelveHour: function() {},
			AMPM: (function() {
				return {
					UpperCase: function(){},
					LowerCase: function(){}
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){
                var date = new Date();
                var weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
                return weekDay[date.getDay()-1];   
            },
			AbrDayOfWeek: function(){
                var date = new Date();
                var weekDay = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
                return weekDay[date.getDay()-1];
            },
			FirstTwoOfWeek: function(){
                var date = new Date();
                var weekDay = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
                return weekDay[date.getDay()-1];
            },
			WeekOfYear: function(){
                var date = new Date();
                var weekYear = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31","32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52"];
                return weekYear[date.getDate()+7];
            }
		}
	})(),
	Month: (function(){
		return {
			DateOfMonth: (function(){
				return {
					Numeral: function(){
                        var date = new Date();
                        var dateNumeral = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31",];
                        return dateNumeral[date.getDate()-1]; 
                    },
					Ordinal: function(){
                        var date = new Date();
                        var dateOrder = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st"];
                        return dateOrder[date.getDate()-1];
                    },
					DateDblDigit: function(){
                        var date = new Date();
                        var monthDate = date.getDate();
                        return monthDate <10 ? '0' + monthDate: '' + monthDate;
                    }
				}
			})(),
			MonthNumber: function(){
                var date = new Date();
                var month = date.getMonth() +1;
                return String(month);
            },
			MonthNumberDblDigit: function(){
                var date = new Date();
                var month = date.getMonth()+1;
                return month <10 ? '0' + month: '' + month;
            },
			AbrOfCurrentMonth: function(){
              var date = new Date();
              var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
              return monthNames[date.getMonth()];              
            },
			CurrentMonth: function(){
                var date = new Date();
                var monthNames = ["January", "Ferbruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                return monthNames[date.getMonth()];
            }
        }
	})(),
	Year: (function(){
		return {
			DayOfYear: (function(){
				return {
					Numeral: function(){
                        var now = new Date();
                        var start = new Date(now.getFullYear(), 0, 0);
                        var diff = now - start;
                        var oneDay = 1000 * 60 * 60 * 24;
                        var day = Math.floor(diff / oneDay);
                      
                        return day.toString();
                    },
					Ordinal: function(){
                        var now = new Date();
                        var start = new Date(now.getFullYear(), 0, 0);
                        var diff = now - start;
                        var oneDay = 1000 * 60 * 60 * 24;
                        var day = Math.floor(diff / oneDay);    
                        var ordinal = function(day) {     
                            var j = day % 10,
                                k = day  % 100;
                            if (j == 1 && k != 11) {
                                return day + "st";
                            }
                            if (j == 2 && k != 12) {
                                return day + "nd";
                            }
                            if (j == 3 && k != 13) {
                                return day + "rd";
                            } 
                            return day + "th";
                        };
                        
                        return ordinal(day).toString();
                    }
				}
			})(),
			YearFull: function(){
                var date = new Date();
                var year = date.getFullYear(); 
                return String(year);
                
            },
			YearAbr: function(){
                var date = new Date();
                var year = String(new Date().getFullYear()); 
                return year.substring(2,4);
            }
		}
	})(),
	Defaults: function(){}
  }
})();