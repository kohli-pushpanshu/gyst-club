import { prisma } from "../../../../lib/prisma";

export async function POST(request: Request){
    try {
        
        const {email, code} = await request.json()

       const decodedUsername = decodeURIComponent(email)

       const user = await prisma.registration.findUnique({where:{name:decodedUsername}})

       if (!user) {
        return Response.json({
            success:false,
            message: "User not found"
        },{status:500})
       }

       const isCodeValid = user.verifyToken === code
       const isCodeNotExpired = user.verifyTokenExpiry && new Date(user.verifyTokenExpiry) > new Date()
      

       if (isCodeValid && isCodeNotExpired) {
            user.isVerified = true
            await prisma.registration.update({
                where:{
                    email,
            },
            data:{
                isVerified:true
            }
        })
       }else if(!isCodeNotExpired){
            return Response.json({
                success:false,
                message: "verification code has expired please signup again to get a new code "
            },{status:400})
       }else{
            return Response.json({
                success:false,
                message: "incorrect verification code"
            },{status:400})
       }


       return Response.json({
            success:true,
            message: "Account Verified successfully"
        },{status:200})

    } catch (error) {
        console.error("Error verifying User", error)
        return Response.json({
            success:false,
            message: "Error verifying username"
        },{status:500})
    }
}