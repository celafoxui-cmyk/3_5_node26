    const express = require('express');
    const conn = require('./conn');
    const app = express();
    app.use(express.static('public'));
    app.use(express.urlencoded({ extended: true }));

    app.set('view engine', 'ejs');
    app.get('/', (req, res) => {
        res.render('index', {

        });

    });

    app.post('/registere', (req, res) => {
        const ln = req.body.ln;
        const fn = req.body.fn;
        const age = req.body.age;
        const add = req.body.add;

        constinsert = `INSERT ONTO tbl_student VALUE('0','${ln}','${fn}','${age}','${add}')`

        conn.query(useInsertionEffect, (err) => {
            if (err) throw err;
            res.send(
                `<script>
                alert('Data Inserted');
                location.href='/';
                <script>`
            )
        })

        console.log(ln)
    });


    app.listen(2000, () => {
        console.log("server running on port 2000")
    });