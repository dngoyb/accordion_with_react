const AccordionItem = ({ title, children, num, currentOpen, onOpen }) => {
	const isOpen = num === currentOpen;
	function handleToggle() {
		onOpen(isOpen ? null : num);
	}
	return (
		<li className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
			<p className='number'>{num <= 9 ? `0${num + 1}` : num + 1}</p>
			<p className='title' style={isOpen ? { color: '#087f5b' } : {}}>
				{title}
			</p>
			<p className='icon'>{isOpen ? '-' : '+'}</p>
			{isOpen && <p className='content-box'>{children}</p>}
		</li>
	);
};

export default AccordionItem;
