import './App.css';
import axios from "axios";
import { jsPDF } from "jspdf";

function App() {

  const postData = async (str) => {
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    const result = await axios.post(`https://localhost:5001/api/Values`, { str });
    const json = await result.json();
    console.log(json);
  };

  const handleClick = async (e) => {
    const doc = new jsPDF();
    const report = document.getElementById('app');
    doc.html(report);
    const blob = doc.output('blob');
    const text = await blob.text();
    console.log(text);
    await postData(text);
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
