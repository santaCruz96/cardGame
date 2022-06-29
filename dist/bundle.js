(()=>{"use strict";var e,a,t,n,i,s=document.querySelector(".screen"),m=document.querySelectorAll(".level-button"),d=document.querySelector(".start-button"),c=[],l=!1,g=0;m.forEach((function(t){t.addEventListener("click",(function(){d.disabled=!1,e=Number(t.value),"1"===t.value&&(a=3,m[0].classList.add("level-button-active"),m[1].classList.remove("level-button-active"),m[2].classList.remove("level-button-active")),"2"===t.value&&(a=6,m[1].classList.add("level-button-active"),m[0].classList.remove("level-button-active"),m[2].classList.remove("level-button-active")),"3"===t.value&&(a=9,m[2].classList.add("level-button-active"),m[0].classList.remove("level-button-active"),m[1].classList.remove("level-button-active")),console.log(a)}))})),d.addEventListener("click",(function(){s.textContent="";var m=document.createElement("container");m.classList.add("container"),s.appendChild(m);var d=document.createElement("header");d.classList.add("header"),m.appendChild(d);var u=document.createElement("div");u.classList.add("timer"),d.appendChild(u);var p=document.createElement("p");p.classList.add("min"),p.textContent="min";var h=document.createElement("p");h.classList.add("sec"),h.textContent="sec";var v=document.createElement("p");v.classList.add("time"),v.textContent="00.00",u.appendChild(p),u.appendChild(h),u.appendChild(v);var j=document.createElement("button");j.classList.add("repeat-button"),j.textContent="Начать заново",d.appendChild(j);var b=document.createElement("div");b.classList.add("cards-field"),m.appendChild(b);var f,P=0,L=0;function C(){++P>=60&&(P=0,L++),v.textContent=(L>9?L:"0"+L)+"."+(P>9?P:"0"+P),E(),i=v.textContent}function E(){f=setTimeout(C,1e3)}setTimeout(E,5e3),j.addEventListener("click",(function(){window.location.reload()})),function(){var a=0,t=o.length;1===e&&(a=6),2===e&&(a=12),3===e&&(a=18);for(var n,i=0;i<a/2;){var s=(n=t,Math.floor(Math.random()*n));c.includes(o[s])||(c.push(o[s]),c.push(o[s]),i++)}c.sort((function(){return.5-Math.random()})),console.log(c)}();var k=document.createDocumentFragment();c.forEach((function(e){var a=function(e){var a=document.createElement("div");a.classList.add("card","flip"),a.setAttribute("data-name",e.name);var t=document.createElement("img");t.classList.add("front-face"),t.setAttribute("src",e.imagePath);var n=document.createElement("img");return n.classList.add("back-face"),n.setAttribute("src","./img/shirt.jpg"),a.appendChild(t),a.appendChild(n),a}(e);k.appendChild(a)})),b.appendChild(k),document.querySelectorAll(".card").forEach((function(e){e.classList.contains("flip")&&setTimeout((function(){e.classList.remove("flip")}),5e3),e.addEventListener("click",(function(){if(e.classList.add("flip"),!l)return l=!0,void(t=e);n=e,l=!1,t.dataset.name===n.dataset.name?(g++,console.log(g),g===a&&(clearTimeout(f),setTimeout((function(){r("./img/winImg.png","Вы выиграли!")}),300))):(clearTimeout(f),setTimeout((function(){r("./img/loseImg.png","Вы проиграли!")}),300))}))}))}));var o=[{name:"six-clubs",imagePath:"./img/6clubs.jpg"},{name:"seven-clubs",imagePath:"./img/7clubs.jpg"},{name:"eight-clubs",imagePath:"./img/8clubs.jpg"},{name:"nine-clubs",imagePath:"./img/9clubs.jpg"},{name:"ten-clubs",imagePath:"./img/10clubs.jpg"},{name:"jack-clubs",imagePath:"./img/jackClubs.jpg"},{name:"queen-clubs",imagePath:"./img/queenClubs.jpg"},{name:"king-clubs",imagePath:"./img/kingClubs.jpg"},{name:"ace-clubs",imagePath:"./img/aceClubs.jpg"},{name:"six-diamonds",imagePath:"./img/8diamonds.jpg"},{name:"seven-diamonds",imagePath:"./img/7diamonds.jpg"},{name:"eight-diamonds",imagePath:"./img/8diamonds.jpg"},{name:"nine-diamonds",imagePath:"./img/9diamonds.jpg"},{name:"ten-diamonds",imagePath:"./img/10diamonds.jpg"},{name:"jack-diamonds",imagePath:"./img/jackDiamonds.jpg"},{name:"queen-diamonds",imagePath:"./img/queenDiamonds.jpg"},{name:"king-diamonds",imagePath:"./img/kingDiamonds.jpg"},{name:"ace-diamonds",imagePath:"./img/aceDiamonds.jpg"},{name:"six-hearts",imagePath:"./img/6hearts.jpg"},{name:"seven-hearts",imagePath:"./img/7hearts.jpg"},{name:"eight-hearts",imagePath:"./img/8hearts.jpg"},{name:"nine-hearts",imagePath:"./img/9hearts.jpg"},{name:"ten-hearts",imagePath:"./img/10hearts.jpg"},{name:"jack-hearts",imagePath:"./img/jackHearts.jpg"},{name:"queen-hearts",imagePath:"./img/queenHearts.jpg"},{name:"king-hearts",imagePath:"./img/kingHearts.jpg"},{name:"ace-hearts",imagePath:"./img/aceHearts.jpg"},{name:"six-spades",imagePath:"./img/6spades.jpg"},{name:"seven-spades",imagePath:"./img/7spades.jpg"},{name:"eight-spades",imagePath:"./img/8spades.jpg"},{name:"nine-spades",imagePath:"./img/9spades.jpg"},{name:"ten-spades",imagePath:"./img/10spades.jpg"},{name:"jack-spades",imagePath:"./img/jackSpades.jpg"},{name:"queen-spades",imagePath:"./img/queenSpades.jpg"},{name:"king-spades",imagePath:"./img/kingSpades.jpg"},{name:"ace-spades",imagePath:"./img/aceSpades.jpg"}];function r(e,a){var t=document.createElement("div");t.classList.add("final-screen"),s.appendChild(t);var n=document.createElement("div");n.classList.add("difficulty-level"),t.appendChild(n);var m=document.createElement("img");m.setAttribute("src",e),m.classList.add("final-img"),n.appendChild(m);var d=document.createElement("h2");d.classList.add("final-title"),d.textContent=a,n.appendChild(d);var c=document.createElement("p");c.classList.add("elapsed-time"),c.textContent="Затраченное время:",n.appendChild(c);var l=document.createElement("h1");l.classList.add("final-time"),l.textContent=i,n.appendChild(l);var g=document.createElement("button");return g.classList.add("final-button"),g.textContent="Играть снова",n.appendChild(g),g.addEventListener("click",(function(){document.location.reload()})),t}})();