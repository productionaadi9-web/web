"use client";

import { Calendar, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

interface EventType {
  id: string;
  title: string;
  date: string;
  location: string;
  guests: number;
  status: string;
  type: string;
  image: string[];
  description: string;
}

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState<EventType | null>(null);

  async function fetchEvent() {
    try {
      const response = await axios.get(`/api/event/${id}`);
      setEvent(response.data);
    } catch (error) {
      console.error("Failed to fetch event:", error);
    }
  }

  useEffect(() => {
    if (id) fetchEvent();
  }, [id]);

  if (!event) {
    return (
      <div className="min-h-screen bg-custom-gradient flex items-center justify-center text-gray-200 text-lg">
        Loading event details...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-custom-gradient">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Cover Image */}
          <div className="relative rounded-3xl overflow-hidden mb-12">
            <div
              className="h-[600px] bg-cover bg-center"
              style={{ backgroundImage: `url(${event.image?.[0]})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">{event.title}</h1>
              <div className="flex items-center gap-3">
                <Badge className="bg-emerald-500/20 text-emerald-400 backdrop-blur-sm">
                  {event.type}
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-400 backdrop-blur-sm">
                  {event.status}
                </Badge>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="bg-black/30 rounded-3xl p-8 backdrop-blur-md shadow-xl text-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-center text-lg">
                <Calendar className="h-6 w-6 text-emerald-400 mr-3" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-lg">
                <MapPin className="h-6 w-6 text-blue-400 mr-3" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center text-lg">
                <Users className="h-6 w-6 text-purple-400 mr-3" />
                <span>{event.guests} guests</span>
              </div>
            </div>

            <hr className="border-gray-700 my-6" />

            {/* Description */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Description</h2>
              <p className="text-gray-300 leading-relaxed text-lg">{event.description}</p>
            </div>

            {/* Gallery */}
            {event.image.length > 1 && (
              <div className="mt-12">
                <h2 className="text-2xl font-semibold text-white mb-4">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {event.image.slice(1).map((img, index) => (
                    <div
                      key={index}
                      className="aspect-video scale-[1.1] rounded-2xl overflow-hidden bg-cover bg-center hover:scale-[1.13] transition-transform duration-300"
                      style={{ backgroundImage: `url(${img})` }}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12 flex justify-center">
              <Button className="bg-white text-black hover:bg-gray-200 px-6 py-3 text-lg rounded-full">
                <Link href={"/Events"}>
                Back to Events
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventDetails;
