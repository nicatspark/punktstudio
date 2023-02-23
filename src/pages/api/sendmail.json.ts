import type { APIRoute } from 'astro'
import nodemailer from 'nodemailer'

const emailTo = import.meta.env.EMAIL
const emailToPass = import.meta.env.PASS

export const post: APIRoute = async ({ request }) => {
  // console.log('request', request)

  if (request.headers.get('Content-Type') === 'application/json') {
    const formData = await request.json()
    const name = formData.name
    const surname = formData.surname
    const email = formData.email
    const tel = formData.tel
    const subject = formData.subject
    const message = `${formData.message}
    ----------------------------------------------------------------------
    From: ${name} ${surname} • email: ${email} • tel: ${tel}
    `
    const html = `<div style="margin: 20px auto;font-family: Helvetica, Verdana, sans-serif">${message}</div>`

    // sendmail
    let mailTransporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: emailTo,
        pass: emailToPass,
      },
    })

    let mailDetails = {
      from: email,
      to: emailTo,
      subject: `${new URL(request.url).hostname}: ${subject}`,
      text: message,
      html,
    }

    console.log(
      '***************************** mailDetails',
      mailDetails,
      import.meta.env.EMAIL
    )
    let mailresult
    try {
      mailresult = await mailTransporter.sendMail(mailDetails)
    } catch (error) {
      console.log('******* Error: ', error)
    }
    console.log('Message sent: %s', mailresult?.messageId)
    // let mailresult = await mailTransporter.sendMail(mailDetails, (error, info) => {
    //   if (error) {
    //     return console.log('******* Error: ', error)
    //   }
    //   console.log('Message sent: %s', info.messageId)
    // })

    console.log('mailresult', mailresult)

    // return response
    return new Response(JSON.stringify(mailDetails), {
      status: 200,
    })
  }
  return new Response(null, { status: 400 }) // if not a json request
}
