var tbTarefas;

$(function(){
   
    var indice;
    var i;
    var texto;
    if(localStorage.getItem("tarefas")!==null){
        tbTarefas = JSON.parse(localStorage.getItem("tarefas"));
    }else{
        tbTarefas={
            dados:[]
        }
    }
$("#btn").click(cadastrarTarefa);
$("#btn2").click(listar);
$("#btn3").click(limpar);

});
// filtro na lista de tarfas
$("#searchTarefa").keyup(function(){
     
     tbTarefas = JSON.parse(localStorage.getItem("tarefas"));
         texto = $("#searchTarefa").val(); 
         $("#listarTarefas").empty();
     
        for(var i=0;i<tbTarefas.dados.length;i++){
           if(tbTarefas.dados[i].tarefa.indexOf(texto)==0){
         
            console.log(tbTarefas.dados[i].tarefa+"")   
            $("#listarTarefas").append(""+tbTarefas.dados[i].tarefa+"<br>");
           }
        }
   
});

// função cadastrar tarefa
function cadastrarTarefa(){
    if($("#tarefa").val()!=''){
  tbTarefas.dados.push({tarefa:$("#tarefa").val()});
  localStorage.setItem('tarefas',JSON.stringify(tbTarefas));
  $("#listarTarefas").empty();
  $("#tarefa").val("");
    }else{
        alert("ok")
    }
}
function limpar(){
    localStorage.clear();
    $("#listarTarefas").empty();
}
function listar(){
    $("#listarTarefas").empty();
    $("#listarTarefas").html("");
    $("#listarTarefas").html("<ul>");
    if(localStorage.length>0){
        
        tbTarefas = JSON.parse(localStorage.getItem("tarefas"));
        var conteudo="";
       
       for(var i=0;i<tbTarefas.dados.length;i++){
           $("#listarTarefas").append("<li>"+tbTarefas.dados[i].tarefa+"<button type='button'  name= id='excluir' onclick='excluir("+i+")'>x</button></li> ");
            
        }
    }
    
    $("#listarTarefas").append("</ul>");
    
}



function excluir(indice){
    tbTarefas.dados.splice(indice,1);
    localStorage.setItem('tarefas',JSON.stringify(tbTarefas));
    listar();
}
