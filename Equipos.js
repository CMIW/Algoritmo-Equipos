function clacProb(p,q,p1,p2){
	return p*p1 + q*p2;
}

function genTable0(m){
	var table = [];
	for(var i = 0; i < m; i++){
		var row = [];
		for(var j = 0; j < m; j++){
			var num;
			if(i === 0 && j > 0){
				num = 1.0000;
			}
			else{
				num = 0.0000;
			}
			row.push(num.toFixed(4));
		}
		table.push(row);
	}
	return table;
}

function equipo(table,p,q){
	for(var i = 1; i < table.length; i++){
		for(var j = 1; j < table.length; j++){
			table[i][j] = clacProb(p,q,table[i-1][j],table[i][j-1]).toFixed(4);
		}
	}
	return table;
}

function getArrayFormat(format,isFirstHome){
	var sol = [];
	for(var i = 0; i < format.length; i++){
		var value = 0;
		if(isFirstHome){
			if(i%2){
				value = 0;
			}
			else{
				value = 1;
			}
		}
		else{
				if(i%2){
					value = 1;
				}
				else{
					value = 0;
			}
		}
		for(var j = 0; j < format[i]; j++){
			sol.push(value);
		}
	}
	return sol;
}

function equipo2(table,format,ph,pr,qr,qh){
	for(var i = 1; i < table.length; i++){
		for(var j = 1; j < table.length; j++){
			var game = format.length - (i+j) - 1;
			if(format[game]){
				table[i][j] = clacProb(ph,qr,table[i-1][j],table[i][j-1]).toFixed(4);
			}
			else{
				table[i][j] = clacProb(ph,qr,table[i-1][j],table[i][j-1]).toFixed(4);
			}
		}
	}
	return table;
}

console.log(equipo(genTable0(5),0.55,0.45));
console.log(equipo2(genTable0(5),getArrayFormat([2,3,2],1),0.52,0.48,0.48,0.52));
