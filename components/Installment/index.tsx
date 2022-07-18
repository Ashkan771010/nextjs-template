import React, { useState, useEffect } from "react";

import InstallmentDetailsCard from "@components/InstallmentDetailsCard";
import InstallmentCard from "@components/InstallmentCard";

import { BreadCrumb } from "@theme/ui-components";
import { useRouter } from "next/router";

const Installment: React.FC<any> = ({ data }) => {
  const [breadCrumbData, setBreadCrumbData] = useState<any>([]);
  const [loanId, setLoanId] = useState<number>()
  const router = useRouter();

  useEffect(() => {
    if (data) {
      const { productName } = data?.detail;
      setBreadCrumbData(["سوابق خرید", productName]);
    }
  }, [data]);

  useEffect(() => {
    if(router.isReady) {
      setLoanId(Number(router.query.loanId))
    }
    localStorage.setItem("loanId", String(loanId))
  }, [loanId, router.isReady, router.query.loanId])

  return (
    <>
      <BreadCrumb data={breadCrumbData} />
      {data && <InstallmentDetailsCard detail={data.detail} />}
      {data?.installments?.map((installment: any, index: number) => (
        <InstallmentCard
          key={index.toString()}
          amount={installment.amount}
          date={installment?.date}
          installmentNumber={installment?.installmentNumber}
          isCurrentInstallment={installment?.isCurrentInstallment}
          paid={installment?.paid}
          paymentId={installment?.paymentId}
          installmentId={installment?.installmentId}
        />
      ))}
    </>
  );
};

export default Installment;
