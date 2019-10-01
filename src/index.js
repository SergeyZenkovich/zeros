 module.exports = function zeros(expression) {
  var arr = expression.split('*');
  var one = [];
  var two = [];

  for(var i = 0; i<arr.length; i++){
  	if(arr[i].slice(arr[i].length-2) == '!!'){
  		two.push(arr[i])
  	}
  	else{
  		one.push(arr[i])
  	}
  }
  var xone = one.map(x=>+(x.slice(0,x.length-1)));
  var xtwo = two.map(x=>+(x.slice(0,x.length-2)));

  var result =0;
  var result2=0;
  	if (xtwo.length == 0){
  		result = xone.reduce(function(res, current) {
  			res += Math.floor(current/5);
  			if (current>=25){
  				res += Math.floor(current/25);
  			}
  			if (current>=100){
  				res += Math.floor(current/100);
  			}
  			return res;
  		},0 );
  	}
  	else if (xone.length == 0){
  		if(xtwo.every(function(x){return x%2 == 0})){

  			result = xtwo.reduce(function(res, current) {
  			res += Math.floor(current/10);
  				if (current >=50){
  				res += Math.floor(current/50);
  					if (current >=100){
  				res -= Math.floor(current/100);
  			}	
  			}	
  			return res;
  		},0 );
  		}

  		else if (xtwo.every(function(x){return x%2 != 0})){
  			return result;
  		}

  		else{
  			result = xtwo.reduce(function(res, current) {
  				if (current%2==0){
  					res += Math.floor(current/10);
  					if (current >=50){
  				res += Math.floor(current/50);
  					if (current >=100){
  				res -= Math.floor(current/100);
  			}	
  			}	
  				}
  			
  				else{
  					res += Math.floor(current/5);
  					if (current>10){
					res-= Math.floor(current/10);
							}
  					if (current>=25){
  						res += Math.floor(current/25);
  						}
  				}
  			return res;
  		},0 );
  		}
  	}
  	else{
  		result = xone.reduce(function(res, current) {
  			res += Math.floor(current/5);
  			if (current>=25){
  				res += Math.floor(current/25);
  			}
  			if (current>=100){
  				res += Math.floor(current/100);
  			}
  			return res;
  		},0 );
  		result2 = xtwo.reduce(function(res, current) {
  				if (current%2==0){
  					res += Math.floor(current/10);
  					if (current >=50){
  				res += Math.floor(current/50);
  					if (current >=100){
  				res -= Math.floor(current/100);
  			}	
  			}	
  				}
  			
  				else{
  					res += Math.floor(current/5);
  					if (current>10){
					res-= Math.floor(current/10);
							}
  					if (current>=25){
  						res += Math.floor(current/25);
  						}
  					if (current>50){
						res-=Math.floor(current/50);
							}
  				}
  			return res;
  		},0 );
  		result = result+ result2;
  		}
  return result;
}


