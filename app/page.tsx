import Image from "next/image";
import dynamic from "next/dynamic";

import LinkButton from "@/components/ui/LinkButton";

import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import Marquee from "@/components/Marquee";

// Lazy-Load lower sections components
const ProductShowcase = dynamic(() => import("@/components/ProductShowcase"))
const ProductShowcaseSolidStyle = dynamic(() => import("@/components/ProductShowcaseSolidStyle"))
const FeatureSection = dynamic(() => import("@/components/FeatureSection"))
const PricingCards = dynamic(() => import("@/components/PricingCards"))
const BlogCard = dynamic(() => import("@/components/BlogCard"))
const FooterSection = dynamic(() => import("@/components/FooterSection"))


export default function HomePage() {

  // Blog Dummy Data
  const blogs = [
    {
      id: 1,
      title: "Guide to Finding the best homes ",
      imgSrc: '/Blog/blog1.webp',
      blogLink: '/blog/guide-to-finding-best-homes',
    },
    {
      id: 2,
      title: "New to Flipping ? Learn these 5 tricks",
      imgSrc: '/Blog/blog2.webp',
      blogLink: '/blog/new-to-flipping-learn-these-5-tricks',
    },
    {
      id: 3,
      title: "Choose the best neighbourhood for your needs",
      imgSrc: '/Blog/blog3.webp',
      blogLink: '/blog/choose-best-neighbourhood-for-your-needs',
    },
  ]

  // ProductSection Dummy Data
  const productSection = {
    feature1: {
      info: {
        iconSrc: "/LandingPage/search_sparkle_icon.svg",
        tagline: "Search Experience",
        description: "(vs. Zillow Hell)",
      },
      cards: [
        {
          title: "BEFORE TRUFFLE",
          description: "Clicking filters. Guessing what 'bright' means.",
        },
        {
          title: "WITH TRUFFLE",
          description: "'A bathroom like a spa' → It's the first photo.",
        }
      ],
      buttonText: "TRY THIS QUERY",
      imageSrc: "/LandingPage/feature1.webp",
      href: "/"
    },
    feature2: {
      info: {
        iconSrc: "/LandingPage/mail_sparkle_icon.svg",
        tagline: "UNIFIED INBOX",
        description: "no more scattered stuff",
      },
      cards: [
        {
          title: "BEFORE TRUFFLE",
          description: "Digging through Gmail, texting 3 agents, missing that one offer. Browse 5 sites to find the right electrician, emailed 	10, texted 3…then went on Youtube DIY.",
        },
        {
          title: "WITH TRUFFLE",
          description: "Everyone and everything in one dashboard. Nothing slips through",
        }
      ],
      buttonText: "SEE IN ACTION",
      imageSrc: "/LandingPage/feature2.webp",
      href: "/"
    },
    feature3: {
      info: {
        iconSrc: "/LandingPage/community_sparkle_icon.svg",
        tagline: "COMMUNITY INTEL",
        description: "we are all together",
      },
      cards: [
        {
          title: "BEFORE TRUFFLE",
          description: "Moving into “good schools,” but not knowing your neighbors.",
        },
        {
          title: "WITH TRUFFLE",
          description: "Find real stories, local culture, and hidden gems AI pulls from deep sources.",
        }
      ],
      buttonText: "CHECK NEIGHBOURHOODS",
      imageSrc: "/LandingPage/feature3.webp",
      href: "/"
    }
  }


  // FeatureSection Dummy Data
  const featureSection = [
    {
      id: 1,
      illustrationSrc: "/LandingPage/card_illustration1.svg",
      title: 'The Detail Lover',
      description: 'Cares more about a clawfoot tub than a walk-in closet.',
      buttonText: 'TRY NOW',
      href: '/'
    },
    {
      id: 2,
      illustrationSrc: "/LandingPage/card_illustration2.svg",
      title: 'The Lifestyle Seeker',
      description: 'Wants a home that fits their vibe, not just a roof.',
      buttonText: 'TRY NOW',
      href: '/'
    },
    {
      id: 3,
      illustrationSrc: "/LandingPage/card_illustration3.svg",
      title: 'The Renovator',
      description: 'Trusts their vision—but not their inbox full of contractor emails.',
      buttonText: 'TRY NOW',
      href: '/'
    },
    {
      id: 4,
      illustrationSrc: "/LandingPage/card_illustration4.svg",
      title: 'The Remote Relocator',
      description: 'Works from anywhere—but wants to belong somewhere',
      buttonText: 'TRY NOW',
      href: '/'
    },
  ]

  return (
    <div className="bg-background text-truffle-green flex flex-col items-center gap-24" >

      {/* HERO SECTION */}
      <section className="relative text-center flex flex-col items-center gap-14 justify-center w-full">
        <Navbar />

        <div className="space-y-8 max-md:w-[90%]">
          <div className="flex flex-col items-center gap-4 max-w-3xl ">
            <h1 className="text-7xl font-bold font-display max-md:text-5xl">
              STILL HOUSE HUNTING AFTER 100 CLICKS?
            </h1>
            <p className="text-lg w-full">
              Describe your dream home in plain words. Finding a home should feel like home
            </p>
          </div>

          <div className="mt-0 flex justify-center relative">
            <SearchBar />

            <Image priority={true} className="max-lg:hidden absolute -right-48 -bottom-4 origin-bottom" src="/LandingPage/swish_arrow.svg" alt="Scout Happy" width={300} height={300} />
          </div>
        </div>

        <div className="w-[60%] max-md:w-[100%] max-lg:w-[90%]">
          <Marquee />
        </div>

        {/* HERO IMAGE */}
        <section className="w-[90%] mt-4 relative max-lg:mt-18" >
          <Image src="/LandingPage/hero_image.webp" priority={true} alt="Hero Image" className="max-md:h-[350px] max-md:object-cover border-2 border-truffle-green-dark rounded-[60px] max-md:rounded-[40px]" width={2134} height={1032} />

          <Image priority={true} className="absolute left-10 -top-16 max-md:w-22 max-md:left-5" src="/LandingPage/sniffing_scout.webp" alt="Scout Sniffing" width={100} height={100} />
          <Image priority={true} className="absolute right-10 -top-16 max-md:w-22 max-md:right-5" src="/LandingPage/happy_scout.webp" alt="Scout Happy" width={100} height={100} />
        </section>


        {/* EYE-CATCHING SECTION */}
        <section className="relative -mt-50 max-md:-mt-50 w-full flex items-center justify-center py-60 max-md:py-48 bg-white rounded-[100px] max-md:rounded-[60px]" >
          <div className="text-center">
            <div className="flex flex-col items-center gap-6 max-w-3xl">
              <h2 className="font-display text-truffle-green-dark text-5xl font-bold mb-2 max-md:text-3xl max-md:w-[80%]">
                STILL searching like a robot? Just say what you want — Scout will sniff it out.
              </h2>

              <LinkButton href="/get-started">GET STARTED NOW</LinkButton>
            </div>
          </div>

          <Image className="absolute top-12 right-12 inline-block max-md:w-38" src="/LandingPage/binocular_icon.webp" alt="Binocular Icon" width={240} height={240} />
          <Image className="absolute bottom-28 left-28 inline-block max-md:w-28 max-md:left-8 max-md:bottom-12" src="/LandingPage/scout_badge_icon.webp" alt="Scout Badge Icon" width={180} height={180} />
        </section>
      </section>


      {/* FEATURE SECTION */}
      <FeatureSection featureSection={featureSection} />


      {/* TRUFFLE DIFFERENCE */}
      <section id="products" className="p-12 max-md:px-0 bg-white w-full" >
        <div className="text-center px-12">
          <div className="relative">
            <h2 className="font-display text-truffle-green-dark text-5xl font-bold mb-2 max-md:text-5xl text-center">
              <Image className="inline-block mr-8 -scale-x-90 max-md:w-6 max-md:mr-2" src="/LandingPage/grass.svg" alt="Truffle Grass Icon" width={44} height={44} />
              THE <span className="text-truffle-green-light">TRUFFLE</span> DIFFERENCE
              <Image className="inline-block ml-8 max-md:w-6 max-md:ml-2" src="/LandingPage/grass.svg" alt="Truffle Grass Icon" width={44} height={44} />
            </h2>
          </div>

          <p className="font-body text-lg tracking-tight text-truffle-green-light/80 max-w-3xl mx-auto">
            See how we solve the real problems of home searching
          </p>
        </div>

        <div className="mt-12 gap-8 flex flex-col items-center max-lg:gap-16">
          <ProductShowcase data={productSection.feature1} />
          <ProductShowcaseSolidStyle data={productSection.feature2} className="max-md:px-6 max-md:rounded-6xl flex-row-reverse bg-truffle-green-light px-8 py-8 rounded-4xl" />
          <ProductShowcase data={productSection.feature3} />
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="w-[90%] mx-auto flex flex-col items-center gap-24 max-lg:gap-16 max-md:gap-12" >
        <div className="text-center">
          <div className="relative">
            <h2 className="font-display text-truffle-green-light text-5xl font-bold mb-2">
              <span className="text-truffle-green-dark">OUR</span> PRICING
              <Image className="inline-block ml-8 -translate-y-4 max-md:ml-2" src="/LandingPage/star_icon.svg" alt="Truffle Star Icon" width={44} height={44} />
            </h2>
          </div>

          <p className="font-body text-lg tracking-tight text-truffle-green-light/80 max-w-3xl mx-auto">
            Choose the plan that matches your home search journey
          </p>
        </div>

        <PricingCards />
      </section>

      {/* BLOG SECTION */}
      <section id="blog" className="w-[90%] max-md:w-full mx-auto flex flex-col items-center gap-12" >
        <div className="text-center">
          <h2 className="font-display text-truffle-green-light text-5xl font-bold mb-2">
            BLOGS
          </h2>
        </div>

        <div className="flex gap-6 justify-center flex-wrap">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} data={blog} />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <section className="py-12 px-20 max-md:px-10 max-md:rounded-tr-[60px] max-md:rounded-tl-[60px] rounded-tr-[100px] rounded-tl-[100px] w-full bg-truffle-green text-white" >
        <FooterSection />
      </section>
    </div >
  );
}
