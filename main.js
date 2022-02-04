let icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

//Crea la variabile che contiene l' array da scorrere
let array;

//Crea riferimento a container delle icone
let iconsContainer = document.getElementById('icons-cont');

//Contiene il codice html da inserire nel container delle icone
let content = ""

//Aquisisce il selettore dall'html
const selector = document.getElementById("selector");

//Inizializza il valore della selezione
let selected = "";

//Richiama creazioneArray per icons
array = creazioneArray(icons);


//Inserisce content all'interno di icons-cont nell' HTML
iconsContainer.innerHTML = content;

//Aggiunge Event listener per il cambio di selezione
selector.addEventListener('change', function(){
    //Resetta content
    content = "";

    //Assegna a selected il valore della proprietà value
    selected = this.value;
    
    //Filtra gli oggetti di icons in base alla selezione
    const selezionato = icons.filter((tipo) => {
        if(tipo.type == selected){
            return true;
        }
        return false;
    })

    //Se la selezione non corrisponde a nessuno dei vaolori ritorna tutte le icone
    if(selezionato == false){
        array = creazioneArray(icons);
    }

    //Richiama creazioneArray per selezionato
    array = creazioneArray(selezionato);

    //Inserisce content all'interno di icons-cont nell' HTML
    iconsContainer.innerHTML = content;
})  


//Dato un array, inserisce in content il contenuto da inserire nell' html
function creazioneArray(myArray){
    myArray.forEach(element => {
        content+=   `<div class="icon-container">
                        <div>
                            <i style="color:${element.color};" class="${element.family} ${element.prefix}${element.name} icon-size"></i>
                        </div>
                        <div class="type-size">
                            ${element.name}
                        </div>
                    </div>`
        });
}
