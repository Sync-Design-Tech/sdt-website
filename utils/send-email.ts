import type { FormData } from '@/components/contactForm/form';

export async function sendEmail(data: FormData): Promise<void> {
    const apiEndpoint = `/api/email`;

    fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
        // params: JSON.stringify({ type: type }),
    })
        .then((res) => res.json())
        .then((response) => {
            // console.log(response);
        })
        .catch((err) => {
            // console.log(err);
        });
}