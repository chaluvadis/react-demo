import './App.css';
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
function App() {
  const postData = async (fileText) => {
    const result = await fetch("https://localhost:5001/api/Values", {
      "method":"POST",
      "mode":"cors",
      "headers": {
        "Content-Type": "application/json;charset=utf-8"
      },
      "body": {"fileText":fileText}
    });
    const response = await result.json();
    console.log(response);
  };

  const handleClick = async (e) => {
    const doc = new jsPDF();
    const report = document.getElementById('app');
    doc.html(report);
    const fileText = doc.output('dataurlstring');
    console.log(fileText);
    await postData(fileText);
  };
  return (
    <div className="app">
      <div>
        <button className="btn" onClick={handleClick} id="btn">Print</button>
      </div>
      <div id="app">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolorum in animi laudantium quae eum dolorem consequatur tempore dicta. Unde neque, est esse aliquam iste doloribus. Eaque cum et accusantium!
      </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolorum in animi laudantium quae eum dolorem consequatur tempore dicta. Unde neque, est esse aliquam iste doloribus. Eaque cum et accusantium!
      </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolorum in animi laudantium quae eum dolorem consequatur tempore dicta. Unde neque, est esse aliquam iste doloribus. Eaque cum et accusantium!
      </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolorum in animi laudantium quae eum dolorem consequatur tempore dicta. Unde neque, est esse aliquam iste doloribus. Eaque cum et accusantium!
      </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolorum in animi laudantium quae eum dolorem consequatur tempore dicta. Unde neque, est esse aliquam iste doloribus. Eaque cum et accusantium!
      </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolorum in animi laudantium quae eum dolorem consequatur tempore dicta. Unde neque, est esse aliquam iste doloribus. Eaque cum et accusantium!
      </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolorum in animi laudantium quae eum dolorem consequatur tempore dicta. Unde neque, est esse aliquam iste doloribus. Eaque cum et accusantium!
      </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolorum in animi laudantium quae eum dolorem consequatur tempore dicta. Unde neque, est esse aliquam iste doloribus. Eaque cum et accusantium!
      </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolorum in animi laudantium quae eum dolorem consequatur tempore dicta. Unde neque, est esse aliquam iste doloribus. Eaque cum et accusantium!
      </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolorum in animi laudantium quae eum dolorem consequatur tempore dicta. Unde neque, est esse aliquam iste doloribus. Eaque cum et accusantium!
      </p><p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolorum in animi laudantium quae eum dolorem consequatur tempore dicta. Unde neque, est esse aliquam iste doloribus. Eaque cum et accusantium!
      </p><p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolorum in animi laudantium quae eum dolorem consequatur tempore dicta. Unde neque, est esse aliquam iste doloribus. Eaque cum et accusantium!
      </p><p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolorum in animi laudantium quae eum dolorem consequatur tempore dicta. Unde neque, est esse aliquam iste doloribus. Eaque cum et accusantium!
      </p><p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolorum in animi laudantium quae eum dolorem consequatur tempore dicta. Unde neque, est esse aliquam iste doloribus. Eaque cum et accusantium!
      </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolorum in animi laudantium quae eum dolorem consequatur tempore dicta. Unde neque, est esse aliquam iste doloribus. Eaque cum et accusantium!
      </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolorum in animi laudantium quae eum dolorem consequatur tempore dicta. Unde neque, est esse aliquam iste doloribus. Eaque cum et accusantium!
      </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolorum in animi laudantium quae eum dolorem consequatur tempore dicta. Unde neque, est esse aliquam iste doloribus. Eaque cum et accusantium!
      </p>
      </div>
    </div>
  );
}

export default App;
