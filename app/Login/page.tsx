"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import Header from "@/components/Header";
import VideoBackground from "@/components/VideoBackground";
import { useRouter } from "next/navigation";

export default function CreateUser() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState("");
const navigate = useRouter();
  async function copyLink(){
    await navigator.clipboard.writeText(link);
    toast.success("Link copied", {
      description: "Link copied to clipboard",
    });
  }

  async function handleSubmit() {
    try {
      setLoading(true);
      if(email === "productionaadi9@gmail.com"){
        navigate.push("/admin/create-user");
        setLoading(false);
        return;
      }
      if (!email) {
        toast.error("Email is required");
        setLoading(false);
        return;
      }
      const response = await axios.get(`/api/user/${email}`);
      toast.success("Please copy your drive link");
      setLink(response.data.link);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("User not found or an error occurred");
      setLoading(false);
    }
  }

  return (
    <VideoBackground>
      <div className="fixed top-0 left-0 w-full z-10">
        <Header />
      </div>
      
      <div className="flex items-center justify-center min-h-screen px-4 pt-20">
        <Card className="w-full max-w-md bg-gray-950/10 border-0 backdrop-blur-xs shadow-xl">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-white text-3xl font-bold">Login and Get Your Drive Link</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6 px-8">
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter your email"
              required
              className="bg-gray-800/20 border-0 text-white placeholder:text-gray-200 focus-visible:ring-0 h-12 text-base"
            />

            <Button
              onClick={handleSubmit}
              className="w-full bg-white text-black hover:bg-gray-200 transition h-12 text-base font-medium"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </CardContent>

          {link && (
            <CardFooter className="flex flex-col space-y-6 text-white pt-8 px-8">
              <div className="text-center">
                <h2 className="text-xl font-semibold">Welcome, {email}</h2>
              </div>

              <Button
                className="w-full bg-white text-black hover:bg-gray-200 transition h-12 text-base font-medium"
                onClick={() => window.open(link, "_blank")}
              >
                Open Drive
              </Button>

              <div className="flex w-full justify-center items-center gap-2">
                <Button
                  className="w-fit bg-white text-black hover:bg-gray-200 transition h-10 text-sm font-medium"
                  onClick={copyLink}
                >
                  Copy Link
                </Button>
                <div className="bg-gray-800/40 px-4 py-3 rounded-lg w-full">
                  <p className="text-sm text-gray-300 break-all">{link}</p>
                </div>
              </div>
            </CardFooter>
          )}
        </Card>
      </div>
    </VideoBackground>
  );
}