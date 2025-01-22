import { useState } from "react";
import "../styles/Faq.css";

export default function Faq() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: "What is digital marketing?",
      answer:
        "Digital marketing is any form of advertising targeted at mobile devices like smartphones, laptops, tablets, and anything else that can connect to the Internet. While traditional marketing will concentrate on radio, television, print, and film. Digital marketing also includes- apps, websites, blogs, social media, email, and all sorts of online content",
    },
    {
      question: "Would my company benefit from digital marketing?",
      answer:
        "YES! Even though you don’t have to replace your current traditional marketing strategies with digital ones, your company won’t succeed in 2022 if you don’t introduce the digital world into your marketing plan. That’s really how simple it is.",
    },
    {
      question: "What are the typical roles within a digital marketing agency?",
      answer: `This varies based on your agency’s size and areas of specialization. The following is a list of roles are typically found in a digital marketing firm:
– Founder and Managing Director
– Account Manager: You might be given an account manager as a client who will check in with you about your projects and keep you informed.
– A graphic designer with expertise in user-friendly website design, also known as a UI designer.
– A copywriter is someone who writes blogs, articles, website content, and essentially any other words used in marketing. – Web developer – Copywriter:
– Social Media Manager`,
    },
    {
      question: "What is SEO?",
      answer:
        "The practice of using on-page and off-page adjustments and strategies to make sure that your page ranks higher on search engines is known as search engine optimization (SEO). Making sure that this blog has a minimum of 1000 words because Google prefers it is an example of one of these strategies.",
    },
    {
      question: "What are keywords?",
      answer: `The practice of using on-page and off-page adjustmeKeywords are the words and phrases that users enter into search engines. These are the terms we search for when looking for websites, photos, videos, blogs, or any type of information or content online. You must thoughtfully incorporate these keywords into your pages and content to increase SEO ranking.
nts and strategies to make sure that your page ranks higher on search engines is known as search engine optimization (SEO). Making sure that this blog has a minimum of 1000 words because Google prefers it is an example of one of these strategies.`,
    },
    {
      question: "How often should I update my website?",
      answer:
        "Without any new or fresh content Your website becomes an online brochure for your business A successful website will engage users and offer fresh, up-to-date content and information. Additionally, Google much prefers a website that is regularly updated in terms of SEO. Your website can be updated whenever you want as long as it remains useful.",
    },
    {
      question: "Do I need a Blog?",
      answer:
        "The most popular platform for disseminating marketing content is a blog. This is so because blogs entice readers by offering amusement and useful information. Almost any business, including a local fashion boutique, a law firm, or a construction company, can benefit from blogging. In conclusion, we would advise having a blog.",
    },
    {
      question: "How often should I post a blog or post on social media?",
      answer: `Facebook: Try to post at least three times per week and ideally once per day.
Instagram: Every day, one or two posts.
LinkedIn: No more than once per day, but no less than twice per week.
Twitter: This platform offers a little more variety, but generally speaking, 3 to 30 tweets daily are sufficient.
You should consider weekly posts when blogging rather than monthly ones. We advise publishing 1-2 blog posts every week. There isn’t a specific magic number for blogging. There has long been a misconception that the more frequently you post, the better; however, this is not always the case.
“If you post too infrequently, your audience will stop paying attention to you and you will vanish from their minds as soon as possible. They will hate seeing your posts clog up their feed if you post too frequently and you will become a complete annoyance”- Neil Patel
This holds for both blog posts and social media updates. Quality shouldn’t be sacrificed in favor of quantity. An amazing and interesting blog that took three hours to write, edit, and research is much preferable to two poorly written or edited blogs that took just as long to put together.`,
    },
    {
      question: "What is inbound marketing?",
      answer:
        "A business strategy is known as inbound marketing draws clients by producing useful content and experiences that are specifically catered to their needs. Inbound marketing creates connections with your audience and solves problems they already have, whereas outbound marketing interrupts your audience with content they don’t want.",
    },
    {
      question: "Which social media channels should my business be using?",
      answer:
        "First and foremost, you need to concentrate on the social media channels with the highest user activity. Facebook, YouTube, Instagram, Twitter, and LinkedIn are these in that order. Next, you need to research the demographic and evaluate where your target audience spends their time. What behavior patterns do they exhibit? What sort of information do they like best? What impact does social media have on them as consumers?",
    },
    {
      question: "Is email marketing still effective?",
      answer:
        "Definitely! Never assume that just focusing on your digital marketing strategy on social platforms will be sufficient just because social media has become so immensely popular. More people have active email accounts than on any other social media site in the world. Email marketing is more confidential and frequently feels more individualized to the customer. The majority of people are constantly checking their email, doing so several times per day, and receiving notifications on their smartphones, laptops, and tablets",
    },
  ];

  return (
    <div className="faqContainer">
      <div className="faqHeader">
        <h1>FAQ&apos;s</h1>
        <p>Need some answers?</p>
      </div>
      <div className="hs-accordion-group">
        {faqs.map((e, index) => (
          <div
            key={index}
            className={`hs-accordion ${
              openAccordion === index ? "active" : ""
            } bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700`}
            id={`hs-bordered-heading-${index}`}
          >
            <button
              className="hs-accordion-toggle text-xl hs-accordion-active:text-blue-600 inline-flex items-center gap-x-3 w-full font-semibold text-start text-black py-4 px-5 hover:text-[var(--theme-red)] disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
              aria-expanded={openAccordion === index}
              aria-controls={`hs-basic-bordered-collapse-${index}`}
              onClick={() => toggleAccordion(index)}
            >
              <svg
                className={`hs-accordion-active:hidden block size-3.5 ${
                  openAccordion === index ? "hidden" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              <svg
                className={`hs-accordion-active:block hidden size-3.5 ${
                  openAccordion === index ? "" : "hidden"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
              </svg>
              {e.question}
            </button>
            <div
              id={`hs-basic-bordered-collapse-${index}`}
              className={`hs-accordion-content ${
                openAccordion === index ? "block" : "hidden"
              } w-full overflow-hidden transition-[height] duration-300`}
              role="region"
              aria-labelledby={`hs-bordered-heading-${index}`}
            >
              <div className="pb-4 px-5">
                <p className="text-gray-800 dark:text-neutral-200 text-md">
                  {e.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
