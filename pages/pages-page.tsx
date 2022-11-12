import { GetServerSideProps, NextPage } from "next";
import pacote from "pacote";

interface Props {
  manifest: pacote.AbbreviatedManifest & pacote.ManifestResult;
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const manifest = await pacote.manifest("next@latest");

  return {
    props: {
      manifest,
    },
  };
};

const PagesPage: NextPage<Props> = ({ manifest }) => {
  return (
    <>
      <h1>Pages Page</h1>
      <pre>{JSON.stringify(manifest, null, 2)}</pre>
    </>
  );
};

export default PagesPage;
