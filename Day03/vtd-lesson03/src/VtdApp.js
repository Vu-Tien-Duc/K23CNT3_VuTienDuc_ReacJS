import VtdClassComp from "./components/VtdClassComp";
import VtdFuncComp from "./components/VtdFuncComp";
import VtdJsxexpression from "./components/VtdJsxExpression";


function VtdApp() {
  return (
    <div className="container border mt-3 bg-white">
       <h1 style={{textAlign:'center', color:'red', fontFamily:'initial'}}>React JS Lesson03 - Vũ Tiến Đức</h1>
       <VtdJsxexpression />
       <hr/>
       {/* Sử dụng function components */}
       <VtdFuncComp />
       <hr/>
       {/* sử dụng class Component */}
       <VtdClassComp />
    </div>
  );
}

export default VtdApp;
