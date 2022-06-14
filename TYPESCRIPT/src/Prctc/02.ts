function compareBy(propname:any):any{
    return function(a:any,b:any){
        let x=a[propname];
        let y=b[propname];
        
        if(x>y){return 1;}
        else if(x<y){return -1;}
        else{return 0;}
    };
}

let product=[
    { name: 'Iphone' , price: 900 },
    { name: 'Samsung', price: 1200 },
    { name: 'Sony'   , price: 700 }
]

product.sort(compareBy('name'));
console.log(product);