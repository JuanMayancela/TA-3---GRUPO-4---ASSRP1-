let ini = (req, res) => {
    res.send("Inicio de API en ubuntu");
};

let initStore  = (req, res) => {
    res.send("Esta es la tienda");
};

module.exports = {
    ini,
    initStore
}