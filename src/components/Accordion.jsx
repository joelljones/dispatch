import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Accordion() {
	const faqItems = [
		{
			question: 'Do I need my own Motor Carrier Authority?',
			answer:
				"Yes, unless you're leased to a carrier and require dispatching assistance for your current shipments.",
		},
		{
			question: 'What are your company requirements?',
			answer:
				"While we prefer a minimum of 6 months in the business, it's not mandatory. The essential requirements are an active authority and insurance.",
		},
		{
			question: 'What types of trailers can you book freight for?',
			answer:
				'Our expertise lies in dry van freight, but we also work with reefer and flatbed carriers.',
		},
		{
			question: 'How long does the setup process take?',
			answer:
				'With all necessary documents provided, you can expect setup within 2-4 hours.',
		},
		{
			question: 'Do you hold a broker license?',
			answer:
				"No, we don't possess a broker license. All bookings are made under your authority. This ensures that we cannot adjust your rates, a practice some broker-dispatch firms engage in.",
		},
		{
			question: "I've found a dispatcher with lower fees. Can you match them?",
			answer:
				'No, we maintain a strict policy of "no more than 5 trucks per dispatcher" to guarantee our clients access to the highest available market rates. This approach ultimately makes our service more cost-effective than the competition.',
		},
		{
			question: 'Where can I operate?',
			answer:
				'You have the flexibility to run in all 48 states or within a region of your choice. Most of our clients prefer operating in the Southeast, Midwest, and Northeast regions.',
		},
		{
			question: 'Can I focus on local/regional routes?',
			answer:
				"Absolutely, if you're comfortable with fewer weekly miles (1000-1800).",
		},
		{
			question: 'How long am I required to stay on the road?',
			answer: 'The duration of your trips is entirely at your discretion.',
		},
		{
			question: 'What types of freight can you secure for me?',
			answer:
				'We have experience booking a wide range of freight, from watermelons to airplane parts. If you have specific requests, please feel free to let us know.',
		},
		{
			question: 'How will I receive payments?',
			answer:
				"As you operate under your own Authority, you'll bill and receive payments directly from individual brokers and shippers. For expedited payments, you can also opt for a factoring company, and we're happy to facilitate credit checks for you.",
		},
		{
			question: 'How will I be invoiced?',
			answer:
				'We accept all major credit and debit cards. For our weekly plan, a recurring charge will be set up to streamline your payment process.',
		},
	]

	return (
		<div className='w-full px-4'>
			<div className='mx-auto w-full max-w-md rounded-2xl p-2'>
				{faqItems.map((item, index) => (
					<Disclosure key={index}>
						{({ open }) => (
							<div className='border-b border-zinc-800'>
								<DisclosureButton className='flex w-full justify-between py-4 text-left text-base group'>
									<span className='group-data-[hover]:text-white/80'>
										{item.question}
									</span>
									<ChevronDownIcon
										className={`h-5 w-5 transform transition-transform duration-200 ${
											open ? 'rotate-180' : ''
										}`}
									/>
								</DisclosureButton>
								<DisclosurePanel className='pb-4 text-sm text-left'>
									{item.answer}
								</DisclosurePanel>
							</div>
						)}
					</Disclosure>
				))}
			</div>
		</div>
	)
}
