import React from "react";

const data = [
  {
    title: "Reliability and Trust",
    content:
      "Our company has a strong reputation for delivering goods safely and on time, ensuring clients can rely on us to meet their supply chain needs consistently.",
  },
  {
    title: "Global Network",
    content:
      "With partnerships and contacts around the world, we offer seamless import-export services across continents, making international trade straightforward and efficient.",
  },
  {
    title: "Expertise in Compliance",
    content:
      "Our team is well-versed in global trade regulations and customs compliance, minimizing delays and ensuring smooth cross-border transactions.",
  },
  {
    title: "Customized Solutions",
    content:
      "We tailor our services to meet specific client needs, whether it’s handling unique product types, managing special delivery requirements, or customizing logistics plans.",
  },
  {
    title: "Advanced Technology Integration",
    content:
      "Our operations are enhanced with technology for tracking, inventory management, and real-time communication, giving clients full visibility and control over their shipments.",
  },
  {
    title: "Competitive Pricing",
    content:
      "We provide high-quality services at competitive rates, offering cost-effective solutions without compromising on reliability or efficiency.",
  },
 
];

const WhyUS = () => {
  return (
    <div className="bg-[#0F1011] mt-[12rem] ">
      <div className="flex w-[100vw] items-center flex-col ">
        <p className="text-textGray uppercase text-[2rem] ">Why Choose Us!</p>
        <p className="text-textGray capitalize text-[1.5rem] ">
          {" "}
          Our Strengths
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 ms-10 me-10">
        {data.map((data, i) => (
          <div key={i} className="h-[200px] sm:h-[250px] mobile:h-[300px] ps-5 pe-5 bg-[#1D1E1F]">
            <p className="text-textGray tracking-tight text-[1.2rem] mt-2 ">
              {data.title}
            </p>

            <p className="text-[#7D7E7F] tracking-tight mt-2 ">
              {data.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUS;
