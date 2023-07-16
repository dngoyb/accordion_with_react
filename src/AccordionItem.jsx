const AccordionItem = ({ title, text, num }) => {
	return (
		<li className='item'>
			<p className='number'>{num <= 9 ? `0${num + 1}` : num + 1}</p>
			<p className='title'>{title}</p>
			<p className='icon'>-</p>
			<p className='content-box'>{text}</p>
		</li>
	);
};

export default AccordionItem;
