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
          SelfMastery
        </h1>
        <a
          href={"https://github.com/liviu5m/SelfMastery"}
          target="_blank"
          className="mb-10 px-10 py-5 bg-main text-white text-xl flex items-center justify-center gap-5 rounded-2xl border border-[#565360] hover:bg-transparent hover:scale-105 hover:text-[#565360] shadow-md shadow-[#565360] hover:shadow-xl hover:shadow-[#565360]"
        >
          <FontAwesomeIcon icon={faGithub} />
          Github
        </a>
        <SwiperComponent project={"selfmastery"} />
        <div className="w-[60%] max-sm:w-4/5 mt-36 mb-20">
          <h2 className="text-xl font-bold my-5">
            SelfMastery: Your Ultimate Personal Development Platform
          </h2>
          <p className="text-justify">
            SelfMastery is an all-in-one platform designed to help you achieve
            personal growth, self-improvement, and mastery over your habits,
            health, and knowledge. Whether you are looking to build better
            habits, expand your knowledge through reading, track your fitness
            journey, or maintain a balanced diet, SelfMastery is your go-to
            resource. This platform combines cutting-edge APIs and intuitive
            features to create a personalized and dynamic experience tailored to
            your self-development goals.
          </p>
          <h3 className="text-xl font-bold mt-5">Features</h3>
          <ol className="list-decimal mt-5 ml-3">
            <li>
              <h4 className="text-lg">Habits Compartment</h4>
              <p className="text-justify">
                The Habits Compartment empowers you to build and track habits
                that align with your goals. Whether it’s establishing a morning
                routine, practicing mindfulness, or developing a consistent
                exercise schedule, you can log and visualize your progress. Set
                reminders, track streaks, and receive motivating insights as you
                cultivate habits that enhance your overall well-being.
              </p>
            </li>
            <li className="mt-3">
              <h4 className="text-lg">Online Library</h4>
              <p className="text-justify">
                SelfMastery’s Online Library integrates the Google Books API,
                allowing you to search, explore, and save a vast collection of
                books. Discover books across various genres, from self-help and
                personal development to fitness, nutrition, and productivity.
                The library also offers personalized recommendations based on
                your interests and goals, making it easier than ever to find the
                right books for your growth journey.
              </p>
            </li>
            <li className="mt-3">
              <h4 className="text-lg">Journaling System</h4>
              <p className="text-justify">
                Reflecting on your experiences and thoughts is key to
                self-discovery. Our journaling system offers a dedicated space
                for you to log your daily reflections, achievements, and
                challenges. With customizable prompts and sections for tracking
                spiritual, mental, and physical growth, journaling becomes a
                powerful tool for monitoring your progress and achieving greater
                self-awareness.
              </p>
            </li>
            <li className="mt-3">
              <h4 className="text-lg">Journey Tracker</h4>
              <p className="text-justify">
                Track your personal development journey through the Journey
                Tracker. Set specific goals, monitor your progress, and
                visualize milestones along the way. This feature provides a
                comprehensive view of your achievements, helping you celebrate
                successes and identify areas for improvement.
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
              <h4 className="text-lg">Gym Coach Split Finder</h4>
              <p className="text-justify">
                Our Gym Coach Split Finder feature helps you create personalized
                workout plans tailored to your fitness goals. Whether you want
                to build muscle, increase endurance, or enhance overall fitness,
                you can select from various training splits based on your
                preferences and experience level. The feature includes a library
                of exercises, allowing you to customize your routine with
                detailed instructions and tips.
              </p>
            </li>
            <li className="mt-3">
              <h4 className="text-lg">Exercise Visualization</h4>
              <p className="text-justify">
                Enhance your workout experience with our Exercise Visualization
                tool, which integrates with the Exercise DB API. This feature
                provides animated demonstrations of various exercises, ensuring
                you understand the correct form and technique. Whether you’re a
                beginner or an experienced gym-goer, this tool helps you
                optimize your workouts and reduce the risk of injury.
              </p>
            </li>
          </ol>
          <h3 className="text-xl font-bold mt-5 mb-5">Conclusion</h3>
          <p className="text-justify">
            SelfMastery is more than just a platform; it's a comprehensive
            ecosystem designed to support your journey of personal development.
            By seamlessly integrating habit tracking, an extensive online
            library, a reflective journaling system, personalized fitness
            planning, and nutrition management, SelfMastery empowers you to take
            control of your growth. Join us today and start your journey towards
            self-mastery, one habit at a time!
          </p>
        </div>
      </div>
      <div>
        <Footer type={"not-full"} />
      </div>
    </div>
  );
}
