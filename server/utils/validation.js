
// a simple string validation function, return true if the param is string else false

var isRealString = (str)=>{
    return typeof str === 'string' && str.trim().length > 0 ;
};

module.exports ={isRealString};