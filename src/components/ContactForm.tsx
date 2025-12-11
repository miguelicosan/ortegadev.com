import React, { useState } from 'react';
import './ContactForm.scss';

interface ContactFormProps {
    lang: 'es' | 'en';
    t: any;
}

export default function ContactForm({ lang, t }: ContactFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        type: 'web',
        message: '',
        privacy: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [isSelectOpen, setIsSelectOpen] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData((prev) => ({
                ...prev,
                [name]: checked,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message || !formData.privacy) {
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus('idle'), 3000);
            return;
        }

        setIsSubmitting(true);

        try {
            console.log('📤 Enviando:', formData);

            // Usar Formspree para enviar email
            const formspreeEndpoint = 'https://formspree.io/f/xdkqdprg';
            
            const response = await fetch(formspreeEndpoint, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    type: formData.type,
                    message: formData.message,
                    lang: lang,
                }),
            });

            console.log('Response status:', response.status);
            const data = await response.json();
            console.log('Response data:', data);

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    type: 'web',
                    message: '',
                    privacy: false,
                });
                console.log('✅ Enviado exitosamente');
                setTimeout(() => setSubmitStatus('idle'), 5000);
            } else {
                console.error('Request failed:', data);
                setSubmitStatus('error');
                setTimeout(() => setSubmitStatus('idle'), 3000);
            }
        } catch (error) {
            console.error('Error completo:', error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus('idle'), 3000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const form = t.contact.form;

    const typeOptions = [
        { value: 'recruiter', label: form.typeOptions.recruiter },
        { value: 'web', label: form.typeOptions.web },
        { value: 'ai', label: form.typeOptions.ai },
        { value: 'other', label: form.typeOptions.other },
    ];

    const handleSelectOption = (value: string) => {
        setFormData((prev) => ({ ...prev, type: value }));
        setIsSelectOpen(false);
    };

    const selectedOption = typeOptions.find(opt => opt.value === formData.type);

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">{form.name}</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={form.namePlaceholder}
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">{form.email}</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={form.emailPlaceholder}
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="type">{form.type}</label>
                <div className="custom-select">
                    <button
                        type="button"
                        className="select-trigger"
                        onClick={() => setIsSelectOpen(!isSelectOpen)}
                        onBlur={() => setTimeout(() => setIsSelectOpen(false), 200)}
                    >
                        <span>{selectedOption?.label}</span>
                        <svg 
                            width="16" 
                            height="16" 
                            viewBox="0 0 16 16" 
                            fill="currentColor"
                            style={{ transform: isSelectOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
                        >
                            <path d="M8 11L3 6h10z"/>
                        </svg>
                    </button>
                    {isSelectOpen && (
                        <div className="select-options">
                            {typeOptions.map((option) => (
                                <button
                                    key={option.value}
                                    type="button"
                                    className={`select-option ${formData.type === option.value ? 'selected' : ''}`}
                                    onClick={() => handleSelectOption(option.value)}
                                >
                                    {option.label}
                                    {formData.type === option.value && (
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                            <path d="M13.5 3.5L6 11l-3.5-3.5L1 9l5 5 9-9-1.5-1.5z"/>
                                        </svg>
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="message">{form.message}</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder={form.messagePlaceholder}
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                ></textarea>
            </div>

            <div className="form-group form-checkbox">
                <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="privacy">
                    {form.privacy}{' '}
                    <a 
                        href={`/${lang === 'es' ? 'legal/privacidad' : 'en/legal/privacy'}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {form.privacyLink}
                    </a>
                </label>
            </div>

            <button
                type="submit"
                className="btn btn-primary btn-submit"
                disabled={isSubmitting}
            >
                {isSubmitting ? form.sending : form.submit}
            </button>

            {submitStatus === 'success' && (
                <div className="form-message success">{form.success}</div>
            )}
            {submitStatus === 'error' && (
                <div className="form-message error">{form.error}</div>
            )}
        </form>
    );
}
