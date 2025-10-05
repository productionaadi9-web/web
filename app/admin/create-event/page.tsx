"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { EventStatus } from "@/types";
import { z } from "zod";

export default function CreateEvent() {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [guests, setGuests] = useState("");
    const [status, setStatus] = useState<z.infer<typeof EventStatus>>("UPCOMING");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [images, setImages] = useState<File[]>([]);
    const [uploadedImageUrls, setUploadedImageUrls] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [uploadingImages, setUploadingImages] = useState(false);

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>){
        const files = Array.from(e.target.files || []);
        setImages(files);
    }

    async function uploadImagesToCloudinary() {
        if (images.length === 0) return [];

        setUploadingImages(true);
        const formData = new FormData();
        
        images.forEach((image) => {
            formData.append("files", image);
        });

        try {
            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Failed to upload images");
            }

            const data = await response.json();
            setUploadedImageUrls(data.urls);
            return data.urls;
        } catch (error) {
            console.error("Error uploading images:", error);
            toast.error("Failed to upload images");
            return [];
        } finally {
            setUploadingImages(false);
        }
    }

    async function handleSubmit(){
        setLoading(true);
        
        try {
            // First upload images to Cloudinary
            const imageUrls = await uploadImagesToCloudinary();
            
            if (images.length > 0 && imageUrls.length === 0) {
                toast.error("Failed to upload images");
                return;
            }

            // Create event with the uploaded image URLs
            const eventData = {
                title,
                date,
                location,
                guests: parseInt(guests),
                status,
                type,
                description,
                images: imageUrls,
            };

            const response = await fetch("/api/event", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(eventData),
            });

            if (!response.ok) {
                throw new Error("Failed to create event");
            }

            const data = await response.json();
            toast.success("Event created successfully!");
            
            // Reset form
            setTitle("");
            setDate("");
            setLocation("");
            setGuests("");
            setStatus("UPCOMING");
            setType("");
            setDescription("");
            setImages([]);
            setUploadedImageUrls([]);
        } catch (error) {
            console.error("Error creating event:", error);
            toast.error("Failed to create event");
        } finally {
            setLoading(false);
        }
    }
    return <div className="bg-custom-gradient">
        <Header />
        <div className="pt-24 pb-16 ">
            <div className="container mx-auto px-4 max-w-7xl">
                <h1 className="text-5xl font-bold text-white mb-6">Create Event</h1>
            </div>
            <div className="flex flex-col items-center justify-center max-w-96 gap-2 mx-auto">
                <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-black text-white ring-0 border-0 placeholder:text-gray-400"
                placeholder="Enter event title"
                />
                <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-black text-white ring-0 border-0 placeholder:text-gray-400"
                placeholder="Enter event date"
                />
                <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-black text-white ring-0 border-0 placeholder:text-gray-400"
                placeholder="Enter event location"
                />
                <Input
                type="number"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="bg-black text-white ring-0 border-0 placeholder:text-gray-400"
                placeholder="Enter number of guests"
                />
                <Select
                value={status}
                onValueChange={(value) => setStatus(value as z.infer<typeof EventStatus>)}
                >
                    <SelectTrigger className="bg-black text-white ring-0 border-0 placeholder:text-gray-400 w-full">
                        <SelectValue placeholder="Select event status" className="bg-gray-800 text-white ring-0 border-0 placeholder:text-gray-400 w-full" />
                    </SelectTrigger>
                    <SelectContent className="bg-black text-white border-0">
                        <SelectItem value="UPCOMING" className="text-white">UPCOMING</SelectItem>
                        <SelectItem value="ONGOING" className="text-white">ONGOING</SelectItem>
                        <SelectItem value="COMPLETED" className="text-white">COMPLETED</SelectItem>
                        <SelectItem value="CANCELLED" className="text-white">CANCELLED</SelectItem>
                    </SelectContent>
                </Select>
                <Input
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="bg-black text-white ring-0 border-0 placeholder:text-gray-400"
                placeholder="Enter event type"
                />
                <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-black text-white ring-0 border-0 placeholder:text-gray-400"
                placeholder="Enter event description"
                />
                <Input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="bg-black text-white ring-0 border-0 placeholder:text-gray-400"
                placeholder="Select multiple images"
                />
                {images.length > 0 && (
                    <div className="text-sm text-white">
                        {images.length} image{images.length > 1 ? 's' : ''} selected
                    </div>
                )}
                <Button
                onClick={handleSubmit}
                disabled={loading || uploadingImages}
                className="bg-white text-black hover:bg-gray-200 transition h-12 text-base font-medium disabled:opacity-50"
                >
                    {loading ? "Creating Event..." : uploadingImages ? "Uploading Images..." : "Create Event"}
                </Button>
            </div>
        </div>
        <Footer />
        </div>;
}