import "./byeie"; // loučíme se s IE
import { h, render } from "preact";
/** @jsx h */

let host = "https://data.irozhlas.cz/anketa-rouskovne";
if (window.location.hostname === "localhost") {
  host = "http://localhost/anketa-rouskovne"
}

const qu1 = 'Je podle vás takzvané rouškovné „úplatek“ pro voliče? Proč ano/ne?'
const qu2 = 'Souhlasíte s vyplacením příspěvku a podpoříte návrh během hlasování ve sněmovně?'

function printResps(obj) {
  if (obj.o1 === null) { obj.o1 = '<i>Bez odpovědi.</i>'}
  if (obj.o2 === null) { obj.o2 = '<i>Bez odpovědi.</i>'}
  return `<b>${qu1}</b><p>${obj.o1}</p><b>${qu2}</b><p>${obj.o2}</p>`
}

function onLoad(e) {
  const data = JSON.parse(e.target.response)
  render((
    <div id="anketa">
      {data.map(el => (
        <div className="respondent">
          <img className="portret" src={host + "/foto/" + el.f} alt={el.p} />
          <div className={el.o0 =="NE" ? "bio cervene" : el.o0 == "ANO" ? "bio zelene" :"bio"}>
            <div className="jmeno">{`${el.j} ${el.p}`}</div>
            <div className="vek">{el.s}</div>
          </div>
          <div className="odpoved" dangerouslySetInnerHTML={{ __html: printResps(el) }}></div>
        </div>
      ))}
    </div>
  ), document.getElementById("anketa-wrapper"))
}

const r = new XMLHttpRequest()
r.addEventListener("load", onLoad)
r.open("GET", host + "/data/data.json")
r.send()