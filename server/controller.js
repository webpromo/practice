
module.exports = {
    getProducts:(req,res) => {
        const db = req.app.get('db');
        db.getProducts()
          //  .then(prods => console.log(prods))  for testing
        .then(prods => res.status(200),send(prods))
        .catch(err => res.status(500),send("server error"));
    },
    updateProduct:(req,res) => {
        const db = req.app.get('db');
        db.updateProduct([req.params.id])
              .then(prods => console.log(prods));    // for testing
        
    }
};