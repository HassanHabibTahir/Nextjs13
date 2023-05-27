import { Metadata } from "next";

export const dynamic = "force-static"; // no necessary, just for demonstration

export const metadata: Metadata = {
  title: "About Us",
  description: "About NextSpace",
};
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>we are a social media company!</p>
    </div>
  );
};

export default About;
