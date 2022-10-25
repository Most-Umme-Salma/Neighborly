const requestHandler = (req, res, next) =>{
    console.log("requestHandler working");
    next();
}