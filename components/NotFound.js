import Image from "next/image";
import { useContext } from "react";
import { SearchContext } from "../layout/Layout";
import { NotFoundContainer } from "../styles/Home.styled";
import TitleDesc from "./TitleDesc";

const NotFound = () => {
  const { handleClickHere } = useContext(SearchContext);

  return (
    <div>
      <TitleDesc title="Not Found" desc="Oops, No result found!" />
      <NotFoundContainer>
        <div>
          <iframe
            src="https://embed.lottiefiles.com/animation/91361"
            style={{ width: "40vw", height: "50vh" }}
            frameBorder={0}
          ></iframe>
          {/* <Image
            // src="/assets/notResultFound.png"
            src="https://lottiefiles.com/91361-page-not-found-animation"
            alt="no search found"
            width={300}
            height={250}
            style={{
              zIndex: "-1",
            }}
          /> */}
          <p>
            {`Please search as "Sourabh Nerlekar" or `}
            <a onClick={handleClickHere}>Click here.</a>
          </p>
        </div>
      </NotFoundContainer>
    </div>
  );
};

export default NotFound;
