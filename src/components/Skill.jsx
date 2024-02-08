import React from 'react';
import { skillText } from '../constants';

const Skill = () => {
  return (
    <section id="skill">
      <div className="skill__inner">
        <h2 className="skill__title">
          Challenge <em>나의 도전</em>
        </h2>
        <div className="skill__desc">
          {skillText.map((skillTexts, index) => (
            <div key={index}>
              <span>{index + 1}.</span>
              <h3>{skillTexts.title}</h3>
              <p>{skillTexts.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;