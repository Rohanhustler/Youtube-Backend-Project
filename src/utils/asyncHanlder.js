const asyncHanlder = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((error) => next(err));
    }
}
/*
function asyncHandler(fn) {
    return async function(req, res, next) {
        try{
            await fn(req, res, next);
        }
        catch(error) {
            res.status(error.code || 500).json({
                success: false,
                message: error.message
            })
        }
    }
}
*/

export {asyncHanlder};