const express = require('express')
const router = express.Router()

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.get('/:email/:uname/:saleid', (req, res) => {
    if (req.params.saleid === 'winter2019') {
        const msg = {
            to: req.params.email,
            from: 'raheem.shaik@fortunapix.com',
            templateId: 'd-a393c13ee20f43cc9412262f7b35154f',
            dynamic_template_data: {
                uname: req.params.uname
            },
        };
        sgMail
            .send(msg)
            .then(() => {
                res.json({ mailSent: true })
            })
            .catch(error => {
                //Log friendly error
                console.error(error.toString());

                //Extract error msg
                const { message, code, response } = error;

                //Extract response msg
                const { headers, body } = response;

                res.json({ mailSent: false, error: message })
            });
    }
})

module.exports = router
