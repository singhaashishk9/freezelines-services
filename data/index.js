import logoDark from "@/images/logo.png";
export const Logo = {
  dark: logoDark
};

export const NavLinksData = [
  {
    name: "Home",
    url: "/",
    // subItems: [
    //   {
    //     name: "Home 01",
    //     url: "/"
    //   },
    //   {
    //     name: "Home 02",
    //     url: "/index-2"
    //   }
    // ]
  },
  {
    name: "About",
    url: "/about"
  },
  // {
  //   name: "Services",
  //   url: "/services",
  //   subItems: [
  //     {
  //       name: "Services",
  //       url: "/service"
  //     },
  //     {
  //       name: "Service Details",
  //       url: "/#"
  //     }
  //   ]
  // },
  // {
  //   name: "Blog",
  //   url: "/blog",
  //   subItems: [
  //     {
  //       name: "Blog Page",
  //       url: "/blog"
  //     },
  //     {
  //       name: "Blog Details",
  //       url: "/blog-details"
  //     }
  //   ]
  // },
  {
    name: "Contact",
    url: "/contact"
  }
];

export const TopbarInfos = [
  {
    icon: "icon-placeholder",
    tagLine: "Address",
    text: "Orchid Square, Thane",
    url: "#"
  },
  {
    icon: "icon-phone-call",
    tagLine: "Call Now",
    text: "+91 7798486823",
    url: "tel:666-888-000"
  },
  {
    icon: "icon-clock",
    tagLine: "Open Hours",
    text: " Mon-Sat: 9am - 6pm",
    url: "#"
  }
];

import slideOneImage1 from "@/images/slider/slider-1.jpg";
import slideOneImage2 from "@/images/slider/slider-2.jpg";
import slideOneImage3 from "@/images/slider/slider-3.jpg";

export const SlideOneData = [
  {
    backgroundImage: slideOneImage1,
    title: "HVAC Maintenance Specialist",
    text: "Choose the Best Company",
    button: "GET A FREE QUOTE",
    url: "/contact"
  },
  {
    backgroundImage: slideOneImage2,
    title: "Installation Services & Repair",
    text: "Reliable Air Conditioning",
    button: "GET A FREE QUOTE",
    url: "/contact"
  },
  {
    backgroundImage: slideOneImage3,
    title: "Heating and Air Conditioning Specialist",
    text: "Choose the Best Company",
    button: "GET A FREE QUOTE",
    url: "/contact"
  }
];

import slideOneImage4 from "@/images/slider/slider-4.jpg";
import slideOneImage5 from "@/images/slider/slider-5.jpg";

export const SlideTwoData = [
  {
    backgroundImage: slideOneImage4,
    title: "Heating and Air Conditioning Specialis",
    button: "GET A FREE QUOTE",
    url: "/contact"
  },
  {
    backgroundImage: slideOneImage5,
    title: "Keep your family happy this winter, and warm.",
    button: "GET A FREE QUOTE",
    url: "/contact"
  },
  {
    backgroundImage: slideOneImage4,
    title: "Heating and Air Conditioning Specialist",
    button: "GET A FREE QUOTE",
    url: "/contact"
  }
];

export const FeatureOneData = [
  // {
  //   icon: "icon-wallet",
  //   title: "No Upfront Payments"
  // },
  {
    icon: "icon-diploma",
    title: "Satisfaction Guarantee"
  },
  {
    icon: "icon-big_clock",
    title: "Emergency Service"
  },
  {
    icon: "icon-handshake",
    title: "Fixed Right Promise"
  },
  {
    icon: "icon-mechanic",
    title: "3 Years Experience"
  }
];

export const AboutOneData = {
  title: "Heating and air conditioning repair and installation company",
  tagLine: "Welcome to Freezelines Services India Pvt.Ltd.",
  content:
    "Freezelines Services India Pvt Ltd is a trusted and established provider of comprehensive chiller services, repair, and spare parts supply. With a strong commitment to excellence and a team of highly trained engineers, we have been serving the cooling needs of industries  across India for several years",
  button: {
    url: "/about",
    label: "LEARN MORE"
  }
};

import serviceImage1 from "@/images/services/service-1.jpg";
import serviceImage2 from "@/images/services/service-2.jpg";
import serviceImage3 from "@/images/services/service-3.jpg";
import serviceImage4 from "@/images/services/service-4.jpg";
import serviceImage5 from "@/images/services/service-5.jpg";
import serviceImage6 from "@/images/services/service-6.jpg";

export const ServiceOneData = {
  title: "Our services",
  posts: [
    {
      image: serviceImage1,
      icon: "icon-snow",
      title: "Adiabatic System Installation for AirCooled Chillers",
      text: "Enhance the efficiency of your air-cooled chillers with our professional adiabatic system installation, ensuring optimal cooling performance and energy savings.",
      button: {
        label: "LEARN MORE",
        url: "/#"
      }
    },
    {
      image: serviceImage2,
      icon: "icon-fire",
      title: "Commissioning and Start-up for Chillers",
      text: "Ensure seamless operation of your chillers with our comprehensive commissioning and start-up services, designed for optimal performance",
      button: {
        label: "LEARN MORE",
        url: "/#"
      }
    },
    {
      image: serviceImage3,
      icon: "icon-ac",
      title: "Pump & Motor Repairing Service",
      text: "Restore the efficiency of your systems with our expert pump and motor repairing services, ensuring reliable performance and extended equipment life.",
      button: {
        label: "LEARN MORE",
        url: "/#"
      }
    },
    {
      image: serviceImage4,
      icon: "icon-ac",
      title: "Air Conditioner Installation Service",
      text: "Experience superior comfort with our professional air conditioner installation services, tailored to meet your cooling needs efficiently.",
      button: {
        label: "LEARN MORE",
        url: "/#"
      }
    },
    {
      image: serviceImage5,
      icon: "icon-ac",
      title: "Air-Cooled Chiller Epoxy Coating",
      text: "Protect and extend the life of your air-cooled chillers with our durable epoxy coating, providing superior resistance to corrosion and environmental damage.",
      button: {
        label: "LEARN MORE",
        url: "/#"
      }
    },
    {
      image: serviceImage6,
      icon: "icon-ac",
      title: "Chilled Water System Maintenance",
      text: "Ensure the reliability and efficiency of your chilled water systems with our comprehensive maintenance services, designed to prevent issues and optimize performance.",
      button: {
        label: "LEARN MORE",
        url: "/#"
      }
    }
    
  ]
};

export const CallToActionOneData = {
  title: "No overtime charges, 7 days a week",
  button: {
    url: "/contact",
    label: "GET A FREE QUOTE"
  }
};

export const CallToActionTwoData = {
  left: {
    text: "Air Conditioning Services",
    title: "Cool it down"
  },
  right: {
    text: "Heating Services",
    title: "Heat it up"
  }
};

import funfactShape from "@/images/shape/about-shape.png";

export const FunfactOneData = {
  shapeImage: funfactShape,
  title: "Numbers Speakers.",
  posts: [
    {
      count: 8870,
      text: "Air Conditioning Repairs and Install"
    },
    {
      count: 4760,
      text: "Air Conditioning Repairs and Install"
    },
    {
      count: 9032,
      text: "Air Conditioning Repairs and Install"
    }
  ]
};

import galleryOne1 from "@/images/gallery/gallery-1.jpg";
import galleryOne2 from "@/images/gallery/gallery-2.jpg";
import galleryOne3 from "@/images/gallery/gallery-3.jpg";
import galleryOne4 from "@/images/gallery/gallery-4.jpg";
import galleryOne5 from "@/images/gallery/gallery-5.jpg";
import galleryOne6 from "@/images/gallery/gallery-6.jpg";

export const GalleryOneData = [
  {
    title: "Maintenance and Repair",
    image: galleryOne1,
    url: "#"
  },
  {
    title: "Maintenance and Repair",
    image: galleryOne2,
    url: "#"
  },
  {
    title: "Maintenance and Repair",
    image: galleryOne3,
    url: "#"
  },
  {
    title: "Maintenance and Repair",
    image: galleryOne4,
    url: "#"
  },
  {
    title: "Maintenance and Repair",
    image: galleryOne5,
    url: "#"
  },
  {
    title: "Maintenance and Repair",
    image: galleryOne6,
    url: "#"
  }
];

import testimonial1 from "@/images/testimonial/testimonial-1.jpg";
import testimonial2 from "@/images/testimonial/testimonial-2.jpg";
import testimonial3 from "@/images/testimonial/testimonial-3.jpg";

export const TestimonialOneData = {
  title: "Testimonials",
  posts: [
    {
      image: null,
      content:
        "At Freezelines Services India Pvt Ltd, our vision is to be the premier provider of chiller services and solutions in India, recognized for our unwavering commitment to excellence, innovation, and customer satisfaction",
      name: "VISION",
      designation: ""
    },
    // {
    //   image: testimonial2,
    //   content:
    //     "This is due to their excellent service, competitive pricing and customer support . It's throughly refresing to get such a personal touch.",
    //   name: "Max Dunn",
    //   designation: "Developer"
    // },
    // {
    //   image: testimonial3,
    //   content:
    //     "This is due to their excellent service, competitive pricing and customer support . It's throughly refresing to get such a personal touch.",
    //   name: "Alberta Potter",
    //   designation: "Director"
    // },
    // {
    //   image: testimonial1,
    //   content:
    //     "This is due to their excellent service, competitive pricing and customer support . It's throughly refresing to get such a personal touch.",
    //   name: "Della Barnett",
    //   designation: "CEO"
    // },
    // {
    //   image: testimonial2,
    //   content:
    //     "This is due to their excellent service, competitive pricing and customer support . It's throughly refresing to get such a personal touch.",
    //   name: "Max Dunn",
    //   designation: "Developer"
    // },
    // {
    //   image: testimonial3,
    //   content:
    //     "This is due to their excellent service, competitive pricing and customer support . It's throughly refresing to get such a personal touch.",
    //   name: "Alberta Potter",
    //   designation: "Director"
    // }
  ]
};

export const FooterBottomData = {
  social: [
    {
      icon: "fa fa-twitter",
      url: "#"
    },
    {
      icon: "fa fa-facebook-f",
      url: "#"
    },
    {
      icon: "fa fa-linkedin",
      url: "#"
    },
    {
      icon: "fa fa-youtube-play",
      url: "#"
    }
  ]
};

export const FooterInfo = [
  {
    icon: "icon-placeholder",
    tagLine: "Address",
    text: "Orchid Square, Thane",
    url: "#"
  },
  {
    icon: "icon-contact",
    tagLine: "Email",
    text: "support@freezelinesservices.com",
    url: "mailto:support@freezelinesservices.com"
  },
  {
    icon: "icon-clock",
    tagLine: "Open Hours",
    text: " Mon-Sat: 9am - 6pm",
    url: "#"
  }
];

export const FooterWidgets = {
  about: {
    title: "About Freezelines Services India Pvt.Ltd.",
    text: "At Freezelines Services, We don’t just provide resi-dential and commercial heating and air conditioning services; we make people’s lives easier. Better.",
    tagLine: "Get a Quote",
    phone: "+91 7798486823"
  },
  linkOne: {
    title: "Quick Links",
    menu: [
      {
        lable: "Services",
        url: "#"
      },
      {
        lable: "Request Appointment",
        url: "#"
      },
      {
        lable: "Site Map",
        url: "#"
      },
      {
        lable: "About Us",
        url: "/about"
      }
    ]
  },
  linkTwo: {
    menu: [
      // {
      //   lable: "Careers",
      //   url: "#"
      // },
      {
        lable: "Privacy Policy",
        url: "#"
      },
      // {
      //   lable: "Change Location",
      //   url: "#"
      // },
      // {
      //   lable: "Expert Tips",
      //   url: "#"
      // },
      {
        lable: "Terms & Conditions",
        url: "#"
      }
    ]
  }
};

import blog1 from "@/images/blog/blog-1.jpg";
import blog2 from "@/images/blog/blog-2.jpg";
import blog3 from "@/images/blog/blog-3.jpg";
import blog4 from "@/images/blog/blog-4.jpg";
import blog5 from "@/images/blog/blog-5.jpg";
import blog6 from "@/images/blog/blog-6.jpg";

export const BlogOneData = {
  title: "Our Goals",
  posts: [
    {
      image: blog1,
      date: "",
      author: "",
      commentCount: null,
      title: "Customer Satisfaction",
      url: "/blog-details",
      text: "Ensuring high levels of customer satisfaction by providing quality chiller services, repairs, and maintenance that meet or exceed client expectations."
    },
    {
      image: blog2,
      date: "",
      author: "",
      commentCount: null,
      title: "Quality of Service",
      url: "/blog-details",
      text: "Delivering reliable and efficient service that minimizes downtime for clients and maximizes the lifespan and performance of their cooling equipment"
    },
    {
      image: blog3,
      date: "",
      author: "",
      commentCount: null,
      title: "Long-Term Partnerships",
      url: "/blog-details",
      text: "Building and maintaining long-term partnerships and relationships with clients, suppliers, and stakeholders."
    }
  ]
};

export const BlogTwoData = {
  posts: [
    {
      image: blog1,
      date: "",
      author: "admin",
      commentCount: 3,
      title: "How does a ductless heat pump work?",
      url: "/blog-details",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration."
    },
    {
      image: blog2,
      date: "",
      author: "admin",
      commentCount: 3,
      title: "Simple hack to improve A/C efficiency",
      url: "/blog-details",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration."
    },
    {
      image: blog3,
      date: "",
      author: "admin",
      commentCount: 3,
      title: "Preparing your home before vacation",
      url: "/blog-details",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration."
    },
    {
      image: blog4,
      date: "",
      author: "admin",
      commentCount: 3,
      title: "Heating and cooling safety issues",
      url: "/blog-details",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration."
    },
    {
      image: blog5,
      date: "",
      author: "admin",
      commentCount: 3,
      title: "Don’t neglect your outdoor unit",
      url: "/blog-details",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration."
    },
    {
      image: blog6,
      date: "",
      author: "admin",
      commentCount: 3,
      title: "Have your system professionally inspected",
      url: "/blog-details",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration."
    }
  ]
};

export const VideoOneData = {
  title: "Watch how we work",
  id: "8DP4NgupAhI"
};

export const AboutTwoData = {
  caption: " 3 <span>years experience</span> ",
  blockTitle: {
    title:
      "We are reliable partner for chiller maintenance, repairs, and comprehensive HVAC solutions.",
    tagline: "Why choose us"
  },
  lists: [
    {
      text: " Unmatched performance, satisfaction service guarantees"
    },
    {
      text: " Experts in chiller maintenance, repairs, and HVAC solutions."
    },
    {
      text: " Utilizing the latest tools for efficient, long-lasting repairs."
    },
    {
      text: " Personalized service with a commitment to your satisfaction."
    },
    {
      text: " Professionals delivering reliable service."
    },
    {
      text: " Clear communication and updates on service arrival"
    }
  ],
  offer: {
    tagline: "",
    text: "Delivering top-notch services to our valued customers."
  }
};

import team1 from "@/images/team/team-1.jpg";
import team2 from "@/images/team/team-2.jpg";
import team3 from "@/images/team/team-3.jpg";
import team4 from "@/images/team/team-4.jpg";

export const TeamOneData = {
  title: "Our Customers",
  posts: [
    {
      image: team1,
      name: "IIT Bombay",
      designation: "",
      social: [
        // {
        //   icon: "fa-facebook",
        //   url: "#"
        // },
        // {
        //   icon: "fa-twitter",
        //   url: "#"
        // },
        // {
        //   icon: "fa-youtube-play",
        //   url: "#"
        // }
      ]
    },
    {
      image: team2,
      name: "Nirmal Seeds Pvt. Ltd.",
      designation: "",
      social: [
        // {
        //   icon: "fa-facebook",
        //   url: "#"
        // },
        // {
        //   icon: "fa-twitter",
        //   url: "#"
        // },
        // {
        //   icon: "fa-youtube-play",
        //   url: "#"
        // }
      ]
    },
    {
      image: team3,
      name: "BASF Chemicals India Pvt Ltd",
      designation: "",
      social: [
        // {
        //   icon: "fa-facebook",
        //   url: "#"
        // },
        // {
        //   icon: "fa-twitter",
        //   url: "#"
        // },
        // {
        //   icon: "fa-youtube-play",
        //   url: "#"
        // }
      ]
    }
  ]
};

export const AboutThreeData = {
  blockTitle: {
    tagline: "Our success story",
    title: "Experience quality air conditioning service in broklyn new york"
  },
  summery:
    "Freezelines Services India Pvt Ltd is a trusted and established provider of comprehensive chiller services, repair, and spare parts supply. With a strong commitment to excellence and a team of highly trained engineers, we have been serving the cooling needs of industries across India for several years",
  button: {
    lable: "LEARN MORE",
    url: "/about"
  },
  box: [
    {
      icon: "icon-maintenance",
      title: "We make as cool again"
    },
    {
      icon: "icon-big-ac",
      title: "Keep your business cool"
    }
  ]
};

export const AboutFourData = {
  blockTitle: {
    title: "Trusted by our initial clients for <span>reliable</span> solutions.",
    text1:
      "Freezelines Services India Pvt Ltd is a trusted and established provider of comprehensive chiller services, repair, and spare parts supply. With a strong commitment to excellence and a team of highly trained engineers, we have been serving the cooling needs of industries across India for several years.",
    text2:
      "At Freezelines Services India Pvt Ltd, our vision is to be the premier provider of chiller services and solutions in India, recognized for our unwavering commitment to excellence, innovation, and customer satisfaction."
  }
};

export const BenefitOneData = {
  title: "Our benefits",
  posts: [
    {
      icon: "icon-big_clock",
      title: "Emergency Service",
      text: "There are many passages of lorem ipsum available but the majority have alteration."
    },
    {
      icon: "icon-wallet",
      title: "No Upfront Payment",
      text: "There are many passages of lorem ipsum available but the majority have alteration."
    },
    {
      icon: "icon-diploma",
      title: "Satisfaction Guarantee",
      text: "There are many passages of lorem ipsum available but the majority have alteration."
    },
    {
      icon: "icon-mechanic",
      title: "3 Years Experience",
      text: "There are many passages of lorem ipsum available but the majority have alteration."
    }
  ]
};

export const ServiceSidebarListData = [
  {
    icon: "icon-snow",
    title: "Cooling Services",
    list: [
      {
        label: "Air Conditioner Maintenance",
        url: "#"
      },
      {
        label: "Air Conditioner Repair",
        url: "#"
      },
      {
        label: "Air Conditioner Replacement",
        url: "#"
      },
      {
        label: "Ductless Split AC Systems",
        url: "#"
      },
      {
        label: "Duct Cleaning & Installation",
        url: "#"
      }
    ]
  },
  {
    icon: "icon-fire",
    title: "Heating Services",
    list: [
      {
        label: "Air Conditioner Maintenance",
        url: "#"
      },
      {
        label: "Air Conditioner Repair",
        url: "#"
      },
      {
        label: "Air Conditioner Replacement",
        url: "#"
      },
      {
        label: "Ductless Split AC Systems",
        url: "#"
      },
      {
        label: "Duct Cleaning & Installation",
        url: "#"
      }
    ]
  }
];

export const ServiceSidebarOtherData = [
  {
    icon: "icon-ac",
    title: "Other Services",
    content: {
      icon: "icon-support",
      title: "<span>Contact with us </span>+91 7798486823"
    }
  },
  {
    icon: "icon-building",
    title: "Commercial Services",
    content: {
      icon: "icon-building",
      title: "<span>Contact with us </span>+91 7798486823"
    }
  }
];

import comment1 from "@/images/comment-1.jpg";
import comment2 from "@/images/comment-2.jpg";

export const CommentPostData = [
  {
    name: "David Martin",
    image: comment1,
    time: "10 Nov, 2018 - 4:00 pm",
    text: "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et aliquet."
  },
  {
    name: "Jessica Brown",
    image: comment2,
    time: "10 Nov, 2018 - 4:00 pm",
    text: "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et aliquet."
  }
];
