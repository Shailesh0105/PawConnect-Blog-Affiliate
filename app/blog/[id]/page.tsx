import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PawPrint } from 'lucide-react'

// Updated mock data with local image paths
const allBlogs = [
  {
    id: 1,
    title: "The Joy of Puppy Training",
    image: "/images/blog-posts/puppy-training.jpg",
    content: "Puppies are adorable bundles of joy, but they require proper training to grow into well-behaved adult dogs. In this blog post, we'll explore effective puppy training techniques that will help you build a strong bond with your furry friend while teaching them essential skills. From house training to basic commands, we'll cover everything you need to know to raise a happy and obedient puppy.",
    affiliateProduct: {
      name: "Dog Training for Dummies",
      image: "/images/products/dog-training-book.jpg",
      link: "https://www.amazon.com/Dog-Training-Dummies-Wendy-Volhard/dp/0764584413"
    }
  },
  {
    id: 2,
    title: "Best Dog-Friendly Hiking Trails",
    image: "/images/blog-posts/dog-hiking.jpg",
    content: "Hiking with your dog can be an incredibly rewarding experience for both you and your furry companion. In this post, we'll explore some of the best dog-friendly hiking trails across the country. From easy walks to challenging treks, we'll provide tips on how to prepare for your hike, what to pack, and how to ensure your dog stays safe and comfortable on the trail. Get ready to embark on some unforgettable outdoor adventures with your four-legged friend!",
    affiliateProduct: {
      name: "Best Hikes with Dogs: Western Washington",
      image: "/images/products/hiking-book.jpg",
      link: "https://www.amazon.com/Best-Hikes-Dogs-Western-Washington/dp/1594850224"
    }
  },
  // ... (other blog posts)
]

export default function BlogPost({ params }: { params: { id: string } }) {
  const blogId = Number(params.id)
  const blog = allBlogs.find(b => b.id === blogId)

  if (!blog) {
    return <div>Blog post not found</div>
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <PawPrint className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">PawConnect</h1>
          </Link>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <article className="lg:w-2/3">
            <h1 className="text-4xl font-bold mb-6 text-primary">{blog.title}</h1>
            <Image
              src={blog.image}
              alt={blog.title}
              width={800}
              height={400}
              className="w-full h-auto object-cover rounded-lg mb-6"
            />
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground">{blog.content}</p>
            </div>
            <div className="mt-8">
              <Link href="/">
                <Button variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground">
                  Back to Home
                </Button>
              </Link>
            </div>
          </article>
          
          <aside className="lg:w-1/3 mt-8 lg:mt-0">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Related Product</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={blog.affiliateProduct.image}
                  alt={blog.affiliateProduct.name}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover rounded-lg mb-4"
                />
                <a 
                  href={blog.affiliateProduct.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-primary hover:underline"
                >
                  {blog.affiliateProduct.name}
                </a>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>

      <footer className="bg-secondary text-secondary-foreground mt-12">
        <div className="container mx-auto px-4 py-8">
          <p className="text-sm text-center">&copy; 2023 PawConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}