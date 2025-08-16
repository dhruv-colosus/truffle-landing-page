"use server"
import * as z from "zod"


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


const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email("Invalid email"),
    message: z.string().min(1, "Message is required"),
})


export default async function submitContactUsForm(_state: ContactFormState, formData: FormData) {
    const formValues = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    }

    const data = formSchema.safeParse(formValues)

    if (!data.success) {
        const formattedError = z.flattenError(data.error)

        return { formattedError, formValues }
    }

    // DO A POST REQUEST HERE
    // const response = await fetch("https://api.trufflehomes.com/contact-us-form/", { method: 'POST' })
    // const status = await response.json()

    return data
}

