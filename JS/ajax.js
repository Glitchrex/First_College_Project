function result() {
  var a=document.getElementById("Dept").value;
  var b=document.getElementById("back").value;
  var c=document.getElementById("marks").value;
  if (a == ""||b == ""||c == "") {
    document.getElementById("r").innerHTML = "";
    return;
  } else {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("r").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET","test.php?d="+a+"&b="+b+"&m="+c,true);
    xmlhttp.send();
  }
}

//code to 
function check_login(){
  var a=document.getElementById("email").value;
  var b=document.getElementById("password").value;
  var c=document.getElementsByName("role");
  for(var i=0;i<c.length;i++)
    if(c[i].checked)
      var d=c[i].value;
  if (a == ""||b == ""||c == "") {
    document.getElementById("check").innerHTML = "Please select all fields";
    return;
  } else {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        if(this.responseText=="admin.html")
        {
          window.location.href=this.responseText;
        }
        if(this.responseText=="studentdashboard.php")
        {
          window.location.href=this.responseText;
        }
        document.getElementById("check").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("POST","studenthome.php",true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("email="+a+"&password="+b+"&role="+d);
}
}

function download_csv(csv, filename) {
    var csvFile;
    var downloadLink;

    // CSV FILE
    csvFile = new Blob([csv], {type: "text/csv"});

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // We have to create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Make sure that the link is not displayed
    downloadLink.style.display = "none";

    // Add the link to your DOM
    document.body.appendChild(downloadLink);

    // Lanzamos
    downloadLink.click();
}

function export_table_to_csv(html, filename) {
  var csv = [];
  var rows = document.querySelectorAll("table tr");
  
    for (var i = 0; i < rows.length; i++) {
    var row = [], cols = rows[i].querySelectorAll("td, th");
    
        for (var j = 0; j < cols.length; j++) 
            row.push(cols[j].innerText);
        
    csv.push(row.join(","));    
  }

    // Download CSV
    download_csv(csv.join("\n"), filename);
}

function check() {
    var html = document.querySelector("table").outerHTML;
  export_table_to_csv(html, "result.csv");
}

function mark() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("marks").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET","marks.php",true);
    xmlhttp.send();
  }

function cgpa() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("marks").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET","cgpa.html",true);
    xmlhttp.send();
  }

  function sgpa() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("marks").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET","sgpacal.html",true);
    xmlhttp.send();
  }

  function percentage() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("marks").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET","calc.html",true);
    xmlhttp.send();
  }

  /*js for showing quwery*/

  function qry() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("marks").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET","http://localhost:8080/miniproject/php/showqry.php",true);
    xmlhttp.send();
  }
