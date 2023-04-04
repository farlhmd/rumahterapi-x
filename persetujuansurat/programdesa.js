function loadTable() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://167.71.205.68:1337/api/progam-desas");
    xhttp.setRequestHeader('Authorization', 'Bearer ' + "c5c7e16ef592b8e9126105254b4acb986a5be0e8c63c56539d7c86b4b95f1afc8376edb469d3e2a4acaa34d2bff0b6110d5a1cac19755429b4b4c74d49a35639f57c1ddf9e671055066c976d30442ffc3d19f64d08e47d7da6b97ad472723ce74c66350f4f6a86b593c385a84d2fd428d620ebd73ab6f866698dca0b87c22944");
    xhttp.send();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var trHTML = ''; 
        const objects = JSON.parse(this.responseText);
        console.log(objects.data);
        for (let object of objects.data) { 
            const attributes = object['attributes'];
            console.log(attributes);
          trHTML += '<tr>'; 
          trHTML += '<td>'+object['id']+'</td>';
          // trHTML += '<td class="sorting_'+object['id']+'"> <div class="custom-control custom-checkbox"> <input type="checkbox" class="custom-control-input" id="customCheckBox3" required=""> <label class="custom-control-label" for="customCheckBox3"></label></div></td>';
          trHTML += '<td>'+attributes['nama_progdes']+'</td>';
          trHTML += '<td>'+attributes['description']+'</td>';
          trHTML += '<td>'+attributes['start_date']+'</td>';
          trHTML += '<td>'+attributes['end_date']+'</td>';
          
            trHTML += '<td><a class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-eye"></i></a>';
            trHTML += '<a class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>';
            trHTML += '<a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a></td>';
          // trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick="showUserEditBox('+object['id']+')">Edit</button>';
          // trHTML += '<button type="button" class="btn btn-outline-danger" onclick="userDelete('+object['id']+')">Del</button></td>';
          trHTML += "</tr>";
        }
        document.getElementById("mytable").innerHTML = trHTML;
      }
    };
  }
  
  loadTable();


  


