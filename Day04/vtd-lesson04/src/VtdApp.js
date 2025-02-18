
import VtdClassComp from "./components/VtdClassComp";
import VtdFuncComp from "./components/VtdFuncComp";
import VtdFuncCompObj from "./components/VtdFuncCompObj";



function VtdApp() {
  // Object
  const users = {
    fullName: "Trần Văn A",
    age:20,
    phone: "024241841"
  }
  return (
    <div className="container border mt-3 bg-white">
        <h1 style={{textAlign:'center', color:'red', fontFamily:'initial'}}>Component, Props, State Lesson04 - Vũ Tiến Đức</h1>

      <hr/>
      <div className="alert alert-danger">
        <VtdFuncComp name="Vũ Tiến Đức" age="20" address="Ngõ 74, Phố Văn Phú" />
        <hr/>
        <VtdFuncComp name="Nguyễn Anh T*" age="22" address=" Hà Nội" />
      </div>
      <hr/>
      <div className="alert alert-info">
        <VtdFuncCompObj renderInfo={users} />
      </div>
      <hr/>
      <VtdClassComp />
      {/* Chuyển dữ liệu từ VtdApp -> xuống VtdClassComp */}
      <VtdClassComp rendername="K23CNT3" renderUsers={users} />
    </div>
  );
}

export default VtdApp;
