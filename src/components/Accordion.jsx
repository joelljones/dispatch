import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

// TODO: add faqs

export default function Accordion() {
  return (
    <div className="w-full px-4">
      <div className="mx-auto w-full max-w-md rounded-2xl p-2">
        <Disclosure>
          {({ open }) => (
            <div className="border-b-[1px] border-[#27272a]">
              <Disclosure.Button className="flex w-full justify-between py-4 text-left text-base font-medium hover:underline">
                <span>What is your refund policy?</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pb-4 text-sm text-left">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <div className="border-b-[1px] border-[#27272a]">
              <Disclosure.Button className="flex w-full justify-between py-4 text-left text-base font-medium hover:underline">
                <span>Do you offer technical support?</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pb-4 text-sm text-left">
                No.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
