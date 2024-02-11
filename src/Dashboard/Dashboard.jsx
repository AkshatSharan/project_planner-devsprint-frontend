import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegMoon } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";

const Section = styled.section`
  background-color: var(--background-500);
`;

const DivContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default function Dashboard() {
  return (
    <Section>
      <DivContainer>
        <DashboardHeader />
        <LeftPane />
        <ProjectsSection />
        <RightPane />
      </DivContainer>
    </Section>
  );
}

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 4rem;
  max-height: 8rem;
`;

const DivWelcome = styled.div`
  display: flex;
  align-items: stretch;
  font-size: 4rem;
  color: var(--green);
  gap: 1rem;

  p {
    color: #fff;
    font-size: 2.4rem;
  }
`;

const DivCTA = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ButtonCTA = styled.div`
  background-color: var(--green);
  font-size: 2rem;
  font-weight: 600;
  padding: 0.6rem 1rem;
  border-radius: 2rem;
`;

const DivIcon = styled.div`
  font-size: 3.2rem;
  color: var(--green);
`;

const DivIconNotification = styled.div`
  font-size: 4.2rem;
  color: var(--green);
`;

function DashboardHeader() {
  return (
    <Header>
      <DivWelcome>
        <GiHamburgerMenu />
        <p>Welcom back, Anurag</p>
      </DivWelcome>
      <DivCTA>
        <ButtonCTA>Join Project</ButtonCTA>
        <ButtonCTA>Create Project</ButtonCTA>
        <DivIcon>
          <FaRegMoon />
        </DivIcon>
        <DivIconNotification>
          <IoIosNotificationsOutline />
        </DivIconNotification>
        <DivAvatar>
            
        </DivAvatar>
      </DivCTA>
    </Header>
  );
}

function LeftPane() {
  return null;
}

function RightPane() {
  return null;
}

function ProjectsSection() {
  return null;
}
