function maior(a){
    let max = a.reduce(function(a,b){
        return Math.max(a,b)
    })
    return max
}
function menor(a){
    let min = a.reduce(function(a,b){
        return Math.min(a,b);
    })
    return min
   
}

module.exports = {maior,menor};

