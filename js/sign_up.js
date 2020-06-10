function signup(){
	var imeo = document.getElementById("inputEmail4");
	if(imeo.value===""){
		alert("Bạn chưa nhập email");
		imeo.focus();
	}
	var imeo1 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if(!imeo1.test(imeo.value)){
		alert("email sai định dạng");
	}
	var pass = document.getElementById("inputPassword4");
	if(pass.value===""){
		alert("Bạn chưa nhập mật khẩu");
	}
	var pass1 = document.getElementById("inputAddress");
	if(pass1.value===""){
		alert("Bạn chưa nhập lại mật khẩu");

	}
	if(pass1.value != pass.value){
		alert("mật khẩu không khớp");
	}
	var name = document.getElementById("inputhoten");
	if(name.value===""){
		alert("Bạn chưa nhập họ tên");
		name.focus();
	}
	var sdt = document.getElementById("inputsdt");
	if(sdt.value===""){
		alert("Bạn chưa nhập số điện thoại");
		sdt.focus();
	}
}