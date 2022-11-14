import './Skill.css'

const Skill = () => {
    return <div className="container">
    <div className="skills">
    <h1 className="skill-title">Some of the Technologies that I have been recently working with</h1>
    <p className="skill-description">At the moment, I am focusing on Front-End Development with JavaScript and React Framework. 
      I am also in the progress of learning and familiarizing with Back-End technologies like Node, Express and SQL database.</p>
      <div className="border">
    <table>
      <thead>
      </thead>
      <tbody>
        <tr>
          <td>JavaScript 
            <i className="skill-icon devicon-javascript-plain colored"></i>
          </td>
          <td><span className="percent">75%</span>
            <div className="bar one">
              <div className="fill" style={{width:"75%"}}></div>
            </div>
          </td>
        </tr>
              <tr>
          <td>C#
            <i className="skill-icon devicon-csharp-line-wordmark colored"></i>
          </td>
          <td><span className="percent">30%</span>
            <div className="bar two">
              <div className="fill" style={{width:"30%"}}></div>
            </div>
          </td>
        </tr>
        <tr>
          <td>React 
            <i className="skill-icon devicon-react-original colored"></i>
           </td>
          <td><span className="percent">75%</span>
            <div className="bar one">
              <div className="fill" style={{width:"75%"}}></div>
            </div>
          </td>
        </tr>
        <tr>
          <td>CSS 
            <i className="skill-icon devicon-css3-plain colored"></i>
          </td>
          <td><span className="percent">75%</span>
            <div className="bar one">
              <div className="fill" style={{width:"75%"}}></div>
            </div>
          </td>
        </tr>
        <tr>
          <td>HTML5 
            <i className="skill-icon devicon-html5-plain-wordmark colored"></i>
           </td>
          <td><span className="percent">75%</span>
            <div className="bar one">
              <div className="fill" style={{width:"75%"}}></div>
            </div>
          </td>
        </tr>
        <tr>
          <td>TypeScript 
            <i className="skill-icon devicon-typescript-plain"></i>
          </td>
          <td><span className="percent">30%</span>
            <div className="bar two">
              <div className="fill" style={{width:"30%"}}></div>
            </div>
          </td>
        </tr>
        <tr>
          <td>MongoDB 
            <i className="skill-icon devicon-mongodb-plain-wordmark"></i>
          </td>
          <td><span className="percent">30%</span>
            <div className="bar two">
              <div className="fill" style={{width:"30%"}}></div>
            </div>
          </td>
        </tr>
        {/* <tr>
          <td>MySQL</td>
          <td><span className="percent">30%</span>
            <div className="bar two">
              <div className="fill" style={{width:"30%"}}></div>
            </div>
          </td>
        </tr> */}
        <tr>
          <td>Node.js 
            <i className="skill-icon devicon-nodejs-plain-wordmark colored"></i>
          </td>
          <td><span className="percent">45%</span>
            <div className="bar two">
              <div className="fill" style={{width:"45%"}}></div>
            </div>
          </td>
        </tr>
        <tr>
          <td>Redux
            <i className="skill-icon devicon-redux-original colored"></i>
          </td>
          <td><span className="percent">45%</span>
            <div className="bar two">
              <div className="fill" style={{width:"45%"}}></div>
            </div>
          </td>
        </tr>
        <tr>
          <td className="last">HubSpot CMS</td>
          <td className="last"><span className="percent">45%</span>
            <div className="bar two">
              <div className="fill" style={{width:"45%"}}></div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
   </div>
    </div>
  </div>
  
}

export default Skill