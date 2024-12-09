import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img alt="peter_lovei" src={require('./img/pl.jpg')} width={"200px"} height={"200px"} />
      </header>
      <div className='App-body'>
        <div style={{textAlign: "center"}}><h2>Hello, I am Peter Lovei, PhD</h2></div>
        <p>I am an experienced design professional with a technical background and 10 years of industry experience from <a href="https://www.philips.com/a-w/about/innovation/experience-design.html" target="_blank" rel="noreferrer">Philips Experience Design</a>.</p>
        <p>I am relocating to Vienna, Austria in January, 2025 and actively looking for a job!</p>
       
        <h3><a href="https://www.philips.nl/a-w/about/news/archive/standard/about/news/articles/2023/20230928-dutch-design-week-een-nieuw-zorgtraject-ontwerpen-vanuit-de-wensen-van-de-doelgroep.html#english" target='_blank' rel="noreferrer" >Close to Heart</a></h3>
        <p>The <a href="https://www.philips.nl/a-w/about/news/archive/standard/about/news/articles/2023/20230928-dutch-design-week-een-nieuw-zorgtraject-ontwerpen-vanuit-de-wensen-van-de-doelgroep.html#english" target='_blank' rel="noreferrer" >Close to Heart</a> project is an <a href="https://ifdesign.com/en/winner-ranking/project/close-to-heart/542752" target="_blank" rel="noreferrer" >award winning</a> collaboration between <a href="https://www.philips.com/a-w/about/innovation/experience-design.html" target="_blank" rel="noreferrer" >Philips Experience Design</a>, <a href="https://www.tue.nl/en/our-university/departments/industrial-design/research" target="_blank" rel="noreferrer" >Eindhoven University of Technology</a> and the <a href="https://www.catharinaziekenhuis.nl/catharina-hart-en-vaatcentrum/"target="_blank" rel="noreferrer">Catharina Hospital</a>. As a data experience designer I was responsible for redesigning the atrial fibrillation care pathway from a technical perspective. The most important perspective of this was the fact that I worked together with technical consultants to configure, and deploy a CE-marked patient engagement platform.</p>

        <h2>Specific activities and challenges</h2>
        <ul>
          <li>Mapping out the activities of the atrial fibrillation care pathway with a strong focus on the current data flow between the patients, healthcare professionals, and the hospital systems</li>
          <li>Configuring the patient engagement platform to include educational content related to risk factors (e.g. smoking, alcohol, healthy nutrition)</li>
          <li>Development of a data pipeline for being able to conduct Data-enabled Design research</li>
          <li>Daily evaluation of patient and staff experience based on the collected data</li>
          <li><a href="https://www.ijdesign.org/index.php/IJDesign/article/view/4805/1045" target="_blank" rel="noreferrer">Writing research publications about our project</a></li>
          <li><a href="https://youtu.be/V-aeBIRej7M?si=sXF5HOQbi3O8VNZJ&t=2321" target="_blank" rel="noreferrer">Public speaking engagements</a></li>
        </ul>


        <h3>A summary of my process, and project highlights aka. my PhD presentation</h3>
        <iframe title="phd_portfolio" className='presentation' src="https://1drv.ms/p/s!AsHe59hm9rxGgaxnKag9Or6Qza5Kvg?embed=1&amp;em=2&amp;wdAr=1.7777777777777777" width="80%" height="400px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com" rel="noreferrer" >Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps" rel="noreferrer" >Office</a>.</iframe>
      
        <p>If you want to get to know me better, please use the CV chatbot by clicking the button in the bottom-right of this page</p>
      </div>
    </div>
  );
}

export default App;
