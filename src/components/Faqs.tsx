import { Container } from '@/components/Container'

const faqs = [

 
  [
    {
      question: 'The standard Lorem Ipsum passag?',
      answer:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      question: 'The standard Lorem Ipsum passag?',
      answer:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      question: 'The standard Lorem Ipsum passag?',
      answer:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
  ],
 
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 py-24 sm:px-6 sm:py-32 sm:mx-auto 
        lg:max-w-7xl lg:px-8 lg:grid-cols-4 lg:mx-0"
    >
      <div className="select-none grid lg:grid-cols-1 gap-y-2 sm:grid-cols-1 sm:gap-y-46 lg:gap-x-4 items-start">
          <h2
            id="faqs-title"
            className="text-3xl font-bold tracking-tight text-gray-50"
          >
            자주 묻는 질문
          </h2>
          <p className="mt-2 text-gray-200 break-keep">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:info@example.com"
              className="text-gray-300 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="sm:col-span-full lg:col-span-3 gap-4 sm:gap-6 lg:gap-8 overscroll-y-contain 
          overflow-auto max-h-[calc(theme('dvh.1')*0.6] flex items-start ">
        
          {faqs.map((column, columnIndex) => (

              <ul role="list" className="flex justify-items-start  grid cols-1 gap-y-6 w-full">
                {column.map((faq, faqIndex) => (
                  <details key={faqIndex}
                  className="gap-y-2  rounded-lg p-4 bg-gray-800 w-full ">
                    <summary className=" text-lg font-semibold leading-6 text-gray-100 ">
                      {faq.question}
                    </summary>
                    <div className="border-t border-gray-500 mt-4"></div>
                    <p className="mt-4 text-sm text-gray-300 ">{faq.answer}</p>
                  </details>
                ))}
              </ul>

          ))}
        </ul>

    </section>
  )
}
