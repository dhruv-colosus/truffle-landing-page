"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";

import submitContactUsForm from "@/lib/serverAction";

type ContactFormState = {
    success?: boolean;
    formValues?: {
        name?: string;
        email?: string;
        message?: string;
    };
    formattedError?: {
        fieldErrors?: {
            name?: string;
            email?: string;
            message?: string;
        };
    };
};

export default function ContactForm() {
    const [state, formAction, pending] = useActionState<ContactFormState>(submitContactUsForm, { success: false, formValues: { name: "", email: "", message: "" }, formattedError: { fieldErrors: {} } })

    return (
        <form action={formAction} className="space-y-4 w-[40%] max-md:w-full">
            {state.success && (
                <p className="bg-truffle-mint/10 font-body font-bold rounded-md p-4 text-truffle-mint">Thank you! Your message has been sent successfully. We’ll get back to you soon.</p>
            )}

            <div className="flex items-center gap-4 justify-between">
                <div className="w-full relative">
                    {state.formattedError?.fieldErrors?.name && <span className="text-truffle-red text-sm font-body font-bold ml-2 absolute -top-7">asdfasdf{state.formattedError?.fieldErrors.name}</span>}
                    <Input defaultValue={state.formValues?.name} placeholder="Name" type="text" name="name" required className="bg-truffle-mint rounded-full text-black border-2 border-truffle-green-dark shadow-[0_4px_0px_0px] shadow-truffle-green-dark" />
                </div>

                <div className="w-full relative">
                    {state.formattedError?.fieldErrors?.email && <span className="text-truffle-red text-sm font-body font-bold ml-2 absolute -top-7">{state.formattedError?.fieldErrors.email}</span>}
                    <Input defaultValue={state.formValues?.email} placeholder="Email" type="email" name="email" required className="bg-truffle-mint rounded-full text-black border-2 border-truffle-green-dark shadow-[0_4px_0px_0px] shadow-truffle-green-dark" />
                </div>
            </div>

            <div>
                {state.formattedError?.fieldErrors?.message && <span className="text-truffle-red text-sm font-body font-bold ml-2 mb-2 inline-block">{state.formattedError?.fieldErrors.message}</span>}
                <Textarea defaultValue={state.formValues?.message} placeholder="Message" name="message" rows={5} required className="h-[150px] rounded-3xl bg-truffle-mint text-black border-2 border-truffle-green-dark shadow-[0_4px_0px_0px] shadow-truffle-green-dark" />
            </div>

            <Button disabled={pending} type="submit" variant='white' className="w-full font-display font-bold">
                {pending ? 'Submitting...' : 'Submit'}
            </Button>
        </form>
    );
}
