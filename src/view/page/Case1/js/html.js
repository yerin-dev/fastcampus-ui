import React from "react";
import styled from "styled-components";

function Html() {
  return (
    <Container>
      <div id="app">
        <header>
          <h2>Q1 - 1. 자바스크립트 (1)</h2>
          <ul>
            <li>목록을 클릭하면 해당 아이템에 대한 컨텍스트메뉴가 나타나고,</li>
            <li>메뉴를 선택하거나 그 외의 부분을 클릭하면 사라지는</li>
            <li>팝오버 컴포넌트를 구현하세요.</li>
            <li>팝오버는 한 번에 하나만 보여야 합니다.</li>
          </ul>

          <code>
				<pre>
{`
const wrapper = document.querySelector(".wrapper");
const items = document.querySelectorAll(".item");

wrapper.addEventListener("click", function (e) {
  const targetElem = e.target;
  e.stopPropagation();
  
  if (!targetElem.classList.contains("item")) return;
  targetElem.classList.toggle("open");
  
  items.forEach(function(elem) {
    if(elem !== targetElem) elem.classList.remove("open");
  })
});

document.body.addEventListener("click", function (e){
  const targetClassList = e.target.classList;
  if(targetClassList.contains("context")) return;
  
  items.forEach(function(elem){
    elem.classList.remove("open");
  })
});
`}
				</pre>
          </code>
        </header>

        <div className="wrapper">
          <div className="item">
            Lorem ipsum dolor sit amet,
            <div className="context">consectetur adipisicing elit.</div>
          </div>
          <div className="item">
            Dolorum distinctio eius quaerat natus quas et fugit iure dolorem! Quas repellat ea et debitis nostrum
            eos
            placeat accusantium voluptatibus vero culpa non, nesciunt assumenda earum a
            <div className="context">consequatur velit id doloribus quae dolorum facere nemo, inventore hic adipisci
              odit.
            </div>
          </div>
          <div className="item">
            Iure sequi, laborum quam iste! Omnis perferendis autem repellat, est doloribus tenetur quod repellendus
            minus,
            <div className="context">debitis eum beatae officia pariatur dolores dolorum reprehenderit assumenda
              perspiciatis natus ab! Fugit facere itaque placeat minus, perspiciatis ad quod nisi temporibus
              deleniti,
            </div>
          </div>
          <div className="item">
            Eius quasi eaque corporis quod, ducimus doloremque iste natus perferendis aliquam placeat sed suscipit
            corrupti quae,
            <div className="context">ea amet ratione! Laborum sapiente corporis, alias ea adipisci praesentium ratione
              quibusdam voluptate perspiciatis porro labore eveniet dolore delectus cumque sunt! Rerum veritatis
              facilis molestias laboriosam.
            </div>
          </div>
          <div className="item">
            Alias natus eveniet praesentium aliquid vitae tempora rerum tempore debitis officia earum sunt quasi
            magni
            illo vero
            <div className="context">harum sapiente perspiciatis porro nobis quae, error? Sint minus ullam, officia
              libero
              quisquam quam laudantium unde quos fuga minima perferendis consectetur repudiandae soluta, corporis?
              Delectus, quaerat.
            </div>
          </div>
          <div className="item">
            Velit excepturi quis officiis dolor aliquam, nam ut tenetur! Nam excepturi, quaerat numquam nesciunt
            expedita
            <div className="context">aspernatur sed aliquid eaque, eligendi qui eius facere animi rem accusamus sunt
              rerum
              vero doloremque.
            </div>
          </div>
          <div className="item">
            Cum eligendi vitae delectus harum assumenda iusto, tempore voluptatum voluptates explicabo aspernatur
            sint
            <div className="context">alias quisquam, doloremque? Quaerat natus, dolores esse recusandae ea
              accusantium</div>
          </div>
          <div className="item">
            Nobis, ullam! Sed pariatur accusamus tenetur beatae provident, ex dolorum adipisci eligendi asperiores
            consequatur?
            <div className="context">Iusto natus libero aliquam incidunt, perferendis.</div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div``;

export default Html;
