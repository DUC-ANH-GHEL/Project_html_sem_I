function error(){
	var imeo = document.getElementById("exampleInputEmail1");
	if(imeo.value===""){	
	alert("Bạn chưa nhập email");
	imeo.focus();	
		// return false;
	}
	var imeo2 =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if(!imeo2.test(imeo.value)){
		alert("email sai định dạng");
		imeo.focus();
		// return false;
	}
	var mk = document.getElementById("exampleInputPassword1");
	if(mk.value===""){
		alert("Bạn chưa nhập mật khẩu");
		mk.focus();
		// return false;
	}
	// var mk2 = (?=.*[A-Z]);
	// if(!mk2.test(mk.value)){
	// 	alert("mật khẩu phải chứa ít nhất 8 ký tự và chứa ít nhất một chữ hoa");
	// }
}