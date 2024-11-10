import Img1 from "../assets/images/ExploreBox/fruits.jpg";
import Img2 from "../assets/images/ExploreBox/vegetable.jpg";
import Img3 from "../assets/images/ExploreBox/dryfruits.jpg";
import Img4 from "../assets/images/ExploreBox/spices.jpg";
import Img5 from "../assets/images/ExploreBox/pulses.jpg";
import Img6 from "../assets/images/ExploreBox/dairyProducts.jpg";

const products = [
  {
    ImgSrc: Img1,
    title: "Fruits",
    desc: "Fresh and carefully selected fruits, delivered globally with guaranteed quality.",
  },
  {
    ImgSrc: Img2,
    title: "Vegetables",
    desc: "Farm-fresh vegetables, shipped directly from trusted sources to your location.",
  },
  {
    ImgSrc: Img3,
    title: "Dry Fruits",
    desc: "High-quality dry fruits, packed with care to preserve flavor and freshness.",
  },
  {
    ImgSrc: Img4,
    title: "Spices",
    desc: "Handpicked spices, sourced from the finest spice gardens in the region.",
  },
  {
    ImgSrc: Img5,
    title: "Pulses",
    desc: "Premium pulses that meet international standards for taste and nutrition.",
  },
  {
    ImgSrc: Img6,
    title: "Dairy Products",
    desc: "Exporting a range of fresh dairy products, ensuring quality and safety in every shipment.",
  },
];

const ExploreBox = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 ms-10 me-10">
      {products.map((product, index) => (
        <div key={index} className="relative overflow-hidden">
          <div className="h-[250px] sm:h-[300px] lg:h-[400px] overflow-hidden">
            <img
              src={product.ImgSrc}
              alt={product.title}
              className="w-full h-full object-cover opacity-100 transition-transform duration-400 transform hover:opacity-70 hover:scale-105"
            />
          </div>
          <section className="h-[120px] lg:h-[150px] border-l-[0.5px] border-gray-600">
            <div className="px-6 pt-6 text-white font-light text-[1em] sm:text-[1.07em] tracking-wider leading-7">
              {product.title}
            </div>
            <div className="px-6 pt-3 text-gray-400 text-sm tracking-wide">
              {product.desc}
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default ExploreBox;
