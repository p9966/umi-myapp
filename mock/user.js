export default {
    "GET /users": {
        name: "simple",
        age: 28
    },

    "Post /users/login": (req, res) => {
        console.log(req.body)
        if (req.body.uid === "simple" && req.body.pwd === "111") {
            res.send({
                ok: true
            })
        }
        else {
            res.send({
                ok: false
            })
        }
    }
}