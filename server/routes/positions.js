var positions = [
    {id:0 , title:"Doggy",
     description: "So we can both watch x-files",category:"From Behind"},
    {id:1 , title:"Cowgirl",
     description: "Crop optional",category:"Woman on top"},
    {id:2 , title:"Wheelbarrow",
     description: "Only for the fit",category:"From Behind"},
    {id:3 , title:"Missionary",
     description: "For starfish",category:"Man on top"}
];

exports.findAll = function (req, res, next) {
    res.send(positions);
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(positions[id]);
};
