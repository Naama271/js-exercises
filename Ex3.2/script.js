

arr = [[5,0],[8,3],[2,2]];

poepleOnBus(arr);

function poepleOnBus(arr){
    let sumUp = arr[0][0];
    let sumDown = 0;

    for (let i = 1; i < arr.length; i++) {
       sumUp += arr[i][0];
       sumDown += arr[i][1];

    }

    return sumUp-sumDown;
}


