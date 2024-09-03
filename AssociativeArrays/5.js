function schoolGrade(arr){
    let obj={};
    for (const person of arr) {
    let info=person.split(' ');
    let name=info.shift();
    let sum=0;
    for (const grade of info) {
     sum+=Number(grade);
        
    }
    let averageGrade=sum/ Number(info.length);
      if(!obj.hasOwnProperty(name)){
        obj[name]=averageGrade;
      }else{
        let curGrade=obj[name];
        let finalgrade=(curGrade+averageGrade)/2
        obj[name]=finalgrade;
      }
    }
    const objEntries= Object.entries(obj);
    objEntries.sort((a,b) => a[0].localeCompare(b[0]));
    
    for (const person of objEntries) {
        console.log(`${person[0]}: ${person[1].toFixed(2)}`)
    }

    
    }



schoolGrade(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
    )


