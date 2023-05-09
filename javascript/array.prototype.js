const arr=[1,2,3,4,5]


Array.prototype.calculate=function (){
    
    for ( i =0;i<this.length;i++){//here this reffers  to array

        console.log(this[i]*this[i])
    }
}

arr.calculate()//1.4.9,16,25




