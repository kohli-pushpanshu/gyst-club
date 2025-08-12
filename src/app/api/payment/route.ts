import Razorpay from 'razorpay';


const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret:process.env.RAZORPAY_KEY_SECRET
})

export type OrderBody = {
    amount: number;
    currency: string;
}

export async function POST(request: Request) {
    try {
      const {amount, currency}: OrderBody = await request.json();
      if(!amount){
        return Response.json({
          success:false,
          message:"Amount is required"
        },{status:400})
      }

      const options = {
            amount,
            currency: currency || "INR",
            receipt: `receipt#${Date.now()}`,
        }

      await razorpay.orders.create(options);

      return Response.json({
        success:true,
        message:"Options created successfully"
      },{status:200})

    } catch (error) {
      console.log(error)
      return Response.json({
        success:false,
        message:"Something went wrong..."
      },{status:404})
    }
}
