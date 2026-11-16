const search=document.querySelector('#search');
if(search){
 const buttons=[...document.querySelectorAll('[data-filter]')],cards=[...document.querySelectorAll('.card')];
 const requested=new URLSearchParams(location.search).get('type');
 let type=buttons.some(b=>b.dataset.filter===requested)?requested:'all';
 function update(){const q=search.value.trim().toLocaleLowerCase();let count=0;for(const c of cards){c.hidden=!( (type==='all'||c.dataset.type===type)&&c.dataset.search.toLocaleLowerCase().includes(q));if(!c.hidden)count++}buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===type)));document.querySelector('#result-count').textContent=`共 ${count} 篇筆記`;document.querySelector('#empty').hidden=count!==0}
 buttons.forEach(b=>b.addEventListener('click',()=>{type=b.dataset.filter;update()}));search.addEventListener('input',update);update();
}
