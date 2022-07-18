import { useRouter } from "next/router";
import { useEffect } from "react";

const TestBack = () => {
    const router = useRouter();

    console.log(router.asPath)

    useEffect(() => {
      router.beforePopState(({ as }) => {
        if (as !== router.asPath) {
          router.push("/")
          return false;
        }
        return true;
      });

    //   return () => {
    //     router.beforePopState(() => true);
    //   };
    }, [router]); 

    return (
        <>
            <h3>next page hi im ashkan click back</h3>
        </>
    )
}

export default TestBack;