function printNums (a) {
    for (let i = 1; i <= a; i++) {
        switch(i) {
            case 5: {
                console.log('пять');
                break;
            }
            case 13: {
                console.log('тринадцать');
                break;
            }
            case 22: {
                console.log('двадцать два')
                break;
            }
            case 35: {
                console.log('тридцать пять')
                break;
            }
            case 98: {
                console.log('девяносто восемь')
            }
            default: console.log(i);
        }
    }

}
