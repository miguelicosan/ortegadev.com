// API endpoint alternativo para contacto
import type { APIRoute } from 'astro';

interface ContactForm {
    name: string;
    email: string;
    type: string;
    message: string;
    lang: string;
    privacy: boolean;
}

export const POST: APIRoute = async (context) => {
    try {
        console.log('🟢 submit-contact endpoint called');
        
        const request = context.request;
        const contentType = request.headers.get('content-type');
        console.log('Content-Type header:', contentType);

        let formData: ContactForm;

        try {
            const body = await request.text();
            console.log('Body received, length:', body.length);
            
            if (!body || body.trim() === '') {
                console.error('Empty body');
                return new Response(
                    JSON.stringify({ success: false, error: 'Empty body' }),
                    { status: 400, headers: { 'Content-Type': 'application/json' } }
                );
            }

            // Parsear como JSON sin importar el header (bug de Astro)
            try {
                formData = JSON.parse(body);
                console.log('✅ Parsed JSON:', formData);
            } catch (parseErr) {
                console.error('Parse error:', parseErr);
                return new Response(
                    JSON.stringify({ success: false, error: 'Invalid JSON format' }),
                    { status: 400, headers: { 'Content-Type': 'application/json' } }
                );
            }

        } catch (readErr) {
            console.error('Error reading body:', readErr);
            return new Response(
                JSON.stringify({ success: false, error: 'Failed to read request body' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Validate
        if (!formData.name?.trim() || !formData.email?.trim() || !formData.message?.trim()) {
            console.warn('Missing fields:', { 
                name: !!formData.name?.trim(),
                email: !!formData.email?.trim(),
                message: !!formData.message?.trim()
            });
            return new Response(
                JSON.stringify({ success: false, error: 'Missing required fields' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        console.log('✅ Valid contact form:', {
            name: formData.name,
            email: formData.email,
            type: formData.type,
            lang: formData.lang,
            timestamp: new Date().toISOString()
        });

        // TODO: Send email with Resend, SendGrid, Mailgun, etc.
        // Example:
        // const result = await resend.emails.send({
        //   from: 'noreply@ortegadev.com',
        //   to: 'hola@ortegadev.com',
        //   replyTo: formData.email,
        //   subject: `Nuevo contacto de ${formData.name}`,
        //   html: `<h3>${formData.name}</h3><p><strong>Email:</strong> ${formData.email}</p><p><strong>Tipo:</strong> ${formData.type}</p><p><strong>Mensaje:</strong></p><p>${formData.message}</p>`
        // });

        return new Response(
            JSON.stringify({
                success: true,
                message: formData.lang === 'es'
                    ? '✅ Gracias por tu mensaje. Te contactaremos pronto.'
                    : '✅ Thank you for your message. We will contact you soon.'
            }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );

    } catch (error) {
        console.error('❌ Unhandled error:', error);
        return new Response(
            JSON.stringify({ 
                success: false, 
                error: error instanceof Error ? error.message : 'Server error'
            }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
};
