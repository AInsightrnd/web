import { Container } from '@/components/Container'

const faqs = [

 
  [
    {
      question: 'AICiTi 프로그램을 왜 사용해야 합니까?',
      answer:
        '치료 계획을 세우기에 앞서 골격 분석을 진행한다면, 해당 환자가 발치케이스인지 수술케이스인지 정확히 판단할 수 있습니다. \n 또한 보다 효율적이고 만족스러운 치료 결과를 위한 계획을 세울 수 있게 도와줍니다.'
    },
    {
      question: 'AICiTi 프로그램만의 차별점이 무엇입니까?',
      answer:
        '• 치아교정, 양악수술 치료를 계획함에 있어 꼭 필요한 계측점만 나타낸다 \n• AI기술을 이용해 계측치를 30초 이내로 나타내 보여준다 \n• 쉬운 조작 \n• 결과값 즉시 제공'
    },
    {
      question: '프로그램 사용을 위해서 꼭 CBCT가 필요합니까?',
      answer:
        '프로그램을 통한 분석을 얻기 위해서는 반드시 Nasion부터 Menton까지 촬영되는 CBCT 장비가 필요합니다.',
    },
    {
      question: '기존 타 프로그램 분석법과 차이점은 무엇입니까?',
      answer:
        '기존 분석법(프로그램)은 2D cephalo 분석으로, 많은 수의  두개 내 기준선을 사용합니다. \n AICiTi program은 CBCT를 이용한 3D 골격 분석법으로, 두개 외 기준선인 NTVP, THP를 이용합니다.'
    },
    {
      question: 'NHP란  무엇입니까?',
      answer:
        '“ortho Position“이라고 불리며, 재현성과 신뢰도가 높은 촬영 자세입니다. \n 환자가 편안히 서서, 정면에 있는 거울 속 자신의 눈을 바라보는 상태를 말합니다.',
    },
    {
      question: 'AI 훈련 방법은 무엇을 사용하였나? ',
      answer:
        'supervised learning을 사용하였다.  규칙이 있는 데이터를 컴퓨터에 학습시켜 새로운 데이터의 결과를 예측하는 방법이다',
    },
    {
      question: '빅데이터는 몇 명인가?',
      answer:
        '총 Big Data는 200명이다. 그 중 170명을 학습시키고, 30명은 검증을 위해 사용하였다.',
    },
    {
      question: '프로그램은 누가 개발하였나?',
      answer:
        '중앙대학교 광명병원 치과교정과 과장 안장훈 교수와, 한양대 기계공학과 윤종헌교수의 협업으로 개발되었다.',
    },
  ],
 
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 py-24 sm:px-6 sm:py-32 sm:mx-auto
        lg:max-w-7xl px-8 lg:grid-cols-4 lg:mx-0 "
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
              href="#"
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
          overflow-auto max-h-[calc(theme('dvh.1')*0.5] flex items-start ">
        
          {faqs.map((column, columnIndex) => (

              <ul role="list" className="flex justify-items-start grid cols-1 w-full">
                {column.map((faq, faqIndex) => (
                  <details key={faqIndex}
                  className="w-full rounded-md mb-6 p-4 bg-gray-800 hover:bg-gray-700 cursor-pointer">
                    <summary className=" text-lg font-semibold leading-6 text-gray-50 ">
                      {faq.question}
                    </summary>
                    <div className="border-t border-gray-500 mt-4"></div>
                    <p className="px-2 mt-4 text-md text-gray-100 whitespace-pre-line overflow-x-hidden">{faq.answer}</p>
                  </details>
                ))}
              </ul>

          ))}
        </ul>

    </section>
  )
}
