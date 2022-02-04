let icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: ""
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: ""
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: ""
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: ""
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: ""
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: ""
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: ""
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: ""
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: ""
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: ""
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: ""
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: ""
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: ""
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: ""
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: ""
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: ""
	}
];

//Richiama funzione per generare colori casuali.
//Viene chiamata una volta per ogni type differente.
let color1 = colorSelection();
let color2 = colorSelection();
let color3 = colorSelection();

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

		//Assegna ai diversi type i colori casuali creati all'inizio
		if(element.type == "user"){
			element.color = color1;
		}else if(element.type == "vegetable"){
			element.color = color2;
		}else if(element.type == "animal"){
			element.color = color3;
		}
		
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

//Questa funzione crea un codice esadecimale casuale
function colorSelection(){

	let = colorCode = "#";
	let choice;
	let randomValue;
	

	let lettereNumeri = [
		"A", "B", "C", "D", "E", "F",
		1, 2, 3, 4, 5, 6, 7, 8, 9
	];

	let lunghezzaLista = lettereNumeri.length;
	
	for(let i = 0; i < 6; i++){
		randomValue = Math.floor(Math.random()*(lunghezzaLista - 1) * 1);
		choice = lettereNumeri[randomValue];
		colorCode += choice
	};
	return colorCode;
}

colorSelection();

