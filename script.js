let form=document.form;
let gen=form.gen;
const cb = document.querySelector('#java');
console.log(cb.checked);
let userName=form.userName;
let Email=form.Email;
let Website=form.Website;
let image=form.image;
let lan="";
function validate()
{
  lan="Java";
    
}
function validate2()
{
  lan=lan+" Python";
  console.log("hi")
    
}
function validate3()
{
  lan+=" C++";
    
}

let uname="";
let mail="";
let site="";
userName.addEventListener("keyup",(e)=>
{
    uname=e.target.value;

})
Email.addEventListener("keyup",(e)=>
{
    mail=e.target.value;

});
let imgurl="";
image.addEventListener("keyup",(e)=>
{
    
imgurl=""+e.value;
console.log(e.target.value);
});
imgurl+=".jpg";
Website.addEventListener("keyup",(e)=>
{
site=e.target.value;
});


let table=document.querySelector("#table2");
let btn=document.querySelector("#enroll");

btn.addEventListener("click",(E)=>
{
    
   console.log(imgurl);
   table.innerHTML+=`<tr><td><hr><td><hr></td></td></tr>
    <tr>
   <td>${uname}<br> ${mail} <br>${lan}<br>${male} </td>
<td><img src="download.jpg"</td>
</tr>
<tr><td><hr><td><hr></td></td></tr>

`
});

let male="";
function gen1()
{
 male="Male";
}
function gen2()
{
    male="Female";
}