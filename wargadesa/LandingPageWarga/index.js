function loadProgramDesa() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://tupaii.my.id/api/progam-desas");
    xhttp.setRequestHeader('Authorization', 'Bearer ' + "c5c7e16ef592b8e9126105254b4acb986a5be0e8c63c56539d7c86b4b95f1afc8376edb469d3e2a4acaa34d2bff0b6110d5a1cac19755429b4b4c74d49a35639f57c1ddf9e671055066c976d30442ffc3d19f64d08e47d7da6b97ad472723ce74c66350f4f6a86b593c385a84d2fd428d620ebd73ab6f866698dca0b87c22944");
    xhttp.send();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var trHTML = ''; 
        const objects = JSON.parse(this.responseText);
        for (let object of objects.data) { 
          const attributes = object['attributes'];
          trHTML += '<div class="col-lg-6">';
          trHTML += '<div style="position: relative;" class="service-item first-service">';
          if(object['id'] == 1) {
          trHTML += '<img style="position: absolute;top: 20px;right: 150px;;"src="https://jabarprov.go.id/icons/program-unggulan/citarum-harum.svg" width="32" height="32" alt="Desa Digital">'
          } else {
            trHTML += '<img style="position: absolute;top: 20px;right: 150px;;"src="https://jabarprov.go.id/icons/program-unggulan/one-pesantren-one-product.svg" width="32" height="32" alt="Desa Digital">'
          }
          trHTML += '<div style="padding-top: 30px;;">'; 
          trHTML += '<h4>'+attributes['nama_progdes']+'</h4>';
          trHTML += '<p>'+attributes['description']+'</p>';
          trHTML += "</div>";
          trHTML += "</div>";
          trHTML += "</div>";
        }
        document.getElementById("programDesa").innerHTML = trHTML;
      }
    };
}

function loadLaporanKeuangan() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://tupaii.my.id/api/laporan-keuangans");
  xhttp.setRequestHeader('Authorization', 'Bearer ' + "c5c7e16ef592b8e9126105254b4acb986a5be0e8c63c56539d7c86b4b95f1afc8376edb469d3e2a4acaa34d2bff0b6110d5a1cac19755429b4b4c74d49a35639f57c1ddf9e671055066c976d30442ffc3d19f64d08e47d7da6b97ad472723ce74c66350f4f6a86b593c385a84d2fd428d620ebd73ab6f866698dca0b87c22944");
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var trHTML = ''; 
      const objects = JSON.parse(this.responseText);
      console.log(objects);
      for (let object of objects.data) { 
        const attributes = object['attributes'];
        trHTML += '<div class="col-lg">';
        trHTML += '<div class="service-item first-service">'; 
        trHTML += '<h4>'+attributes['nama_laporan']+'</h4>';
        trHTML += '<p>'+attributes['tanggal_laporan_keuangan']+'</p>';
        trHTML += '<p>'+attributes['jenis_laporan_keuangan']+'</p>';
        trHTML += "</div>";
        trHTML += "</div>";
      }
      document.getElementById("laporanKeuangan").innerHTML = trHTML;
    }
  };
}

function loadKebijakanDesa() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://tupaii.my.id/api/kebijakans");
  xhttp.setRequestHeader('Authorization', 'Bearer ' + "c5c7e16ef592b8e9126105254b4acb986a5be0e8c63c56539d7c86b4b95f1afc8376edb469d3e2a4acaa34d2bff0b6110d5a1cac19755429b4b4c74d49a35639f57c1ddf9e671055066c976d30442ffc3d19f64d08e47d7da6b97ad472723ce74c66350f4f6a86b593c385a84d2fd428d620ebd73ab6f866698dca0b87c22944");
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var trHTML = ''; 
      const objects = JSON.parse(this.responseText);
      console.log(objects);
      for (let object of objects.data) { 
        const attributes = object['attributes'];
        trHTML += '<div class="col-lg-6">';
        trHTML += '<div class="service-item first-service">'; 
        trHTML += '<h4>'+attributes['title_kebijakan']+'</h4>';
        trHTML += '<p>Tanggal Dibuat: '+attributes['createdAt'].substr(0, 10)+'</p>';
        trHTML += '<p>Tanggal Dipublish:'+attributes['publishedAt'].substr(0, 10)+'</p>';
        trHTML += "</div>";
        trHTML += "</div>";
      }
      document.getElementById("kebijakanDesa").innerHTML = trHTML;
    }
  };
}
  
loadProgramDesa();
loadLaporanKeuangan();
loadKebijakanDesa();
  


