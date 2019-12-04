const url = require('url')


function multiplyHandler(req,res){
    const query =url.parse(req.url, true).query;
    
    console.log(query);
    
        
    res.end(`Num1 : ${query.num1}  \nNum2 : ${query.num2} \nSubtract = ${parseInt(query.num1)
        * parseInt(query.num2)}`)
    
    res.writeHeader(200, {'Content-Type': 'text/html'});
    
    
}




module.exports={
    "multiplyHandler":multiplyHandler}

