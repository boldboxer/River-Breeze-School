// app/news/page.tsx
'use client';

export default function NewsPage() {
  const articles = [
    {
      title: "New Initiatives for 2025 Academic Year",
      description: "We are excited to announce new programs and initiatives for the upcoming academic year that will enhance our students' learning experience.",
      image: "/images/news1.jpg", // Replace with your image paths
      date: "September 27, 2024"
    },
    {
      title: "Community Engagement Events",
      description: "Join us for a series of events designed to strengthen our community ties and provide fun learning experiences for all ages.",
      image: "/images/news2.jpg",
      date: "September 20, 2024"
    },
    {
      title: "Alumni Success Stories",
      description: "Discover the inspiring journeys of our alumni and how they are making a difference in their communities.",
      image: "/images/news3.jpg",
      date: "September 15, 2024"
    },
    {
      title: "Exciting Sports Events Coming Up!",
      description: "Get ready for our upcoming sports events that promise to be exciting and engaging for both participants and spectators!",
      image: "/images/news4.jpg", // Replace with your new image path
      date: "September 30, 2024"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col p-4">
      <h1 className="text-5xl font-extrabold text-purple-600 text-center mb-12">Latest News And Updates</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {articles.map((article, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src={article.image} alt={article.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-purple-600 mb-2 hover:text-purple-800 transition duration-300">{article.title}</h2>
              <p className="text-gray-700 mb-4">{article.description}</p>
              <span className="text-gray-500 text-sm">{article.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
