import AccordionItem from './AccordionItem';

const Accordion = ({ data }) => {
	return (
		<ul className='accordion'>
			{data.map(({ title, text }, index) => (
				<AccordionItem key={index} title={title} text={text} num={index} />
			))}
		</ul>
	);
};

export default Accordion;
