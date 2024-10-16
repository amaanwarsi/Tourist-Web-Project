'use client'
import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

const page = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitMessage("Thank you for your message. We'll get back to you soon!");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div>
      <header>
        <div class="container">
          <nav class="navbar">
            <div class="logo">DevBhoomi <span>Yatra<b>.</b></span></div>
            <div class="nav-links">
              <Link href="/pages/Destination">Destinations</Link>
              <Link href="/pages/About">About</Link>
              <Link href="/pages/Contact">Contact</Link>
              <select>
                <option value="Booking">Booking</option>
              </select>
              <Link href="/pages/Contact">Contact</Link>
              <Link href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                  <path d="M21 21l-6 -6" />
                </svg>
              </Link>
            </div>
            <div class="right-section">
              <Link href="#!" class="btn btn-outline">Login</Link>
              <Link href="#!" class="btn">Sign Up</Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
              {submitMessage && (
                <p className="mt-4 text-green-600">{submitMessage}</p>
              )}
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-muted-foreground" />
                    <span>123 Adventure Street, Wanderlust City, 12345</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-2 h-5 w-5 text-muted-foreground" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-2 h-5 w-5 text-muted-foreground" />
                    <span>info@wanderlustadventures.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Our Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">Map Placeholder</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
