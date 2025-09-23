"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
export default function createUser(){
    const [email, setEmail] = useState("");
    const [link, setLink] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(){
        try{
            setLoading(true);
            if(!email || !link){
                toast.error("Email and link are required");
                return;
            }
            const response = await axios.post("/api/user", { email, link });
            toast.success("User created successfully",{
                description: "User created successfully",
            });
            setEmail("");
            setLink("");
            setLoading(false);
        }
        catch(error){
            console.log(error);
            setLoading(false);
        }

    }
    return(
        <div className="bg-black">

        <div className="flex flex-col items-center justify-center  h-screen mx-auto max-w-96 gap-2">
            <h1 className="text-white text-4xl mb-12">Add drive link for users</h1>
            <Input
            onChange={e => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter email"
            required
            className="bg-gray-800 text-white ring-0 border-0 placeholder:text-gray-400"
            />
            <Input onChange={e => setLink(e.target.value)}
            value={link}
            placeholder="Enter drive link"
            type="link"
            required
            className="bg-gray-800 text-white ring-0 border-0 placeholder:text-gray-400"
            />
            <Button onClick={handleSubmit} className="bg-white hover:bg-gray-200 cursor-pointer" disabled={loading}> {loading ? "Loading..." : "Submit"}</Button>
        </div>
        </div>
    )
}