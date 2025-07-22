        dt = new Date();
		day = dt.getDay();
		days = dt.getDate();
		month = dt.getMonth();
		year = dt.getFullYear();

		if(day==0) day="Sunday";
		else if(day==1) day="Monday";
		else if(day==2) day="Tuesday";
		else if(day==3) day="Wednesday";
		else if(day==4) day="Thursday";
		else if(day==5) day="Friday";
		else day="Saturday";

		if(month==0) month="January";
		else if(month==1) month="February";
		else if(month==2) month="March";
		else if(month==3) month="April";
		else if(month==4) month="May";
		else if(month==5) month="June";
		else if(month==6) month="July";
		else if(month==7) month="August";
		else if(month==8) month="September";
		else if(month==9) month="October";
		else if(month==10) month="November";
		else month="December";

		document.getElementById("date").innerHTML = day +" "+ days + ", " + month + " " +year;
	

		function clockstart()
		{
			timerId = setInterval(update, 50)
			update()   //(*)
		}

		function update()
		{
			var date = new Date()
			var hours = date.getHours()
				document.getElementById("hour").innerHTML = hours
			var minutes = date.getMinutes()
				document.getElementById("min").innerHTML = minutes
			var seconds = date.getSeconds()
				document.getElementById("sec").innerHTML = seconds
			var ms = date.getMilliseconds()
				document.getElementById("ms").innerHTML = ms
		}
