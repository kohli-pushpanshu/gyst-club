import { PrismaClient } from "@prisma/client";
import { sendmail } from "../../../../helpers/sendmail";


const prisma = new PrismaClient();

export async function POST(request: Request){
    try {
        const {email, name, mobile, gender, Age, course, college} = await request.json();
        const alreadyRegister = await prisma.registration.findUnique({
            where:{
                email,
            }
        })
        const alreadyRegisterwithMobile = await prisma.registration.findUnique({
            where:{
                mobile,
            }
        })
        if(alreadyRegister) {
            return Response.json({
                success: false,
                message: "You have already registered with this email."
            }, {status: 400});
        }
        if(alreadyRegisterwithMobile) {
            return Response.json({
                success: false,
                message: "You have already registered with this mobile number."
            }, {status: 400});
        }

        const user = await prisma.join.create({
            data:{ 
                email,
                name, 
                mobile,
                gender,
                Age,
                Course: course,
                college,
            }
        })

        if(!user) {
            return Response.json({
                success: false,
                message: "Error in registration. Please try again."
            }, {status: 500});
        }

        sendmail(email);

        return Response.json({
            success: true,
            message: "Registration successful! Please check your email for details."
        }, {status: 200});
    } catch (error) {
        console.error("Error during registration:", error);
        return Response.json({
            success: false,
            message: "An error occurred during registration. Please try again later."
        }, {status: 500});
    }
}