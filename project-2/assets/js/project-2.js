let obj = [];

const load_site_data = () => {
	const index_msg = Math.floor(Math.random() * obj.data.length);
	const index_img = Math.floor(Math.random() * obj.images.length);

	const div_overlay = document.createElement("div");
	div_overlay.classList.add("overlay");

	const div_data_container = document.createElement("div");
	div_data_container.classList.add("data-container");

	const img_element = document.createElement("img");
	img_element.src = `assets/images/${obj.images[index_img]}`;

	const div_quote_container = document.createElement("div");
	div_quote_container.classList.add("quote");

	const quote = document.createElement("h3");
	quote.appendChild(document.createTextNode(obj.data[index_msg].quote));
	div_quote_container.appendChild(quote);

	const author = document.createElement("small");
	author.appendChild(document.createTextNode(obj.data[index_msg].author));
	div_quote_container.appendChild(author);

	div_data_container.appendChild(img_element);
	div_data_container.appendChild(div_quote_container);


	element = document.getElementById("container");
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
	element.appendChild(div_overlay);
	element.appendChild(div_data_container);

	// div_data_container.style.opacity = 1;

	clearInterval(load_site_data);
	setTimeout(load_site_data, 10000);
}

const xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	obj = JSON.parse(this.responseText);
    	load_site_data();
    }
};

xmlhttp.open("GET", "data.json", true);
xmlhttp.send();