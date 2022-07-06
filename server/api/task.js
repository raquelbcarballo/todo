exports.readAll = (req, res, next) => {
    res.json({"1":"despertarme","2":"ducharme","3":"vestirme","4":"desayunar","5":"ir a trabajar"});
};

exports.create = async (req, res, next) => {
    try {
        // await req.load.quiz.addFan(tokenUserId);
        res.send(200);
    } catch (error) {
        next(error);
    }
};

exports.readOne = (req, res, next) => {
    res.json({"1":"despertarme"});
};


exports.delete = async (req, res, next) => {
    try {
        // await req.load.quiz.removeFan(tokenUserId);
        res.send(200);
    } catch (error) {
        next(error);
    }
};