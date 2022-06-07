
const body_store__all = document.querySelector('.body-store__all');
const body_store__title = document.querySelector('.body-store__title');
const second_store = document.querySelector('.second_store');

const items = document.querySelectorAll('.item');


body_store__all.addEventListener('click',()=>{

	
	for (let index = 0; index < items.length; index++) {
		items[index].classList.remove('gr');
	}
	/*
	if(body_store__all.textContent =='view all'){
		body_store__all.textContent ='view new';
		body_store__title.textContent ='ALL ON THE BOARD';
		return;
	}

	if(body_store__all.textContent =='view new'){
		body_store__all.textContent ='view all';
		body_store__title.textContent ='NEW ON THE BOARD';
		return;
	}*/
})


const item_category__title = document.querySelectorAll('.item-category__image');

const body_store = document.querySelector('.body-store');

item_category__title[0].addEventListener('click',()=>{
	console.log(items);
	

	for (let index = 0; index < items.length; index++) {
		items[index].classList.add('gr');
	}
	console.log(items[1]);
	body_store.display='flex';
	items[3].classList.remove('gr');
	items[3].classList.add('active');
	
	items[4].classList.remove('gr');
	items[4].classList.add('active');
	
	items[5].classList.remove('gr');
	items[5].classList.add('active');
})


item_category__title[1].addEventListener('click',()=>{
	console.log(items);

	for (let index = 0; index < items.length; index++) {
		items[index].classList.add('gr');
	}

	items[0].classList.remove('gr');
	items[0].classList.add('active');
	
	items[1].classList.remove('gr');
	items[1].classList.add('active');
	
	items[2].classList.remove('gr');
	items[2].classList.add('active');
})


item_category__title[2].addEventListener('click',()=>{
	console.log(items);

	for (let index = 0; index < items.length; index++) {
		items[index].classList.add('gr');
	}

	items[6].classList.remove('gr');
	items[6].classList.add('active');
	
	items[7].classList.remove('gr');
	items[7].classList.add('active');
	
	items[8].classList.remove('gr');
	items[8].classList.add('active');
})


item_category__title[3].addEventListener('click',()=>{
	console.log(items);

	for (let index = 0; index < items.length; index++) {
		items[index].classList.add('gr');
	}

	items[9].classList.remove('gr');
	items[9].classList.add('active');
	
	items[10].classList.remove('gr');
	items[10].classList.add('active');
	
	items[11].classList.remove('gr');
	items[11].classList.add('active');
})