var mypositions = [
    {id:0 , title:"Doggy",  description: "So we can both watch x-files"},
];

exports.findAll = function (req, res, next) {
    res.send(mypositions);
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(mypositions[id]);
};
