var categories = [
    {id:0 , title:"From Behind"},
    {id:1 , title:"Man on Top"},
    {id:2 , title:"Seated"},
    {id:3 , title:"Side by Side"},
    {id:4 , title:"Standing"},
    {id:5 , title:"Woman on Top"}
];

exports.findAll = function (req, res, next) {
    res.send(categories);
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(categories[id]);
};
