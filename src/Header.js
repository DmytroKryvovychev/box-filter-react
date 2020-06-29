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
        <li data-f="all" className="text-all">
          All
        </li>
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
