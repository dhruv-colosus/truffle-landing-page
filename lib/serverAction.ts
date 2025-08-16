"use server"
import * as z from "zod"


type ContactFormState = {
    success: boolean;
    formValues: {
        name: string;
        email: string;
        message: string;
    };
    formattedError: {
        fieldErrors: Record<string, string[]>;
    };
};


const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email("Invalid email"),
    message: z.string().min(1, "Message is required"),
})


export default async function submitContactUsForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
    const formValues = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        message: formData.get('message') as string
    }

    const data = formSchema.safeParse(formValues)

    if (!data.success) {
        const formattedError = z.flattenError(data.error)

        return {
            success: false,
            formattedError,
            formValues
        }
    }

    // DO A POST REQUEST HERE
    // const response = await fetch("https://api.trufflehomes.com/contact-us-form/", { method: 'POST',})
    // const status = await response.json()

    return {
        success: true,
        formValues: { name: "", email: "", message: "" },
        formattedError: { fieldErrors: {}}
    }
}

