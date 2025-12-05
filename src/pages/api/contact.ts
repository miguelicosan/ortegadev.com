import type { APIRoute } from 'astro';

interface ContactData {
    name: string;
    email: string;
    type: string;
    message: string;
    lang: 'es' | 'en';
}

export const POST: APIRoute = async ({ request }) => {
    if (request.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const data: ContactData = await request.json();

        // Validar datos
        if (!data.name || !data.email || !data.message) {
            return new Response(
                JSON.stringify({ error: 'Missing required fields' }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        // Aquí puedes integrar con tu servicio de email preferido
        // (Resend, SendGrid, Mailgun, etc.)
        console.log('Contact form submission:', data);

        // Por ahora, retornamos éxito
        // TODO: Implementar envío de email real
        return new Response(
            JSON.stringify({
                success: true,
                message: data.lang === 'es' ? 'Mensaje enviado correctamente' : 'Message sent successfully',
            }),
            {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    } catch (error) {
        console.error('Error in contact form:', error);
        return new Response(
            JSON.stringify({ error: 'Internal server error' }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
};
