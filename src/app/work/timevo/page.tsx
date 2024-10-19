import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SwiperComponent from "@/components/Swiper";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col gap-60">
      <div>
        <Header dots={false} />
      </div>
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-center text-3xl font-bold mt-10 mb-5 text-main">
          Timevo
        </h1>
        <a
          href={"https://github.com/liviu5m/timevo"}
          target="_blank"
          className="mb-10 px-10 py-5 bg-main text-white text-xl flex items-center justify-center gap-5 rounded-2xl border border-[#565360] hover:bg-transparent hover:scale-105 hover:text-[#565360] shadow-md shadow-[#565360] hover:shadow-xl hover:shadow-[#565360]"
        >
          <FontAwesomeIcon icon={faGithub} />
          Github
        </a>
        <SwiperComponent project={"timevo"} />
        <div className="w-[60%] max-sm:w-4/5 mt-36 mb-20">
          <h2 className="text-xl font-bold my-5">Timevo</h2>
          <p className="text-justify">
            Timevo is an innovative e-commerce application dedicated to watch
            enthusiasts, designed and built using Next.js to deliver a seamless
            and engaging shopping experience. With a focus on user-friendly
            interfaces and robust functionality, Timevo aims to simplify the
            online shopping process for customers while providing powerful
            management tools for administrators.
          </p>
          <h3 className="text-xl font-bold mt-5">Features</h3>
          <ol className="list-decimal mt-5 ml-3">
            <li>
              <h4 className="text-lg">User Experience and Authentication</h4>
              <p className="text-justify">
                At the heart of Timevo is a secure user authentication system,
                which allows users to easily sign up, log in, and log out of
                their accounts. This feature ensures personalized experiences,
                enabling customers to save their favorite watches and manage
                their orders effortlessly. Upon registration, users can create
                detailed profiles that enhance their shopping journey, making it
                easier to track purchases and receive tailored recommendations
                based on their preferences.
              </p>
            </li>
            <li className="mt-3">
              <h4 className="text-lg">Dynamic Shop Page</h4>
              <p className="text-justify">
                The Timevo shop page is designed to captivate customers with a
                diverse collection of watches, showcasing high-quality images
                and detailed descriptions. Each watch comes with specifications
                that highlight its unique features, such as brand, model,
                material, and functionality. To streamline the shopping
                experience, the platform incorporates advanced filtering
                options, allowing users to refine their search by brand, price
                range, color, and other criteria. This ensures that customers
                can quickly find their ideal timepiece without feeling
                overwhelmed by choices.
              </p>
            </li>
            <li className="mt-3">
              <h4 className="text-lg">Shopping Cart Functionality</h4>
              <p className="text-justify">
                Timevo enhances the shopping experience further with a robust
                shopping cart feature. Users can easily add watches to their
                carts, specifying their preferred quantity and color options for
                each item. The application automatically calculates the total
                price based on the selected items, ensuring transparency and
                helping users make informed purchasing decisions. Additionally,
                customers can view their cart at any time, modify quantities, or
                remove items before proceeding to checkout, providing
                flexibility and control over their shopping experience.
              </p>
            </li>
            <li className="mt-3">
              <h4 className="text-lg">Admin Dashboard</h4>
              <p className="text-justify">
                For administrators, Timevo includes a comprehensive and
                intuitive admin dashboard that empowers them to manage the
                inventory effectively. Admins have the ability to add, update,
                or delete watch models, ensuring that the shop is always stocked
                with the latest and most sought-after products. This feature
                allows for real-time inventory management, enabling
                administrators to respond quickly to market demands and customer
                preferences. The dashboard also includes an order management
                system, allowing admins to view and handle customer orders
                efficiently. Admins can track order statuses, manage shipping
                details, and communicate with customers regarding their
                purchases, all from one centralized interface. This streamlined
                process helps to improve operational efficiency and enhance
                customer satisfaction.
              </p>
            </li>
            <li className="mt-3">
              <h4 className="text-lg">Recipe Finder and Calorie Tracker</h4>
              <p className="text-justify">
                Achieving a balanced diet is crucial for personal growth. The
                Recipe Finder integrates with the Meal DB API, allowing you to
                explore a wide variety of healthy recipes based on your dietary
                preferences and restrictions. Each recipe includes nutritional
                information, helping you make informed decisions. Additionally,
                the Calorie Tracker enables you to log your daily food intake
                and monitor your nutrition goals, ensuring you stay on track for
                a healthier lifestyle.
              </p>
            </li>
            <li className="mt-3">
              <h4 className="text-lg">Technological Stack</h4>
              <p className="text-justify">
                Timevo leverages a modern tech stack to deliver its features and
                functionalities. The frontend is built using Next.js and React,
                offering a responsive and fast user experience. Tailwind CSS is
                utilized for styling, ensuring a sleek and modern design that
                enhances the overall aesthetics of the platform. On the backend,
                technologies such as Node.js and Express are employed to handle
                user authentication and data management, while a database like
                MongoDB or MySQL stores user information, product details, and
                order history.
              </p>
            </li>
          </ol>
          <h3 className="text-xl font-bold mt-5 mb-5">Conclusion</h3>
          <p className="text-justify">
            In conclusion, Timevo is set to revolutionize the online watch
            shopping experience by combining a user-friendly interface with
            powerful administrative tools. Whether you're a customer searching
            for the perfect watch or an admin managing the inventory, Timevo
            aims to deliver efficiency and satisfaction at every step. With its
            focus on security, transparency, and ease of use, Timevo is poised
            to become a go-to destination for watch enthusiasts looking to
            enhance their collection and shopping experience. Through continuous
            updates and feature enhancements, Timevo will evolve alongside its
            users, ensuring that it remains at the forefront of the e-commerce
            landscape.
          </p>
        </div>
      </div>
      <div>
        <Footer type={"not-full"} />
      </div>
    </div>
  );
}
