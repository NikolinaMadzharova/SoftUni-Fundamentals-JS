function towns(arr){
    for (const townStr of arr) {
        let tokens = townStr.split(' | ');
        let town= tokens[0];
        let latitude=Number(tokens[1]).toFixed(2);
        let longitude= Number(tokens[2]).toFixed(2);
        let obj={town,latitude,longitude
        }
        console.log(obj);

        
    }


}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
    );