function validar (){
let name= document.getElementById('name').value
let phone= document.getElementById('phone').value
let email= document.getElementById('mail').value
let msg= document.getElementById('mensagem').value

  if(name == ""){
      alert("Nome não preenchido")
        return false
  }
  if(phone == ""){
    alert("Telefone não preenchido")
      return false
}
if(email == "" || email.indexOf("@") == -1){
    alert("Email não preenchido ou incorreto")
      return false
}

limpaFormulario()
}



function limpaFormulario(){
    document.getElementById('name').value=("")
    document.getElementById('phone').value=("")
    document.getElementById('mail').value=("")
    document.getElementById('mensagem').value=("")
}

function mask(o, f) {
    setTimeout(function() {
      var v = mphone(o.value);
      if (v != o.value) {
        o.value = v;
      }
    }, 1);
  }
function mphone(v) {
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
      r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
      r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
      r = r.replace(/^(\d*)/, "($1");
    }
    return r;
  }