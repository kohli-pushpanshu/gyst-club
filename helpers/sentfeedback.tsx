import { resend } from "../lib/resend"
import { ApiResponse } from "../types/apiResponse";
import FeedbackEmail from "../emails/sendfeedbackmail";


export async function sendfeedbackEmail(
    email: string,
    name: string,
    mobile: string,
    message: string,
): Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: 'noreply@codewithkohli.tech',
            to: "pushpanshugujjar@gmail.com",
            subject: 'feedback | Gystclub',
            react: FeedbackEmail(email, name, mobile, message),
        });
        return{success:true, message:'verification email send successfully'}
    } catch (emailError) {
        console.error("Error sending verification code", emailError);
        return{success:false, message:'Failed to send email verification'}

    }
}