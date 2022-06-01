var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    var url = "https://api-pacientes.herokuapp.com/pacientes";
    
    xhr.open("GET", url);

    var erroAjax = document.querySelector("#erro-ajax");
    xhr.addEventListener("load", function(){
        if (xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();


});