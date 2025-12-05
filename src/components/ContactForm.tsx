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
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    lang,
                }),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    type: 'web',
                    message: '',
                    privacy: false,
                });
                setTimeout(() => setSubmitStatus('idle'), 5000);
            } else {
                setSubmitStatus('error');
                setTimeout(() => setSubmitStatus('idle'), 3000);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus('idle'), 3000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const form = t.contact.form;

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
                <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                >
                    <option value="recruiter">{form.typeOptions.recruiter}</option>
                    <option value="web">{form.typeOptions.web}</option>
                    <option value="ai">{form.typeOptions.ai}</option>
                    <option value="other">{form.typeOptions.other}</option>
                </select>
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
