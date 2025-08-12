import { sendVerificationEmail } from "../../../../helpers/sendEmail";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export async function POST(request: Request){
    try {
        const {email, name, mobile, gender, Age, course} = await request.json();

        const alreadyRegister = await prisma.registration.findUnique({
            where:{
                email,
            }
        })
        const verifyCode = Math.floor(100000+ Math.random()*900000).toString()
        const expiryDate= new Date()
        expiryDate.setHours(expiryDate.getHours()+1)
        if(alreadyRegister){
            return Response.json({
                success:false,
                message:"you have already registered"
            }, {status:400})
        }

        await prisma.registration.create({
            data:{
                email,
                name, 
                mobile,
                gender,
                Age,
                verifyToken: verifyCode,
                verifyTokenExpiry: expiryDate,
                Course:course,
                screenshotlink:"",
            }
        })

        const emailResponse = await sendVerificationEmail(
            email,
            name,
            verifyCode
        )

        if(!emailResponse){
            return Response.json({
                success:false,
                message:"Error in sending email"
            },{status:401})
        }

        return Response.json({
            success:true,
            message:"Verify your email..."
        },{status:200})

    } catch (error) {
        console.log(error)
        return Response.json({
            status:404,
            message:"Error in registering"
        },{status:404})
    }
}