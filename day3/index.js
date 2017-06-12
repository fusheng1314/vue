var lis = document.querySelectorAll('li'),
	btn = document.querySelector('h3');

	// console.log(btn);
	
	for(var i in lis){
		lis[i].onclick=function(){
			// alert('1')
			var bgs = this.className;
			var bg = document.querySelectorAll('.bg');

			if(bgs.indexOf('bg')!=-1){
				this.classList.remove('bg')
			}else{
				if(bg.length<1){
					this.classList.add('bg')
				}else{
					for(var i in lis){
						lis[i].className='';
						}
					this.classList.remove('bg')

				}

			}
		}
	}

btn.onclick=function(){
	for(var i in lis){
		lis[i].className='';
	}
}