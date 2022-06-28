const exp = require('express')
const quote = exp.Router();
const expressAsyncHandler = require("express-async-handler")
quote.use(exp.json())

quote.get('/getquote', expressAsyncHandler(async(request, response) => {
    let quoteCollectionObj = request.server.get("quoteCollectionObj");

    let randomId = Math.floor(Math.random() * 30) + 1;
    randomId = 1

    let quotecollection = await quoteCollectionObj.findOne({id:randomId})

    response.send({
        message: "quote generated",
        payload: quotecollection
    })
}));

module.exports = quote;