import Image from 'next/image';
import React, { useEffect, useState } from 'react';

// Define the shape of the blog data
interface Article {
  id: number;
  title: string;
  url: string;
  social_image: string | null;
}

const Blogs: React.FC = () => {
  const [blogData, setBlogData] = useState<Article[]>([]);

  useEffect(() => {
    const devToUsername = "vedantbhamare";
    const apiUrl = `https://dev.to/api/articles?username=${devToUsername}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setBlogData(data))
      .catch((error) => console.error("Error fetching blog data:", error));
  }, []);

  const createBlogCard = (article: Article) => {
    const fallbackImage = "/default-blog-image.png"; // Absolute path from public folder
  
    return (
      <a
        href={article.url}
        className="group relative block rounded-lg overflow-hidden border border-transparent bg-[#202020] transition-transform duration-300 hover:border-cyan-500 hover:shadow-xl"
        target="_blank"
        key={article.id}
      >
        <Image
          src={article.social_image || fallbackImage}
          alt={article.title}
          className="w-full h-auto object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400">
            {article.title}
          </h3>
        </div>
      </a>
    );
  };
  

  return (
    <section id="blogs" className="py-10 px-4 bg-black">
      <div className="container mx-auto max-w-5xl text-left">
        <h2 className="text-4xl font-semibold text-left text-cyan-400 mb-12">I write lil&lsquo; bit as well...</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogData.map((article) => createBlogCard(article))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
