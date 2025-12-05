interface ContactData {
    name: string;
    email: string;
    type: string;
    message: string;
    lang: 'es' | 'en';
    privacy: boolean;
}

export async function POST(context: any) {
    console.log('🔵 Contact endpoint hit');
    console.log('Request:', {
        method: context.request.method,
        url: context.request.url,
        headers: Array.from(context.request.headers.entries())
    });

    try {
        let bodyData: ContactData;

        // Intentar leer como JSON
        try {
            // En modo desarrollo de Astro, el body puede llegar diferente
            const rawBody = await context.request.text();
            console.log('📝 Raw body received, length:', rawBody.length, 'First chars:', rawBody.slice(0, 50));
            
            if (!rawBody || rawBody.trim() === '') {
                // Si está vacío, intentar obtenerlo de otra forma
                console.warn('⚠️ Body is empty, trying alternative method');
                
                // Esto es un hack para Astro - a veces necesita un reinicio
                return new Response(
                    JSON.stringify({
                        error: 'Request body is empty',
                        tip: 'Try refreshing the page or restarting the dev server'
                    }),
                    { 
                        status: 400,
                        headers: { 'Content-Type': 'application/json' }
                    }
                );
            }

            bodyData = JSON.parse(rawBody);
            console.log('✅ Body parsed successfully');

        } catch (e) {
            console.error('❌ Error parsing body:', e);
            return new Response(
                JSON.stringify({
                    error: 'Invalid JSON',
                    details: e instanceof Error ? e.message : 'Unknown error'
                }),
                { 
                    status: 400,
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        }

        // Validar campos
        const { name, email, message, type, lang } = bodyData;

        if (!name || !email || !message) {
            console.warn('⚠️ Missing fields:', { name, email, message });
            return new Response(
                JSON.stringify({ error: 'Missing required fields' }),
                { 
                    status: 400,
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        }

        console.log('✅ Submission valid:', { name, email, type, lang });

        return new Response(
            JSON.stringify({
                success: true,
                message: lang === 'es'
                    ? '✅ Gracias por tu mensaje. Nos pondremos en contacto pronto.'
                    : '✅ Thank you for your message. We will contact you soon.'
            }),
            { 
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            }
        );

    } catch (error) {
        console.error('❌ Fatal error:', error);
        return new Response(
            JSON.stringify({ 
                error: 'Server error',
                message: error instanceof Error ? error.message : 'Unknown'
            }),
            { 
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    }
}
