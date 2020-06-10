function thanhtoan(){
	var name = document.getElementById("inputname");
	if(name.value===""){
		alert("bạn chưa nhập tên");
	}
	var sodt = document.getElementById("numberphone");
	if(sodt.value===""){
		alert("bạn chưa nhập số điện thoại");
	}
	var meo = document.getElementById("imeo");
	if(meo.value===""){
		alert("bạn chưa nhật email");
	}
	var diachi = document.getElementById("address");
	if(diachi.value===""){
		alert("bạn chưa nhập địa chỉ");
	}
	var dulich = document.getElementById("travel");
	if(dulich.value==="1"){
		alert("bạn chưa chọn tỉnh");

	}
}