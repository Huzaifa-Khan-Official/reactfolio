import { emailJSConfig } from "../Configuration/Configuration";
import { contact } from "../Constants/Constants";
import emailjs from "emailjs-com";

const sendEmail = async (data) => {
    const emailData = {
        to_email: contact.email,
        from_email: data.email,
        name: data.name,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
        time: data.time,
    };

    emailjs.send(
        emailJSConfig.serviceId,
        emailJSConfig.templateId,
        emailData,
        emailJSConfig.userId
    )
        .then(
            (response) => {
                console.log("Email sent successfully!", response.status);
            }
        )
        .catch((error) => {
            throw new Error("Failed to send email. Try again later.")
        });
};

export default sendEmail;