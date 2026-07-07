const getTodos = (req, res) => {
    res.json({
        success: true,
        message: "Fetching all todos",
        data: []
    });
};

module.exports = {
    getTodos
};