import dbConnect from "@/lib/dbConnect";
import Message from "@/models/message";

export async function POST(req) {
    await dbConnect();
    try {
        const { email, fname, lname, mobileNumber, message } = await req.json();
        if (!mobileNumber || !email || !fname || !lname || !message) {
            console.log("Enter all the fields");
            return new Response(JSON.stringify({ message: "All fields are required" }), { status: 400 });
        }

        const newUser = new Message({ email, fname, lname, message, mobileNumber });
        await newUser.save();
        console.log("New Message Saved");
        return new Response(JSON.stringify({ message: "New Message Saved" }), { status: 200 });

    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
    }
}

export async function GET() {
    await dbConnect();
    try {
        let data = await Message.find();
        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
    }
}
