module.exports = {
    index: function(req, res) {
        if (!req.session.me) {
            return res.view('login');
        } else {
            return res.view('dashboard');
        }
    }
}