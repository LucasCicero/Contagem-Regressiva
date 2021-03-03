const secondsContainer= document.querySelector('#seconds');// recebe id do h2 seconds
const minutesContainer= document.querySelector('#minutes');
const hoursContainer= document.querySelector('#hours');
const daysContainer= document.querySelector('#days');
const nextYearContainer = document.querySelector('#year');
const spinnerLoading = document.querySelector('#loading');
const countdownContainer = document.querySelector('#countdown');


const nextYear = new Date().getFullYear()+1;// busca próximo ano
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`); //  data completa  de meia noite de primeiro de janeiro do próximo ano

nextYearContainer.textContent = nextYear; // div year recebe  o próximo ano

const updateCountdown = ()=> {
	
	const currentTime = new Date();
	const difference = newYearTime - currentTime;// diferença entre as datas do próximo ano e da data do tempo atual(resultado em milisegundos)
	const days = Math.floor(difference/1000/60/60/24);//quantidade arredondada de dias  que faltam para chegar a data do ano que vem
	const hours = Math.floor(difference/1000/60/60) %24;//quantidade arredondada de horas  que faltam para chegar a data do ano que vem, levando em conta as horas já passadas do dia atual(%24)
	const minutes = Math.floor(difference/1000/60 %60);//quantidade arredondada de minutos  que faltam para chegar a data do ano que vem, levando em conta os minutos já passadas do dia atual(%60)
	const seconds = Math.floor(difference/1000) %60; //quantidade arredondada de segundos  que faltam para chegar a data do ano que vem, levando em conta os segundos já passadas do dia atual(%60)
	insertCountdownValues({days,hours,minutes,seconds});
	
}

const insertCountdownValues= ({days,hours,minutes,seconds})=>{	
	
	secondsContainer.textContent = seconds< 10 ? '0'+ seconds:seconds; // caso o contador for menor que 10 coloca 0 na frente + os segundos que faltam para a data, caso o contrario apenas os segundos que faltam
	minutesContainer.textContent = minutes< 10 ? '0'+ minutes:minutes;
	hoursContainer.textContent = hours< 10 ? '0'+ hours:hours;
	daysContainer.textContent = days< 10 ? '0'+ days:days;
}

const handleCountdownDisplay = () =>{
	spinnerLoading.remove();  // depois de 1 segundo da pagina carregada a imagem de carregamento é removida
		countdownContainer.style.display='flex';// coloca a proprieadade flex  para o countdown no css
		
}
	
	
	setTimeout(handleCountdownDisplay,1000);// executa a cada 1 segundo a função handleCountdownDisplay
	setInterval(updateCountdown, 1000);// executa a cada 1 segundo a função updateCountdown
