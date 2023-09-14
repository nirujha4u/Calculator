const result=document.getElementById("result")

function displayvalue(value){
    // document.getElementById("result").value+=value;
    result.value+=value;
}

function clearscreen(){
    document.getElementById("result").value="";
}

function calculate(value){
    const all=document.getElementById("result").value;
    const res=eval(all);
    document.getElementById("result").value=res;
}

function del(){
    const v=document.getElementById("result").value;
    document.getElementById("result").value=v.substring(0,v.length-1);
}
