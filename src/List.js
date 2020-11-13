import React from 'react';

const List = ({people}) => {
  return (
    <>
      {people.map(({id, name, age, image})=>{
          return (
              <article key={id} className="person">
                  <figure>
                      <img className="person__image" src={image} alt={name} />
                  </figure>
                  <div>
                      <h4 className="person__name">{name}</h4>
                      <p className="person__age">{age} years</p>
                  </div>
              </article>
          )
      })}
    </>
  );
};

export default List;
