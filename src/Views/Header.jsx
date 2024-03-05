import SubTitle from "../Components/SubTitle";
import Title from "../Components/Title";
import HeaderLayout from "../Template/HeaderLayout";

const Header = () => {
  return (
    <HeaderLayout>
      <Title title="Lista" />
      <SubTitle subTitle="Haz la lista de invitados para tu boda"></SubTitle>
    </HeaderLayout>
  );
};

export default Header;
