function addLayanan() {

    const namalayanan = document.getElementById("namalayanan").value;
    const niklayanan = document.getElementById("niklayanan").value;
    const emaillayanan = document.getElementById("emaillayanan").value;
    const jenislayanan = document.getElementById("jenislayanan").value;
    const filelayanan = document.getElementById("filelayanan").files[0];

    var formdata = new FormData();
    formdata.append("files.supportingFiles", filelayanan, namalayanan);
    var json = { 
            "applicant":namalayanan,
            "nik": niklayanan,
            "email": emaillayanan,
            "applicationType": jenislayanan,
            "status":"Diajukan",
            "postedBy": {"connect":[4]}
          };
    formdata.append("data", JSON.stringify(json));

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4 && this.status == 200) {
        window.location.replace("permintaanhalamanan.html")
    }
    });

    xhr.open("POST", "https://tupaii.my.id/api/services");
    xhr.setRequestHeader("Authorization", "Bearer c5c7e16ef592b8e9126105254b4acb986a5be0e8c63c56539d7c86b4b95f1afc8376edb469d3e2a4acaa34d2bff0b6110d5a1cac19755429b4b4c74d49a35639f57c1ddf9e671055066c976d30442ffc3d19f64d08e47d7da6b97ad472723ce74c66350f4f6a86b593c385a84d2fd428d620ebd73ab6f866698dca0b87c22944");

    xhr.send(formdata);
   
}

// 
addLayanan();