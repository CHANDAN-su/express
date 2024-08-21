const express = require("express");
const app = express();
const port = process.env.PortNumber || 3000;

// router method
// app.get("/", (request, response) => {
//     response.send("Server testing");
// });

// localhost:3000
// localhost:3000/users
// localhost:3000/products
// localhost:3000/cards

app.get("/", (req, res) => {
  res.status(200).send({ meg: "hello world" });
});

// app.get("/api/users", (req, res) => {
//   res.send([
//     { id: 1, username: "chandan", dispalyName: "stak" },
//     {id: 2, username: "ravi", dispalyName: "Lathi"},
//     {id: 3, username: "Tilak", dispalyName: "Pagal"}
// ]);
// });

// app.get("/api/product", (req, res) => {
//     res.send([{id:123, productName: "Mobile", price: 12.34}]);
// });


// dynamic router
// app.get("/api/users/:id", (req, res) => {
//     const a = req.params;
//     res.send(a);
// });


// router params
const mocUser = [
    { id: 1, username: "chandan", dispalyName: "stak" },
    {id: 2, username: "ravi", dispalyName: "Lathi"},
    {id: 3, username: "Tilak", dispalyName: "Pagal"}   
]

app.get("/api/user", (req, res) => {
    res.send(user);
});

app.get("/api/user/:id", (req, res) => {
    
    // client id ke jagh par nu number , decimal Number and text bhi likha sakte h usako pahle check karna parega
    const parseInt = Number.parseInt(req.params.id);
     // cliend ko batana h ki id galta h
    if(isNaN(parseInt)) return res.status(404).send({meg: "Bad request. Invalid user"});

     // user find karege find array methid se
    const findUser = mocUser.find((user) => user.id === parseInt);
    if(!findUser) return res.status(400).send({meg: "Bad request. Invalid user"});
    return res.status(200).send(findUser);

});


console.log("hii");

app.listen(port, () => {
    console.log(`Server run this port ${port}`);
  });