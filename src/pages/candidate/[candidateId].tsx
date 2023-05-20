import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const router = useRouter();
  const candidateId = router.query.candidateId as string;
  const candidate = api.vote.getCandidate.useQuery({
    candidateId,
  });

  console.log(candidate);

  return (
    <>
      <Head>
        <title>KAZANIYORUZ</title>
        <meta name="description" content="Generated by uzanenis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>Candidate</main>
    </>
  );
};

export default Home;