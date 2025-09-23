import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "The Grand Wedding of Priya & Rahul",
      date: "December 15, 2024",
      location: "Udaipur Palace Hotel",
      guests: 500,
      status: "upcoming",
      type: "Wedding",
      image: "https://picsum.photos/600/400?random=10",
      description: "A magnificent celebration of love in the royal city of Udaipur",
      featured: true
    },
    {
      id: 2,
      title: "Corporate Gala Night 2024",
      date: "November 28, 2024", 
      location: "The Leela Mumbai",
      guests: 300,
      status: "upcoming",
      type: "Corporate",
      image: "https://picsum.photos/600/400?random=11",
      description: "Annual corporate celebration with awards and networking"
    },
    {
      id: 3,
      title: "Ananya's Birthday Celebration",
      date: "October 20, 2024",
      location: "JW Marriott Delhi",
      guests: 150,
      status: "completed",
      type: "Birthday",
      image: "https://picsum.photos/600/400?random=12",
      description: "Elegant milestone birthday party with family and friends"
    },
    {
      id: 4,
      title: "Diwali Festival Celebration",
      date: "October 12, 2024",
      location: "Hotel Taj Palace",
      guests: 400,
      status: "completed",
      type: "Festival",
      image: "https://picsum.photos/600/400?random=13",
      description: "Traditional Diwali celebration with cultural performances"
    },
    {
      id: 5,
      title: "Tech Conference 2024",
      date: "September 25, 2024",
      location: "Bangalore Convention Center",
      guests: 800,
      status: "completed", 
      type: "Conference",
      image: "https://picsum.photos/600/400?random=14",
      description: "Technology summit with industry leaders and innovators"
    },
    {
      id: 6,
      title: "Golden Anniversary Celebration",
      date: "August 15, 2024",
      location: "The Oberoi Gurgaon",
      guests: 200,
      status: "completed",
      type: "Anniversary",
      image: "https://picsum.photos/600/400?random=15",
      description: "50 years of love celebrated with elegance and joy"
    }
  ];
  return (
    <div className="min-h-screen bg-custom-gradient">
      <Header/>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6">
              Our Events
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Discover the magnificent celebrations we've captured and the upcoming events we're excited to photograph
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-auto">
            {/* Featured Event - Large */}
            <div className="lg:col-span-2 lg:row-span-2 relative group cursor-pointer">
              <div className="relative h-full min-h-[500px] overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-black p-8 hover:scale-[1.02] transition-all duration-500">
                <div 
                  className="absolute inset-0 opacity-30 bg-cover bg-center"
                  style={{ backgroundImage: `url(${events[0].image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <Badge className="bg-emerald-500/20 text-emerald-400 backdrop-blur-sm">
                      {events[0].type}
                    </Badge>
                    <Badge className="bg-blue-500/20 text-blue-400 backdrop-blur-sm">
                      {events[0].status}
                    </Badge>
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {events[0].title}
                    </h3>
                    <p className="text-gray-300 mb-6 text-lg">
                      {events[0].description}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center text-gray-400">
                        <Calendar className="h-5 w-5 mr-3" />
                        {events[0].date}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin className="h-5 w-5 mr-3" />
                        {events[0].location}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Users className="h-5 w-5 mr-3" />
                        {events[0].guests} guests
                      </div>
                    </div>

                    <Button className="bg-white text-black hover:bg-gray-200 transition-colors group">
                      Event Details
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Event Cards */}
            {events.slice(1, 3).map((event, index) => (
              <div key={event.id} className="lg:col-span-1 lg:row-span-1 relative group cursor-pointer">
                <div className="relative h-full min-h-[240px] overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-black p-6 hover:scale-[1.02] transition-all duration-500">
                  <div 
                    className="absolute inset-0 opacity-20 bg-cover bg-center"
                    style={{ backgroundImage: `url(${event.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                  
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <Badge className="bg-purple-500/20 text-purple-400 backdrop-blur-sm text-xs">
                        {event.type}
                      </Badge>
                      <Badge className="bg-gray-500/20 text-gray-400 backdrop-blur-sm text-xs">
                        {event.status}
                      </Badge>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {event.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-400 mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Users className="h-4 w-4 mr-2" />
                        {event.guests} guests
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Wide Event Card */}
            <div className="lg:col-span-2 lg:row-span-1 relative group cursor-pointer">
              <div className="relative h-full min-h-[240px] overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 to-black p-6 hover:scale-[1.02] transition-all duration-500">
                <div 
                  className="absolute inset-0 opacity-25 bg-cover bg-center"
                  style={{ backgroundImage: `url(${events[3].image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
                
                <div className="relative z-10 h-full flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-yellow-500/20 text-yellow-400 backdrop-blur-sm">
                        {events[3].type}
                      </Badge>
                      <Badge className="bg-gray-500/20 text-gray-400 backdrop-blur-sm">
                        {events[3].status}
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {events[3].title}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {events[3].description}
                    </p>
                    
                    <div className="flex items-center gap-6 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {events[3].date}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        {events[3].guests} guests
                      </div>
                    </div>
                  </div>
                  
                  <Button className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm ml-6">
                    View Photos
                  </Button>
                </div>
              </div>
            </div>

            {/* Small Event Cards */}
            {events.slice(4).map((event, index) => (
              <div key={event.id} className="lg:col-span-1 lg:row-span-1 relative group cursor-pointer">
                <div className="relative h-full min-h-[240px] overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-black p-6 hover:scale-[1.02] transition-all duration-500">
                  <div 
                    className="absolute inset-0 opacity-20 bg-cover bg-center"
                    style={{ backgroundImage: `url(${event.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                  
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <Badge className="bg-indigo-500/20 text-indigo-400 backdrop-blur-sm text-xs">
                        {event.type}
                      </Badge>
                      <Badge className="bg-gray-500/20 text-gray-400 backdrop-blur-sm text-xs">
                        {event.status}
                      </Badge>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {event.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-400 mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Users className="h-4 w-4 mr-2" />
                        {event.guests} guests
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Events;