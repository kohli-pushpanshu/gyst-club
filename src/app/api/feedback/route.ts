import { PrismaClient } from "@prisma/client";
import { sendfeedbackEmail } from "../../../../helpers/sentfeedback";


const prisma = new PrismaClient();
export async function POST(request: Request) {
    
    try {
        const { name, email, mobile, message } = await request.json();

        if (!name || !email || !mobile || !message) {
            return Response.json({
                success: false,
                message: "All fields are required."
            }, { status: 400 });
        }

        
        await prisma.feedback.create({
            data: {
                name,
                email,
                mobile,
                message
            }
        });

        
        const emailResponse = await sendfeedbackEmail(name, email, mobile, message);
        
        if (!emailResponse) {
            return Response.json({
                success: false,
                message: "Error in sending feedback email."
            }, { status: 500 });
        }
        if (emailResponse){
            return Response.json({
                success: true,
                message: "Feedback email sent successfully."
            }, { status: 200 });
        }

        return Response.json({
            success: true,
            message: "Feedback submitted successfully."
        }, { status: 200 });

    } catch (error) {
        console.error("Error in feedback submission:", error);
        return Response.json({
            success: false,
            message: "An error occurred while submitting feedback."
        }, { status: 500 });
    }
}