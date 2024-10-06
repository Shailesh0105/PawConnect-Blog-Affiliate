'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { PawPrint, ExternalLink } from "lucide-react"

export default function AllBlogs() {
  // This would typically come from a database or API
  const allBlogs = [
    { id: 1, title: "The Joy of Puppy Training", image: "https://source.unsplash.com/400x200/?puppy&sig=1", affiliateLink: "https://www.amazon.com/Dog-Training-Dummies-Wendy-Volhard/dp/0764584413" },
    { id: 2, title: "Best Dog-Friendly Hiking Trails", image: "https://source.unsplash.com/400x200/?dog,hiking&sig=2", affiliateLink: "https://www.amazon.com/Best-Hikes-Dogs-Western-Washington/dp/1594850224" },
    { id: 3, title: "Nutritious Homemade Dog Treats", image: "https://source.unsplash.com/400x200/?dog,treat&sig=3", affiliateLink: "https://www.amazon.com/Organic-Dog-Treat-Cookbook-Treats/dp/1641529725" },
    // ... (other blog posts)
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* ... (existing header code) */}

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-primary">All Blog Posts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allBlogs.map((blog) => (
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
        <div className="mt-8 text-center">
          <Link href="/">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Back to Home
            </Button>
          </Link>
        </div>
      </main>

      {/* ... (existing footer code) */}
    </div>
  )
}