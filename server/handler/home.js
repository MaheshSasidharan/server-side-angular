function index(req, res) {
    res.json({
        success: true,
        message: 'Authorization success'
    });
}

module.exports = index;