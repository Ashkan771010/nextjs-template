import Link from "next/link";
import Layout from "../../components/common/layout";
import IdentityInformation from "../../components/IdentityInformation";
import useCity from "../../hooks/useCity";
import useProvince from "../../hooks/useProvince";

const IdentityInformationPage: React.FC = () => {
  const { provinces } = useProvince();
  const { cities } = useCity(1);

  return (
    <Layout>
      <h3>
        <Link href="/testBack"> صفحه بغد</Link>
      </h3>
      {cities && provinces && (
        <IdentityInformation cities={cities} provinces={provinces} />
      )}
    </Layout>
  );
};

export default IdentityInformationPage;
