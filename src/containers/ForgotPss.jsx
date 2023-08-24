import RetrievePss from "../components/RetrievePss";
import CodePss from "../components/CodePss";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CollaboratorsContext from "../context/collaborators";


const ForgotPss = () => {
  const navigate = useNavigate();
  const { sendCode, setSendCode } = useContext(CollaboratorsContext);

  function Cancel() {
    setSendCode(false);
    navigate("/");
  }

  function SendMail() {
    setSendCode(true);
  }

  useEffect(() => {
    Pss();
  }, [Pss, sendCode]);

  function Pss() {
    console.log(sendCode)
    if (sendCode) {
      return <CodePss handleCancel={Cancel} />;
    } else {
      return <RetrievePss handleCancel={Cancel} handleSendCode={SendMail} />;
    }
  }

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
        <Pss/>
      </div>
    </div>
  );
};
export default ForgotPss;
