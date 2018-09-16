function mcpf(cpf){
				cpf.value=cpf.value.replace(/\D/g,"")
				cpf.value=cpf.value.replace(/(\d{3})(\d)/,"$1.$2")
				cpf.value=cpf.value.replace(/(\d{3})(\d)/,"$1.$2")
				cpf.value=cpf.value.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
			}
function mtel(v){
    v.value=v.value.replace(/\D/g,"");            
    v.value=v.value.replace(/^(\d{2})(\d)/g,"($1) $2"); 
    v.value=v.value.replace(/(\d)(\d{3})$/,"$1-$2");   
}
function mcep(cep){
    cep.value=cep.value.replace(/\D/g,"");            
    cep.value=cep.value.replace(/(\d)(\d{3})$/,"$1-$2");
}