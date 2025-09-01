import BlogSection from "../components/homepage/blog-section";
import CategorySection from "../components/homepage/category-section";
import HeroSection from "../components/homepage/hero-section";


export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <CategorySection/>
      <BlogSection/>
    </div>
  );
}
