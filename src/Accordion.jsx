import { useState } from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({ data }) => {
	const [currentOpen, isCurrentOpen] = useState(null);
	return (
		<ul className='accordion'>
			{data.map(({ title, text }, index) => (
				<AccordionItem
					currentOpen={currentOpen}
					onOpen={isCurrentOpen}
					key={index}
					title={title}
					text={text}
					num={index}>
					{text}
				</AccordionItem>
			))}
		</ul>
	);
};

export default Accordion;
