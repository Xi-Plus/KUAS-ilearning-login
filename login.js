javascript:
(function(){

if (location.href === "http://ilearning.kuas.edu.tw/") {
	loginForm.submit();
} else if (location.href === "http://ilearning.kuas.edu.tw/connect_lost.php") {
	gohome();
} else {
	alert("Something went worng!");
}

})();
