const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'thomashuynh927@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}, let me know how the app is.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'thomashuynh927@gmail.com',
        subject: 'Sorry to see you leave!',
        text: `I hope this isn't a total goodbye, ${name}, let us know if there's anything we can do.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}