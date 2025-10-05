"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { Event, User } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2 } from "lucide-react";

export default function Admin() {
    const [events, setEvents] = useState<Event[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [loadingEvents, setLoadingEvents] = useState(true);
    const [loadingUsers, setLoadingUsers] = useState(true);

    useEffect(() => {
        fetchEvents();
        fetchUsers();
    }, []);
async function handleDelete(id:string){
    try{
    await axios.delete(`/api/event/${id}`)
    toast.success("Event deleted successfully")
}
catch(e){
    toast.error("error deleting event")
}
}
async function handleUserDelete(id:string){
     try{
    await axios.delete(`/api/user/delete/${id}`)
    toast.success("User deleted successfully")
}
catch(e){
    console.log(e)
    toast.error("error deleting user")
}
}
    const fetchEvents = async () => {
        try {
            const response = await axios.get('/api/event');
            setEvents(response.data);
            setLoadingEvents(false);
        } catch (error) {
            console.error('Error fetching events:', error);
            toast.error('Failed to fetch events');
            setLoadingEvents(false);
        }
    };

    const fetchUsers = async () => {
        try {
            const response = await axios.get('/api/user');
            setUsers(response.data);
            console.log(response.data)
            setLoadingUsers(false);
        } catch (error) {
            console.error('Error fetching users:', error);
            toast.error('Failed to fetch users');
            setLoadingUsers(false);
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'UPCOMING':
                return 'bg-blue-500';
            case 'ONGOING':
                return 'bg-green-500';
            case 'COMPLETED':
                return 'bg-gray-500';
            case 'CANCELLED':
                return 'bg-red-500';
            default:
                return 'bg-gray-500';
        }
    };

    return (
        <div className="bg-custom-gradient min-h-screen flex flex-col">
            <Header />
            <div className="pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-7xl">
                    <h1 className="text-5xl font-bold text-white mb-6">Admin Dashboard</h1>
                </div>
            </div>
            
            <div className="container mx-auto px-4 max-w-7xl mb-8">
                <div className="flex gap-4 justify-center">
                    <Link href={'/admin/create-event'} className="text-white px-6 py-3 bg-black hover:bg-gray-800 rounded-md transition-colors">
                        Create Event
                    </Link>
                    <Link href={'/admin/create-user'} className="text-white px-6 py-3 bg-black hover:bg-gray-800 rounded-md transition-colors">
                        Create User
                    </Link>
                </div>
            </div>

            {/* All Events Section */}
            <div className="container mx-auto px-4 max-w-7xl mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">All Events</h2>
                {loadingEvents ? (
                    <div className="text-white text-center">Loading events...</div>
                ) : events.length === 0 ? (
                    <div className="text-white text-center">No events found</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {events.map((event: any) => (
                            <Card key={event.id} className="bg-gray-900/50 border-gray-700 text-white">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <CardTitle className="text-xl">{event.title}</CardTitle>
                                        <Badge className={`${getStatusColor(event.status)} text-white`}>
                                            {event.status}
                                        </Badge>
                                        <Button onClick={()=>handleDelete(event.id)} className="cursor-pointer">
                                            <Trash2 className="h-4 w-4 text-red-500" />
                                        </Button>
                               
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        <p className="text-sm"><span className="font-semibold">Type:</span> {event.type}</p>
                                        <p className="text-sm"><span className="font-semibold">Date:</span> {event.date}</p>
                                        <p className="text-sm"><span className="font-semibold">Location:</span> {event.location}</p>
                                        <p className="text-sm"><span className="font-semibold">Guests:</span> {event.guests}</p>
                                        <p className="text-sm line-clamp-2"><span className="font-semibold">Description:</span> {event.description}</p>
                                        {event.image && event.image.length > 0 && (
                                            <div className="mt-2">
                                                <p className="text-sm font-semibold">Images: {event.image.length}</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-gray-700">
                                        <Link 
                                            href={`/Events/${event.id}`} 
                                            className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                                        >
                                            View Event →
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>

            {/* All Users Section */}
            <div className="container mx-auto px-4 max-w-7xl mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">All Users</h2>
                {loadingUsers ? (
                    <div className="text-white text-center">Loading users...</div>
                ) : users.length === 0 ? (
                    <div className="text-white text-center">No users found</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {users.map((user: any) => (
                            <Card key={user.id} className="bg-gray-900/50 border-gray-700 text-white">
                                <CardContent className="pt-6">
                                    <div className="space-y-3">
                                        <div className="flex w-full items-center justify-between">

                                        <p className="text-sm break-all">
                                            <span className="font-semibold">Email:</span> {user.email}
                                        </p>
                                            <Button onClick={()=>handleUserDelete(user.id)} className="cursor-pointer">
                                            <Trash2 className="h-4 w-4 text-red-500" />
                                        </Button>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold mb-1">Drive Link:</p>
                                            <div className="bg-gray-800/50 p-2 rounded">
                                                <p className="text-xs text-gray-300 break-all line-clamp-2">{user.link}</p>
                                            </div>
                                        </div>
                                        <a 
                                            href={user.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-block mt-2 text-blue-400 hover:text-blue-300 text-sm font-medium"
                                        >
                                            Open Drive →
                                        </a>
                                      

                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>

            <Footer />
        </div>
    )
}