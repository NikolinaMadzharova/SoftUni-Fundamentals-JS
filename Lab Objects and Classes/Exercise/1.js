function employees(arr){
    let result=[];
    for(i=0; i<arr.length; i++){
        let name= arr[i];
        let num=name.length;
        let obj={
          Name: name,
          PesonalNum: num

        }
        result.push(obj);
    }

    for (const employee of result) {
        console.log(`Name: ${employee.Name} -- Personal Number: ${employee.PesonalNum}`)
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );