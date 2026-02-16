import { ContactForm } from '../utility/contact-form';

export function ContactFormSection() {
    return (
        <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto bg-white backdrop-blur-md border border-gray-100 rounded-2xl p-8 shadow-xl">
                    <h2 className="text-3xl font-poppins font-bold text-center mb-2 text-foreground">
                        Get Your Free Quote Today
                    </h2>
                    <p className="text-center text-gray-600 mb-8">
                        Start your journey towards energy independence. Fill out the form below and our experts will get back to you.
                    </p>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
