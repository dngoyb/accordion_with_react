import { useState } from 'react';

const AccordionItem = ({ title, text, num }) => {
	const [isOpen, setIsOpen] = useState(false);
	function handleToggle() {
		setIsOpen((curr) => !isOpen);
	}
	return (
		<li className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
			<p className='number'>{num <= 9 ? `0${num + 1}` : num + 1}</p>
			<p className='title' style={isOpen ? { color: '#087f5b' } : {}}>
				{title}
			</p>
			<p className='icon'>{isOpen ? '-' : '+'}</p>
			{isOpen && <p className='content-box'>{text}</p>}
		</li>
	);
};

export default AccordionItem;
