import Avatar from "@/components/Avatar";
import Bounded from "@/components/Bounded";
import ResumeButton from "@/components/ResumeButton";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import profile from "./profile.jpeg"
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";


export type BiographyProps = SliceComponentProps<Content.BiographySlice>;


const Biography = ({ slice }: BiographyProps): JSX.Element => {
  
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <Heading size="xl" className="col-start-1">
          About Me
        </Heading>

        <div className="prose prose-xl prose-slate prose-invert col-start-1">
          Hi, I&apos;m Steven. I&apos;m currently a second-year student at the University of Waterloo studying data science. I&apos;m passionate about machine learning, full-stack development, and of course, data science

          <br/>
          <br/>

          I have a deep understanding with the MERN stack (MongoDB, Express.js, React.js, Node.js), which I used to create a variety of full-stack applications, both for applicable purposes and personal projects.

          
          I also have experience with NLP, machine learning, and data science through the use of various python libraries 

          <br/>
          <br/>
          I&apos;m passionate about these technologies because of the endless possibilities they offer for innovation and problem-solving. From crafting seamless user experiences to leveraging data-driven insights for impactful solutions, I love building applications that make a tangible difference in people&apos;s lives. 

          <br/>
          <br/>
          I&apos;m eager to collaborate with others to create technology that can shape a brighter and more inclusive future. 
        
          When I&apos;m not programming, I enjoy weightlifting, cooking, basketball, and playing chess.
        </div>
        <ResumeButton
          linkField= "https://github.com/StevenShiGit/Resume/blob/main/Steven_most_recent_res.pdf"
          label={slice.primary.button_text}
        />

        <Avatar
          image={profile}
          className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
        />
      </div>
    </Bounded>
  );
};

export default Biography;
