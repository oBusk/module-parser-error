import pacote from "pacote";

const AppPage = async () => {
  const manifest = await pacote.manifest("next@latest");

  return (
    <>
      <h1>App Page</h1>
      <pre>{JSON.stringify(manifest, null, 2)}</pre>
    </>
  );
};

export default AppPage;
