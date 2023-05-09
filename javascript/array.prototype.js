const arr=[1,2,3,4,5]


Array.prototype.calculate=function (){
    for ( i =0;i<this.length;i++){
        console.log(this[i]*this[i])
    }
}

arr.calculate()
