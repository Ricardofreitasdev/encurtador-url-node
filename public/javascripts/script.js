const btn = document.querySelector('#btn');

if(btn){

    btn.addEventListener("click", function(){
        document.querySelector('#url').select();
        document.execCommand("copy");
        document.querySelector('#msg').innerHTML = "url copiada com sucesso!";
    })
}