///traversing through DOM


//////////// parent element
var itemlist=document.querySelector('#items');
//console.log(itemlist.parentNode);
//itemlist.parentNode.style.backgroundColor='#f4f4f4';
//console.log(itemlist.parentNode.parentNode.parentNode);

///////////childNodes
//console.log(itemlist.childNodes);
 

///////////children
//console.log(itemlist.children);

/////////firstchild
//console.log(itemlist.firstChild);

/////////firstelementchild
//console.log(itemlist.firstElementChild);
//itemlist.firstElementChild.textContent='hello 1'

/////////lastchild
//console.log(itemlist.lastChild);


/////////lastelementchild
//console.log(itemlist.lastElementChild);
//itemlist.lastElementChild.textContent='hello 4'

////////// nextSibling
//console.log(itemlist.nextSibling);
//console.log(itemlist.nextElementSibling);

////////// previousSibling
//console.log(itemlist.previousSibling);
//console.log(itemlist.previousElementSibling);

/////////// creat element
//// create  div
var newdiv=document.createElement('div');

//// addclass
newdiv.className='hello1111';

//// add id
newdiv.id='hello2222';

//// add attr
newdiv.setAttribute('title','Hello Div');

//// creat text node
var newdivtext=document.createTextNode('hello');

///// add text to div
newdiv.appendChild(newdivtext);
console.log(newdiv);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

container.insertBefore(newdiv,h1);

//////////adding hello before item 1
var newlist=document.createElement('li');
newlist.className='list-group-item';
var newlisttext=document.createTextNode('hello');
newlist.appendChild(newlisttext);
var h=document.querySelector('li');
var container1=document.querySelector('#items');
console.log(container1);
container1.insertBefore(newlist,h);
console.log(newlist);


