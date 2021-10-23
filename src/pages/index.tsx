import type { NextPage } from "next";
import SafeEnvironment from "@components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "@components/data-display/PageTitle/PageTitle";
import UserInformation from "@components/data-display/UserInformation/UserInformation";

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      ></PageTitle>
      <UserInformation
        picture={"https://github.com/jessicasiiq.png"}
        name={"Jéssica"}
        rating={3}
        description={"Blumenau, SC"}
      />
      <UserInformation
        picture={
          "http://cdn.funnyisms.com/ae749b3d-a4e8-4664-969f-ec8b65b2fa56.jpg"
        }
        name={"Yasuo Periquito"}
        rating={1}
        description={"Ionia"}
      />
      <UserInformation
        picture={
          "https://s2.glbimg.com/IPQR8ClRWUckhEl2PnhFAFSBj-k=/0x0:1920x1076/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/U/U/KEpL1mRPC9FljFMBupJA/sonic.jpg"
        }
        name={"Sonic"}
        rating={4}
        description={"Sega"}
      />
      <UserInformation
        picture={"/"}
        name={"Cuca"}
        rating={0}
        description={"Sítio do Pica-Pau Amarelo"}
      />
    </div>
  );
};

export default Home;
