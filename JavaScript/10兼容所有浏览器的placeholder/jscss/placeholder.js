!function(window, document, undefined) {
	var inputs,
	    attribute,span,link,
	    ipt = document.createElement('input');
	    
	if ('placeholder' in ipt) {
        return;
    }
	
	link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'jscss/placeholder.css';
    document.getElementsByTagName('head')[0].appendChild(link);
	    


    inputs = document.getElementsByTagName('input');

	for(var i = 0;i<inputs.length;i++) {
		
        attribute=inputs[i].getAttribute('placeholder');
        
		if(inputs[i].type!='text' || attribute==null) {
			continue;
		};

		inputs[i].outerHTML = '<div class="outerDiv">'+inputs[i].outerHTML+'</div>';
		inputs[i].outerHTML += '<span></span>';
		span = inputs[i].parentNode.getElementsByTagName('span');
		span[0].innerHTML = attribute;


		inputs[i].onkeyup = function() {
			if (this.value == ''){
			    this.parentNode.getElementsByTagName('span')[0].style.display='block';
			} else {
			    this.parentNode.getElementsByTagName('span')[0].style.display='none';
			}
		}
	}

}(window, document);