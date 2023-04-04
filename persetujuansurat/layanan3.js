
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.toLocaleString('default', { month: 'long' })),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [day, month, year].join(' ');
}
function loadTable() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://167.71.205.68:1337/api/services?filters[status][$containsi]=Disetujui");
    xhttp.setRequestHeader('Authorization', 'Bearer ' + "c5c7e16ef592b8e9126105254b4acb986a5be0e8c63c56539d7c86b4b95f1afc8376edb469d3e2a4acaa34d2bff0b6110d5a1cac19755429b4b4c74d49a35639f57c1ddf9e671055066c976d30442ffc3d19f64d08e47d7da6b97ad472723ce74c66350f4f6a86b593c385a84d2fd428d620ebd73ab6f866698dca0b87c22944");
    xhttp.send();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var trHTML = ''; 
        const objects = JSON.parse(this.responseText);
        console.log(objects.data);
         let i = 1;


         if(objects.meta.pagination.total == 0){

            trHTML += '<div class="message"> belum ada data disini<div>'; 


         }else{




            


        for (let object of objects.data) { 


            const attributes = object['attributes'];
            console.log(attributes);




             let buat = new Date( Date.parse(attributes['createdAt']) );

          trHTML += '<div class="message"><div><div class="d-flex message-single" > <div class="pl-1 align-self-center"><div class="custom-control custom-checkbox">'; 
          trHTML += '<input type="checkbox" class="custom-control-input" id="checkbox2"><label class="custom-control-label" for="checkbox2"></label></div></div>';
         
          trHTML += '<div class="ml-2"><button class="border-0 bg-transparent align-middle p-0"> </button></div></div>';
          trHTML += '<a href="email-read.html" class="col-mail col-mail-2">';

        
          trHTML += '<div class="subject">Pengajuan '+attributes['applicationType']+'</div>';



          trHTML += '<div class="date">'+formatDate(buat)+'</div>';

          trHTML += '</a></div></div>';
        i++;


        }
    }
        document.getElementById("listLayanan").innerHTML = trHTML;
      }
    };
  }
  
  loadTable();


 


  


