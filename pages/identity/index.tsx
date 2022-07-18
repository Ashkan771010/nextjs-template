import Link from "next/link";
import Layout from "../../components/common/layout";
import { useRouter } from "next/router";
import IdentityInformation from "../../components/IdentityInformation";
import useCity from "../../hooks/useCity";
import useProvince from "../../hooks/useProvince";

const IdentityInformationPage: React.FC = () => {
  const router = useRouter();
  const { provinces } = useProvince();
  const { cities } = useCity(1);

  return (
    <Layout>
      <button onClick={() => {
        router.replace("/testBack");
      }}>صفحه بعد 2</button>
      {cities && provinces && (
        <IdentityInformation cities={cities} provinces={provinces} />
      )}
    </Layout>
  );
};

export default IdentityInformationPage;
