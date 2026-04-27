const Forbidden = () => {
  const handleBack = () => {
    window.open(
      "https://grupobimbo.csod.com/LMS/catalog/Welcome.aspx?tab_page_id=-67&tab_id=-1",
      "_self"
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white">
      <div
        className="bg-scroll hidden md:block col-span-1 lg:col-span-2 bg-right"
        style={{
          backgroundImage:
            "url(https://pruebabucketsawspruebas.s3.amazonaws.com/FondoG.jpg)",
          height: "100vh",
          width: "100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="flex items-center justify-center m-auto">
        <div className="m-auto flex flex-col items-center justify-center gap-10 p-4">
          <h1 className="text-6xl">Lo sentimos</h1>
          <h2 className="text-2xl text-center">
            Por el momento no cuentas con acceso a esta sección
          </h2>
          <button
            onClick={handleBack}
            className="bg-bmb-blue text-white px-6 py-2 rounded font-medium hover:bg-bmb-secundary transition-colors"
          >
            Regresar a GB Talent
          </button>
        </div>
      </div>
    </div>
  );
};
export default Forbidden;
