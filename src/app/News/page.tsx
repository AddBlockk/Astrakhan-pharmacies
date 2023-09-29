import NewsSection from "@/components/NewsSection";

export default function News() {
  return (
    <div>
      <div className="items-center text-center text-[36px] md:text-[60px] font-bold m-auto flex-col mb-[40px] gap-[20px] flex">
        <h1>Статьи и новости</h1>
      </div>
      <NewsSection />
    </div>
  );
}
