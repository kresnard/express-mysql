const logRequest = (req, res, next) => {
    console.log("Path requested at: ", req.path);
    next();
}

export default logRequest;