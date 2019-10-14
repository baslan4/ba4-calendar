window.onload = function(){
    var data = [{"title":"event 1", "date":"2014/09/25"},
            {"title":"event 2", "date":"2014/09/26","enddate":"2014/09/29"},
            {"title":"event 3", "date":"2014/09/27"},
            {"title":"event 4", "date":"2014/09/30"}];
           
           var string=JSON.stringify(data);
           var objects=JSON.parse(string);
           
           
           var cryear=objects[0].date.substr(0,4);
        var crmonth=objects[0].date.slice(5,7);
    
    var d = new Date();
    var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var month = crmonth-1;  
    var year = cryear; 
    var first_date = month_name[month] + " " + 1 + " " + year;
    var tmp = new Date(first_date).toDateString();
    var first_day = tmp.substring(0, 3);   
    var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var day_no = day_name.indexOf(first_day);   
    var days = new Date(year, month+1, 0).getDate();    
    var calendar = get_calendar(day_no-1, days);   
    document.getElementById("calendar-dates").appendChild(calendar); 
    eventfunc();
}

function get_calendar(day_no, days){
   
    var table = document.createElement('table');
    var tr = document.createElement('tr');
    for(var c=0; c<=6; c++){
        var td = document.createElement('td');
        td.innerHTML = "PSÇPCCP"[c];
        tr.appendChild(td);
    }
    table.appendChild(tr);
    tr = document.createElement('tr');
    var c;
    for(c=0; c<=6; c++){
        if(c == day_no){
            break;
        }
        var td = document.createElement('td');
        td.innerHTML = "";
        tr.appendChild(td);
    }
    
    var count = 1;
    for(; c<=6; c++){
        var td = document.createElement('td');
        td.innerHTML = '<div>'+count+'</div><div id="'+count+'"></div>';
        count++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
    for(var r=3; r<=7; r++){
        tr = document.createElement('tr');
        for(var c=0; c<=6; c++){
            if(count > days){
                table.appendChild(tr);
                return table;
            }
            var td = document.createElement('td');
            
                    
                    
            td.innerHTML = '<div>'+count+'</div><div id="'+count+'"></div><div id="'+(count+100)+'"></div>';
                        
                   
                
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
}
function eventfunc()
{
    var data = [{"title":"event 1", "date":"2014/09/25"},
            {"title":"event 2", "date":"2014/09/26","enddate":"2014/09/29"},
            {"title":"event 3", "date":"2014/09/27"},
            {"title":"event 4", "date":"2014/09/30"}];
           
           var string=JSON.stringify(data);
           var objects=JSON.parse(string);
  
    for(var i=1;i<=30;i++)
        {
            for(var k in objects)
                {
                    if(i==parseInt(objects[k].date.slice(8,10)))
                        {
                            if(typeof objects[k].enddate !== 'undefined')
                                {
                                    
                                    var x=parseInt(objects[k].enddate.slice(8,10));
                                    for(var s=i;s<=x;s++)
                                        {
                                            document.getElementById(s+100).innerHTML=objects[k].title;
                                            document.getElementById(s+100).style.backgroundColor="green";
                                            document.getElementById(s+100).style.color="white";
                                        }
                                        
                                }
                            else{
                                document.getElementById(i).innerHTML=objects[k].title;
                                 document.getElementById(i).style.backgroundColor="green";
                                            document.getElementById(i).style.color="white";
                            }
                            
                            
                                        
                                
                        }
                }
            
        }
}