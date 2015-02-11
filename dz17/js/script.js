
$("#bornDay").submit (function () {

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
);