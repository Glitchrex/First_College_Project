var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

//Code to calculate percentage
function calct(clicked_id){
  var x=parseFloat(document.getElementById("xx").value);
  var y= x.toFixed(2);
  var result=(y-0.75)*10;
  if(clicked_id=="res"){
  document.getElementById("ret").value=result.toPrecision(3);
  }
}

//Code to calculate cgpa
function calc(clicked_id)
{
var s1 = parseFloat(document.getElementById("sem1").value); 
var s2 = parseFloat(document.getElementById("sem2").value);
var s3 = parseFloat(document.getElementById("sem3").value); 
var s4 = parseFloat(document.getElementById("sem4").value);
var s5 = parseFloat(document.getElementById("sem5").value); 
var s6 = parseFloat(document.getElementById("sem6").value);
var s7 = parseFloat(document.getElementById("sem7").value); 
var s8 = parseFloat(document.getElementById("sem8").value);
var cr = 24;
var res;
if(isNaN(s1)||isNaN(s2)||isNaN(s3)||isNaN(s4)||isNaN(s5)||isNaN(s6)||isNaN(s7)||isNaN(s8))
alert("Please Enter a Valid Number & 0 in Empty fields");
else if((s2,s3,s4,s5,s6,s7,s8)>0)
cr+=182;
else if(((s2,s3,s4,s5,s6,s7)>0)&&(s8)==0)
cr+=156;
else if(((s2,s3,s4,s5,s6)>0)&&(s7,s8)==0)
cr+=132;
else if(((s2,s3,s4,s5)>0)&&(s6,s7,s8)==0)
cr+=106;
else if(((s2,s3,s4)>0)&&(s5,s6,s7,s8)==0)
cr+=80;
else if(((s2,s3)>0)&&(s4,s5,s6,s7,s8)==0)
cr+=52;
else if((s2>0)&&(s3,s4,s5,s6,s7,s8)==0)
cr+=24;

 if(clicked_id=="cgpa")
{
res=((s1*24)+(s2*24)+(s3*28)+(s4*28)+(s5*26)+(s6*26)+(s7*24)+(s8*26))/cr;
document.getElementById("answer").value=res.toPrecision(2);
}
}
function clrscr()
{
sem1.value="0";
sem2.value="0";
sem3.value="0";
sem4.value="0";
sem5.value="0";
sem6.value="0";
sem7.value="0";
sem8.value="0";
answer.value="";
}

//Code to calculate sgpa
function calculate(){
        var a=[];
         a[0]=document.getElementById("sub1").value;
       a[1]=document.getElementById("sub2").value;
         a[2]=document.getElementById("sub3").value;
         a[3]=document.getElementById("sub4").value;
         a[4]=document.getElementById("sub5").value;
         a[5]=document.getElementById("elec1").value;
         a[6]=document.getElementById("elec2").value;
         a[7]=document.getElementById("lab1").value;
         a[8]=document.getElementById("lab2").value;
         a[9]=document.getElementById("etc").value;
         var regular=4;
         var ele=3;
         var lab=2;
         var knd=1;
         var sum=0;
         var cc=0;
         var i=0;
         var g=[];
        while(i<9)
        { 
          
          if(isNaN(a[i]))
            a[i]=0;           
          if(a[i]<40)
            g[i]=0;
        if(a[i]>=40 && a[i]<45)
          g[i]=4;
        if(a[i]>=45 && a[i]<50)
          g[i]=5;
        if(a[i]>=50 && a[i]<60)
          g[i]=6;
        if(a[i]>=60 && a[i]<70)
          g[i]=7;
        if(a[i]>=70 && a[i]<80)
          g[i]=8;
        if(a[i]>=80 && a[i]<90)
          g[i]=9;
        if(a[i]>=90 && a[i]<=100)
          g[i]=10;    
            i++;
        }   
      i=0;
      while(i<9)
      {
        if(i<5 && a[i]!=0)
        {
          sum=sum+4;
          cc=cc+(g[i]*4);

        }
        if(i<7 && i>4 && a[i]!=0)
        {
          sum=sum+3;
          cc=cc+(g[i]*3);
        }
        if(i<9 && i>6 && a[i]!=0)
        {
          sum=sum+2;
          cc=cc+(g[i]*2);
        }
       
            i++;
      }
      var sgpa=parseFloat(cc/sum);
      document.getElementById("answer").value=sgpa.toPrecision(3);
}

function reset(){
         document.getElementById("sub1").value="";
         document.getElementById("sub2").value="";
         document.getElementById("sub3").value="";
         document.getElementById("sub4").value="";
         document.getElementById("sub5").value="";
         document.getElementById("elec1").value="";
         document.getElementById("elec2").value="";
         document.getElementById("lab1").value="";
         document.getElementById("lab2").value="";
         document.getElementById("etc").value="";
         document.getElementById("answer").value="";
}



//code for modal
var modal = document.getElementById("myModal");
var ifr = document.getElementById("ifme");
var span = document.getElementsByClassName("canc")[0];

// When the user open website, open the modal
window.onload =function(){
  modal.style.display="inline-flex";
  setTimeout(() => {
    modal.style.display="none"
 }, 67000);
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  ifr.remove();
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    ifr.remove();
  }
}