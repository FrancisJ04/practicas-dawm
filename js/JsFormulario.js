	
	window.addEventListener("DOMContentLoaded",function(){
		const ev_name = document.getElementById("name");

		ev_name.addEventListener("focus",function(){
		let Lv_Mensaje_3 = "Este mensaje se muestra al clickear el input del nombre";
		alert(Lv_Mensaje_3);
		}, {once: true});
	});

	window.addEventListener("DOMContentLoaded",function(){
		const ev_email = document.getElementById("email");

		ev_email.addEventListener("focus",function(){
		let Lv_Mensaje_3 = "Este mensaje se muestra al clickear el input del email";
		alert(Lv_Mensaje_3);
		}, {once: true});
	});

    window.addEventListener("DOMContentLoaded",function(){
    const ev_country = document.getElementById("country");
    
    ev_country.addEventListener("focus",function(){
        alert("Este mensaje se muestra al entrar en el selector de país");
    }, {once: true});
    
    ev_country.addEventListener("change", function(){
        const selectedValue = this.value;
        
        this.style.backgroundColor = "";
        this.style.color = "";

	        if(selectedValue === "Ecuador"){
	            this.style.backgroundColor = "#FFD700";
	            this.style.color = "black";
	        } else if(selectedValue === "Perugistán"){
	            this.style.backgroundColor = "#FF4444";
	            this.style.color = "white";
	        } else if(selectedValue === "Bolivia"){
	            this.style.backgroundColor = "#4CAF50";
	            this.style.color = "white";
	        } else if(selectedValue === "ColombiaPa"){
	            this.style.backgroundColor = "#2196F3";
	            this.style.color = "white";
	        } else {
	            this.style.backgroundColor = "white";
	            this.style.color = "black";
	        }
    	});
	});