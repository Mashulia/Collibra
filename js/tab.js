let benefitsTablinks = document.querySelectorAll('.benefits-tablinks');
  let benefitsTabcontent = document.querySelectorAll('.benefits-tabcontent');
	for(let i =0;i<benefitsTablinks.length;i++) {
  	  benefitsTablinks[0].click();
  	   benefitsTablinks[i].onclick = () => {
        benefitsTablinks.forEach((e)  => { e.classList.remove('benefits-active') }); 
        benefitsTabcontent.forEach((e)  => { e.classList.remove('show') });
        benefitsTablinks[i].classList.add('benefits-active');
        benefitsTabcontent[i].classList.add('show');
     }
  }
   

  let partnersTab = document.querySelectorAll('.partners__logo-wrapper');
  let partnersTabcontent = document.querySelectorAll('.partners-tabcontent');
	for(let j =0;j<partnersTab.length;j++) {
  	  partnersTab[0].click();
  	   partnersTab[j].onclick = () => {
        partnersTab.forEach((e)  => { e.classList.remove('active') }); 
        partnersTabcontent.forEach((e)  => { e.classList.remove('show') });
        partnersTab[j].classList.add('active');
        partnersTabcontent[j].classList.add('show');
     }
   }