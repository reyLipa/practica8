
function gastoTotal(ingreso) {
  var gastosNecesarios = ingreso*0.50;
  var gastosOpcionales = ingreso*0.30;
  var ahorroInversion = ingreso*0.20;
  return {gastosNecesarios,gastosOpcionales,ahorroInversion
  };
}


let principal=()=>{

  var nombreUsuario = prompt("Ingrese su nombre:");
  var clave = prompt("Ingrese su clave:");
  var edad = prompt("Ingrese su edad:");
  var ingreso = prompt("Ingrese su ingreso total:");

  
  var miClave = "1234567"; 
  if (clave !== miClave) {
      console.log("Clave incorrecta");
      return;
  }else{
  
  var gasto = gastoTotal(ingreso);
  

  console.log("******************ArgenFin**********************");
  console.log("    PROGRAMA DE PRESUPUESTO   ");
  console.log("------------------------------------------------");
  console.log("Nombre: "+ nombreUsuario);
  console.log("Edad: "+edad);
  console.log("------------------------------------------------");
  console.log("Ingreso Total:"+ ingreso);
  console.log("Gastos Necesarios(50%) : "+gasto.gastosNecesarios);
  console.log("Gastos Opcionales(30%) : "+gasto.gastosOpcionales);
  console.log("Ahorro e Inversión(20%): "+gasto.ahorroInversion);
  console.log("************************************************");
}
}
console.log(principal())





