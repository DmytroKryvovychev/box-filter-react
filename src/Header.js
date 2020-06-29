import React from 'react';

function Header({ items }) {
  const sortRef = React.useRef();

  const handleInsideClick = (e) => {
    if (e.path.includes(sortRef.current)) {
      let filterClass = e.target.dataset['f'];

      const filterBox = document.querySelectorAll('.box');

      filterBox.forEach((box) => {
        box.classList.remove('hide');
        if (!box.classList.contains(filterClass) && filterClass !== 'all') {
          box.classList.add('hide');
        }
      });
    }
  };

  React.useEffect(() => {
    document.body.addEventListener('click', handleInsideClick);
  }, []);

  return (
    <nav ref={sortRef}>
      <ul>
        {items.map((item) => (
          <li key={item} data-f={item} className={`text-${item}`}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Header;

//const filterBox = document.querySelectorAll('.box');

//document.querySelector('nav').addEventListener('click', (event) => {
// if (event.target.tagName !== 'LI') return false;
//let filterClass = event.target.dataset['f'];

// filterBox.forEach((elem) => {
//  elem.classList.remove('hide');
// if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
//   elem.classList.add('hide');
//  }
// });
//});
