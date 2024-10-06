'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { PawPrint, Menu, Facebook, Instagram, ExternalLink } from "lucide-react"

// Updated mock data for blog posts with local image paths
const allBlogs = [
  { id: 1, title: "The Joy of Puppy Training", image: "/images/blog-posts/puppy-training.jpg", affiliateLink: "https://www.amazon.com/Dog-Training-Dummies-Wendy-Volhard/dp/0764584413" },
  { id: 2, title: "Best Dog-Friendly Hiking Trails", image: "/images/blog-posts/dog-hiking.jpg", affiliateLink: "https://www.amazon.com/Best-Hikes-Dogs-Western-Washington/dp/1594850224" },
  { id: 3, title: "Nutritious Homemade Dog Treats", image: "/images/blog-posts/dog-treats.jpg", affiliateLink: "https://www.amazon.com/Organic-Dog-Treat-Cookbook-Treats/dp/1641529725" },
  // ... (other blog posts)
]

export default function PawConnect() {
  const [visibleBlogs, setVisibleBlogs] = useState(allBlogs.slice(0, 3))

  const loadMoreBlogs = () => {
    setVisibleBlogs(allBlogs.slice(0, visibleBlogs.length + 3))
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <PawPrint className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">PawConnect</h1>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="text-lg hover:text-primary transition duration-300">Home</Link>
            <Link href="/about" className="text-lg hover:text-primary transition duration-300">About</Link>
            <Link href="/all-blogs" className="text-lg hover:text-primary transition duration-300">All Blogs</Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle>Menu</SheetTitle>
              <nav className="flex flex-col space-y-4 mt-4">
                <Link href="/" className="text-lg hover:text-primary transition duration-300">Home</Link>
                <Link href="/about" className="text-lg hover:text-primary transition duration-300">About</Link>
                <Link href="/all-blogs" className="text-lg hover:text-primary transition duration-300">All Blogs</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-primary">Latest Blog Posts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleBlogs.map((blog) => (
            <Card key={blog.id} className="overflow-hidden bg-card">
              <CardHeader className="p-0">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-xl mb-2 text-primary">{blog.title}</CardTitle>
                <p className="text-muted-foreground mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <Link href={`/blog/${blog.id}`}>
                  <Button variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground">Read More</Button>
                </Link>
                <a href={blog.affiliateLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:text-primary/80">
                  <span className="mr-2">Related Products</span>
                  <ExternalLink size={16} />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        {visibleBlogs.length < allBlogs.length && (
          <div className="mt-8 text-center">
            <Button onClick={loadMoreBlogs} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Load More
            </Button>
          </div>
        )}
      </main>

      <footer className="bg-secondary text-secondary-foreground mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">PawConnect</h2>
              <p className="text-sm">Connecting dog lovers one paw at a time</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:text-primary/80">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary hover:text-primary/80">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          <Separator className="my-8" />
          <p className="text-sm text-center">&copy; 2023 PawConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}