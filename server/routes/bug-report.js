export default defineEventHandler(async (event)=>{
    const body = await readBody(event);
    const { subject, url, text } = body;
    const { sendMail } = useNodeMailer()
    const context = `
        <p style="margin-bottom:10px">Path:<a href="${url}"> ${url}</a></p><br>
        <p style="color:#555">${text}</p>
    `;
    if (process.env.NODE_ENV === 'production') {
        await sendMail({ subject, html:context, to:useRuntimeConfig().admin });
    }
    return { state:200 }
})