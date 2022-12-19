import PeopleAlsoAsk from "../components/peopleAlsoAsk";
import RelatedSearch from "../components/relatedSearch";
import ProjectVideos from "../components/projectVideos";
import SideBar from "../components/SideBar";
import TitleDesc from "../components/TitleDesc";
import Image from "next/image";
import { AiOutlineDownload } from "react-icons/ai";
import {
  Text,
  Heading,
  ProjectList,
  Company,
  WorkExperience,
  HomeContainer,
  InfoContainer,
  MobileProfile,
  MobileHeading,
  ResumeWrapper,
} from "../styles/Home.styled";
import { info } from "../constants/constants";

const Home = () => {
  return (
    <div>
      <TitleDesc
        title="Sourabh's Portfolio"
        desc="This is Google theme portfolio created by Sourabh Nerlekar using Nextjs Framework."
      />
      <HomeContainer>
        <InfoContainer>
          <Heading>{info.heading}</Heading>
          <MobileHeading>{info.mobileHeading}</MobileHeading>
          <Text>{info.description}</Text>
          <MobileProfile>
            <Image
              style={{ zIndex: "-1" }}
              src="/assets/ProfilePhoto.jpg"
              alt="Profile"
              width={180}
              height={220}
            />
          </MobileProfile>
          <span>
            <ResumeWrapper
              href="https://bit.ly/Resume_Sourabh"
              target="_blank"
              rel="noopener noreferrer"
            >
              {`Sourabh's Resume`}
              <AiOutlineDownload size={19} />
            </ResumeWrapper>
          </span>
          <WorkExperience>
            <Heading style={{ display: "block" }}>{info.heading}</Heading>
            <ProjectList>
              {info.projects.map(({ title, description }) => {
                return (
                  <li key={title}>
                    <strong>{title}</strong> {description}
                  </li>
                );
              })}
            </ProjectList>
          </WorkExperience>
          <PeopleAlsoAsk />
          <ProjectVideos />
          <RelatedSearch />
        </InfoContainer>
        <SideBar />
      </HomeContainer>
    </div>
  );
};

export default Home;
