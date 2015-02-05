function bornDay(obj){
	var days = ["Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота","Неділя"];
	var d = obj.day.value;
	var m = obj.month.value;
	var y = obj.year.value;
	

	if(m <= 2){
		y--;
		d +=3;
    }

    var w = (d + y + Math.floor(y/4) - Math.floor(y/100) + Math.floor(y/400) + Math.floor((31*m + 10)/12))%7;
    obj.rez.value=days[w];
      
}

function bornDaynew(obj){
	var days = ["Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота","Неділя"];
	var d = obj.day.value;
	var a = Math.floor((14 - d)/12);
	var m = obj.month.value;
	var mm = m + 12*a - 2;
	var y = obj.year.value;
	var yy = y - a;
	

	if(m <= 2){
		y--;
		d +=3;
    }

    var w = (d + yy + Math.floor(yy/4) - Math.floor(yy/100) + Math.floor(yy/400) + Math.floor((31*mm + 10)/12))%7;
    obj.rez.value=days[w];
      
}