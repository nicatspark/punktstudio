import type { APIRoute } from 'astro'
import nodemailer from 'nodemailer'

export const post: APIRoute = async ({ request }) => {
  // console.log('request', request)

  if (request.headers.get('Content-Type') === 'application/json') {
    const formData = await request.json()
    const name = formData.name
    const surname = formData.surname
    const email = formData.email
    const tel = formData.tel
    const subject = formData.subject
    const message = formData.message

    // sendmail
    let mailTransporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: import.meta.env.EMAIL,
        pass: import.meta.env.PASS,
      },
    })

    let mailDetails = {
      from: email,
      to: import.meta.env.EMAIL,
      subject: `${new URL(request.url).hostname}: ${subject}`,
      text: `${message}
----------------------------------------------------------------------
From: ${name} ${surname} • email: ${email} • tel: ${tel}
`,
    }
    console.log(
      '***************************** mailDetails',
      mailDetails,
      import.meta.env.EMAIL
    )
    // mailTransporter.sendMail(mailDetails, (error, info) => {
    //   if (error) {
    //     return console.log(error)
    //   }
    //   console.log('Message sent: %s', info.messageId)
    // })

    // return response
    return new Response(
      JSON.stringify({
        message: 'Your name was: ' + name,
        email: import.meta.env.EMAIL,
      }),
      {
        status: 200,
      }
    )
  }
  return new Response(null, { status: 400 })
}
