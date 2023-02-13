//console.log(document.title);
//document.title = "Rzhari11";
//console.log(document.title);

const body = document.body;


const btn = document.createElement('button');
btn.textContent = "Klik Saya 2";

btn.style.background = "aqua";
btn.style.border = "none";
btn.style.fontSize = "20px";
body.append(btn);

btn.addEventListener('mouseover', function() {
	const h1 = document.createElement('h1');
	h1.textContent = 'Rifki Al Azhari';
	
	body.append(h1);
	
	btn.addEventListener('mouseout', function() {
		h1.style.color = "red";
});
});

